import { TaskInterface } from "../create-task";

export const createTaskMarkUp = ({ taskText, status }: TaskInterface, index: number): string => (
  `<tr class="table-light">
    <td>${index}</td>
    <td class="task">
      ${taskText}
    </td>
    <td>В ${status}</td>
    <td>
      <button class="btn btn-danger">
        Удалить
      </button>
      <button class="btn btn-success">
        Завершить
      </button>
    </td>
  </tr>`
);
