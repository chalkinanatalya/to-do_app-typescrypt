export const createAppMarkUp = (): string => (
    `<div class="app-container vh-100 w-100 d-flex align-items-center justify-content-center flex-column">

    <h3>Todo App</h3>
    <form class="d-flex align-items-center mb-3">
      <label class="form-group me-3 mb-0">
        <input type="text" class="form-control" placeholder="ввести задачу">
      </label>

      <button type="submit" class="btn btn-primary me-3">
        Сохранить
      </button>

      <button type="reset" class="btn btn-warning">
        Очистить
      </button>
    </form>

    <div class="table-wrapper">
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>№</th>
            <th>Задача</th>
            <th>Статус</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  </div>`
);