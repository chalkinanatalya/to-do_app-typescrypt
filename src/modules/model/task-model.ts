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

export const changeTask = (taskChanger: (taskList: TaskInterface[], task: TaskInterface) => TaskInterface[], task: TaskInterface): void => {
    let taskList = getTaskList();
    const username = sessionStorage.getItem('activeUser');

    taskList = taskChanger(taskList, task);

    if (typeof username === 'string') {
        localStorage.setItem(username, JSON.stringify(taskList));
    }
}

export const addTask = (taskList: TaskInterface[], task: TaskInterface): TaskInterface[] => {
    taskList.push(task);
    return taskList;
}

export const removeTask = (taskList: TaskInterface[], task: TaskInterface): TaskInterface[] => {
    taskList = taskList.filter(element => element.id !== task.id);
    return taskList;
}

export const completeTask = (taskList: TaskInterface[], task: TaskInterface): TaskInterface[] => {
    const id = taskList.findIndex(element => element.id === task.id);
    taskList[id].status = task.status;

    return taskList;
}
