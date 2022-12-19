import './index.html';
import { mock } from './modules/mock';
import { renderApp } from './modules/presenter/app-presenter';

const setStorage = (): void => {
    // localStorage.setItem('user', JSON.stringify(mock));
    sessionStorage.setItem('activeUser', 'user');
}


setStorage();

renderApp();
