import { nanoid } from "../../node_modules/nanoid/index"

export interface TaskInterface {
    id?: string;
    taskText?: string;
    status?: string
}

export const createTask = (): TaskInterface => {
    return {
        id: nanoid(),
        taskText: '',
        status: 'running',
    }
}