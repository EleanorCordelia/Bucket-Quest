export const isLoggedin = () => {
    return !!localStorage.getItem('token');
};
export const logOut = () => {
    localStorage.removeItem('token');
    window.location.reload();
}