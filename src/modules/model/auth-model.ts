export const setStorage = (user: string): void => {
    sessionStorage.setItem('activeUser', user);
}