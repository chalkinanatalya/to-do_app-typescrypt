import { TaskInterface } from "../create-task";
import { createTaskMarkUp } from "../view/task-view";

export const createTasksMarkUp = (tasks: TaskInterface[]): string => {
    let taskTemplate: string = '';
    tasks.forEach((task) => {
        taskTemplate += createTaskMarkUp(task);
    })

    return taskTemplate;
}
