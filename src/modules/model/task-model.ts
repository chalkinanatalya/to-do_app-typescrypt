import { TaskInterface } from "../create-task";

export const getTaskList = (username: string): TaskInterface[] => {
    let taskList: TaskInterface[];
    const storage = localStorage.getItem(username);
    storage !== null ? taskList = JSON.parse(storage) : taskList = [];

    return taskList;
}