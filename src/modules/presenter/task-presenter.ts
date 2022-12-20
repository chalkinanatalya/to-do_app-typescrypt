import { nanoid } from "../../../node_modules/nanoid/index";
import { TaskInterface } from "../create-task";
import { addTask, changeTask, completeTask, removeTask } from "../model/task-model";
import { createTaskMarkUp } from "../view/task-view";
import { renderTasksList } from "./app-presenter";

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

const modifyTableString = (cell: HTMLElement): void => {
    cell.parentElement?.classList.remove('table-light');
    cell.parentElement?.classList.add('table-success');
    cell.parentElement?.children?.item(1)?.classList.add('text-decoration-line-through');
}

export const saveButtonHandler = () => {
    const buttonSave = document.querySelector('.btn-primary') as HTMLButtonElement;

    buttonSave.addEventListener('click', (e) => {
        e.preventDefault();

        const input = document.querySelector('.form-control') as HTMLInputElement;
        const newTask: TaskInterface = {
            id: nanoid(),
            taskText: input.value,
            status: 'running',
        }

        changeTask(addTask, newTask);
        renderTasksList([newTask]);
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

            if (target.parentElement) {
                const completedTask: TaskInterface = {
                    id: target.parentElement.id,
                    status: 'completed'
                }
                changeTask(completeTask, completedTask);
                modifyTableString(target.parentElement);
            }
        })
    );
}
