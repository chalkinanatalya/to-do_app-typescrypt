import './index.html';
import { renderApp } from './modules/presenter/app-presenter';
import { renderAuth } from './modules/presenter/auth-presenter';


sessionStorage.clear();

if (sessionStorage.getItem('activeUser')) {
    renderApp();
} else {
    renderAuth();
}