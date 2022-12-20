import { TaskInterface } from "../create-task";
import { getTaskList } from "../model/task-model";
import { createAppMarkUp } from "../view/app-view";
import { completeButtonHandler, createTasksMarkUp, removeButtonHandler, saveButtonHandler, stateHandler } from "./task-presenter";

export const renderApp = () => {
    const body = document.querySelector('body') as HTMLBodyElement;
    body?.insertAdjacentHTML('beforeend', createAppMarkUp());

    renderTasksList(getTaskList());
    evokeHandler();
    removeButtonHandler();
    completeButtonHandler();
}

export const renderTasksList = (taskList: TaskInterface[]) => {
    const tBody = document.querySelector('tbody') as HTMLTableSectionElement;
    tBody?.insertAdjacentHTML('beforeend', createTasksMarkUp(taskList));

    const table = document.querySelector('.table') as HTMLTableElement;
    const rows: HTMLCollectionOf<HTMLTableRowElement> = table.rows;

    for (let i = 1; i < rows.length; i++) {
        rows[i].children.item(0)!.textContent = String(i);
    }
}

const evokeHandler = () => {
    const buttonSave = document.querySelector('.btn-primary') as HTMLButtonElement;
    const input = document.querySelector('.form-control') as HTMLInputElement;
    saveButtonHandler(buttonSave, input);
    stateHandler(buttonSave, input);
}