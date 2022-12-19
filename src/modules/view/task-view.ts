import { TaskInterface } from "../create-task";

export const createTaskMarkUp = ({ id, taskText, status }: TaskInterface): string => (
  `<tr class="table-light">
    <td></td>
    <td class="task">
      ${taskText}
    </td>
    <td>${status}</td>
    <td id=${id}>
      <button class="btn btn-danger">
        Удалить
      </button>
      <button class="btn btn-success">
        Завершить
      </button>
    </td>
  </tr>`
);
