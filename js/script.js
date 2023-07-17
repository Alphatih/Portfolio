const menu = document.getElementById("menu");
const actions = document.getElementById("actions");

menu.addEventListener("click", () => {
    HandleMenu();
});
function HandleMenu() {
    menu.classList.toggle("is-active");
    actions.classList.toggle("is-active");
}