import { nanoid } from "../../node_modules/nanoid/index";
import { TaskInterface } from './create-task';

export const mock: Array<TaskInterface> = [
    {
        id: nanoid(),
        taskText: 'test',
        status: 'running',
    },
    {
        id: nanoid(),
        taskText: 'test1',
        status: 'prosess',
    },
    {
        id: nanoid(),
        taskText: 'test3',
        status: 'running',
    }
]