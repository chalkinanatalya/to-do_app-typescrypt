import { nanoid } from "../../../node_modules/nanoid/index";
import { TaskInterface } from "../create-task";
import { addTask, changeTask, getTaskList, removeTask } from "../model/task-model";
import { createAppMarkUp } from "../view/app-view";
import { createTasksMarkUp } from "./task-presenter";

export const renderApp = () => {
    const body = document.querySelector('body') as HTMLBodyElement;
    body?.insertAdjacentHTML('beforeend', createAppMarkUp());

    renderTasksList(getTaskList());
    saveButtonHandler();
    removeButtonHandler();
}

export const renderTasksList = (taskList: TaskInterface[]) => {
    const tBody = document.querySelector('tbody') as HTMLTableSectionElement;
    tBody?.insertAdjacentHTML('beforeend', createTasksMarkUp(taskList));
    //TODO функция перерисовки всех номеров
}

export const removeTableString = (cell: HTMLElement): void => {
    cell.parentElement?.remove();
}

const saveButtonHandler = () => {
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

const removeButtonHandler = () => {
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