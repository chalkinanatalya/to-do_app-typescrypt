import { setStorage } from "../model/auth-model";
import { createAuthorizationMarkup } from "../view/authorization-form-view";
import { renderApp } from "./app-presenter";
import { checkInput, stateHandler } from './task-presenter';

export const renderAuth = () => {
    const body = document.querySelector('body') as HTMLBodyElement;
    body?.insertAdjacentHTML('beforeend', createAuthorizationMarkup());
    const buttonEnter = document.querySelector('.btn-auth') as HTMLButtonElement;
    const input = document.querySelector('.input-auth') as HTMLInputElement;
    buttonEnter.disabled = true;

    stateHandler(buttonEnter, input);
    enterButtonHandler(buttonEnter, input);
}

const removeAuth = () => {
    const auth = document.querySelector('.auth') as HTMLDivElement;
    const body = document.querySelector('body') as HTMLBodyElement;
    body?.removeChild(auth);
}

const enterButtonHandler = (buttonEnter: HTMLButtonElement, input: HTMLInputElement) => {
    buttonEnter.addEventListener('click', (e) => {
        e.preventDefault();
        checkInput(buttonEnter, input);

        if (buttonEnter.disabled) {
            return;
        }

        setStorage(input.value);
        renderApp();
        removeAuth();
    })
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkInput(buttonEnter, input);

            if (buttonEnter.disabled) {
                return;
            }

            setStorage(input.value);
            renderApp();
            removeAuth();
        }
    })
}
