import { nanoid } from "../../../node_modules/nanoid/index";
import { TaskInterface } from "../create-task";
import { addTask, changeTask, completeTask, getTaskList, removeTask } from "../model/task-model";
import { createTaskMarkUp } from "../view/task-view";
import { renderTasksList, updateNumeration } from './app-presenter';

export const createTasksMarkUp = (tasks: TaskInterface[]): string => {
    let taskTemplate: string = '';
    tasks.forEach((task) => {
        taskTemplate += createTaskMarkUp(task);
    })

    return taskTemplate;
}

const removeTableString = (cell: HTMLElement): void => {
    cell.parentElement?.remove();
}

const modifyTableString = (cell: HTMLElement, status: string): void => {
    let removeBackground;
    let addBackground;
    let buttonContent;
    if (status === 'Завершён') {
        removeBackground = 'table-light';
        addBackground = 'table-success';
        buttonContent = "Отменить";
        cell.parentElement?.children?.item(1)?.classList.add('text-decoration-line-through');
    } else {
        removeBackground = 'table-success';
        addBackground = 'table-light';
        buttonContent = "Завершить";
        cell.parentElement?.children?.item(1)?.classList.remove('text-decoration-line-through');
    }
    cell.parentElement?.classList.remove(removeBackground);
    cell.parentElement?.classList.add(addBackground);

    let tr = document.querySelector(`#${cell.id}`)?.parentElement;
    tr!.children[2].textContent = status;

    cell.children[1].textContent = buttonContent;
}


export const checkInput = (buttonSave: HTMLButtonElement, input: HTMLInputElement): void => {
    if (input.value === '') {
        buttonSave.disabled = true;
    } else {
        buttonSave.disabled = false;
    }
}

export const stateHandler = (buttonSave: HTMLButtonElement, input: HTMLInputElement): void => {
    input.addEventListener('keyup', (e) => {
        const target = e.target as HTMLInputElement;
        checkInput(buttonSave, target);
    })
}

export const saveButtonHandler = (buttonSave: HTMLButtonElement, input: HTMLInputElement) => {
    buttonSave.disabled = true;

    buttonSave.addEventListener('click', (e) => {
        e.preventDefault();

        checkInput(buttonSave, input);
        if (buttonSave.disabled) {
            return;
        }

        const newTask: TaskInterface = {
            id: nanoid(),
            taskText: input.value,
            status: 'В процессе',
        }

        changeTask(addTask, newTask);
        renderTasksList([newTask]);
        input.value = '';
        buttonSave.disabled = true;
        removeButtonHandler();
        completeButtonHandler();
    })
}

export const removeButtonHandler = () => {
    const buttonsRemove = document.querySelectorAll('.btn-danger') as NodeListOf<HTMLButtonElement>;
    buttonsRemove.forEach(buttonRemove =>
        buttonRemove.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target as HTMLButtonElement;

            if (target.parentElement) {
                const removedTask: TaskInterface = {
                    id: target.parentElement.id,
                }
                changeTask(removeTask, removedTask);
                removeTableString(target.parentElement);
                updateNumeration();
            }
        })
    );
}

export const completeButtonHandler = () => {
    const buttonComplete = document.querySelectorAll('.btn-success') as NodeListOf<HTMLButtonElement>;
    buttonComplete.forEach(button =>
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target as HTMLButtonElement;
            const taskList = getTaskList();
            const currentId = target.parentElement?.id;
            const currentTask = taskList.find(task => task.id === currentId);
            const taskStatus = currentTask?.status === 'Завершён' ? 'В процессе' : 'Завершён';

            if (target.parentElement) {
                const completedTask: TaskInterface = {
                    id: currentId,
                    status: taskStatus
                }
                changeTask(completeTask, completedTask);
                modifyTableString(target.parentElement, taskStatus);
            }
        })
    );
}
