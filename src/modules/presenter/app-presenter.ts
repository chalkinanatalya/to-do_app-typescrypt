import { nanoid } from "../../../node_modules/nanoid/index";
import { TaskInterface } from "../create-task";
import { addTask, getTaskList } from "../model/task-model";
import { createAppMarkUp } from "../view/app-view";
import { createTasksMarkUp } from "./task-presenter";

export const renderApp = () => {
    const body = document.querySelector('body') as HTMLBodyElement;
    body?.insertAdjacentHTML('beforeend', createAppMarkUp());

    renderTasksList(getTaskList());
    buttonHandler();
}

export const renderTasksList = (taskList: TaskInterface[]) => {
    const tBody = document.querySelector('tbody') as HTMLTableSectionElement;
    tBody?.insertAdjacentHTML('beforeend', createTasksMarkUp(taskList));
    //функция перерисовки всех номеров
}

const buttonHandler = () => {
    const buttonSave = document.querySelector('.btn-primary') as HTMLButtonElement;

    buttonSave.addEventListener('click', (e) => {
        e.preventDefault();

        const input = document.querySelector('.form-control') as HTMLInputElement;
        const newTask: TaskInterface = {
            id: nanoid(),
            taskText: input.value,
            status: 'running',
        }

        addTask(newTask);
        renderTasksList([newTask]);
    })
}