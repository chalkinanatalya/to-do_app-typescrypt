
export const createAuthorizationMarkup = () => (
  `<div class="vh-100 w-100 d-flex align-items-center justify-content-center auth"
    <form class="d-flex align-items-center mb-3">
        <label class="form-group me-3 mb-0">
            <input type="text" class="input-auth" placeholder="введите Ваше имя">
        </label>
      <button type="submit" class="btn btn-primary me-3 btn-auth">
        Войти
      </button>
    </form>
    </div>`
)