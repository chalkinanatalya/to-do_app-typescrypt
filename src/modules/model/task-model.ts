import { nanoid } from "../../../node_modules/nanoid/index";
import { TaskInterface } from "../create-task";

export const getTaskList = (): TaskInterface[] => {
    let storage: string | null = '';
    let taskList: TaskInterface[];
    const username = sessionStorage.getItem('activeUser');

    if (username) {
        storage = localStorage.getItem(username);
    }
    storage !== null ? taskList = JSON.parse(storage) : taskList = [];

    return taskList;
}

export const addTask = (task: TaskInterface): void => {
    let taskList = getTaskList();
    const username = sessionStorage.getItem('activeUser');

    taskList.push(task);

    if (typeof username === 'string') {
        localStorage.setItem(username, JSON.stringify(taskList));
    }
}