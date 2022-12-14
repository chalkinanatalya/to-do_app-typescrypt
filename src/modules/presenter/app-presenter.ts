import { mock } from "../mock";
import { createAppMarkUp } from "../view/app-view";
import { createTasksMarkUp } from "./task-presenter";

export const renderApp = () => {
    const body = document.querySelector('body') as HTMLBodyElement;
    body?.insertAdjacentHTML('beforeend', createAppMarkUp());

    renderTaskList();
}

export const renderTaskList = () => {
    const tBody = document.querySelector('tbody') as HTMLTableSectionElement;
    tBody?.insertAdjacentHTML('beforeend', createTasksMarkUp(mock));
}





