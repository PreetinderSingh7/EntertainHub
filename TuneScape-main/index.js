import { loadPage } from "./utils/loadPage.js";
import { getCurrentUser } from "./js/localStorage.js";

const playBtn = document.getElementById("play-btn");

playBtn.addEventListener('click', () => {
    const currentUser = getCurrentUser();
    console.log(currentUser);
    if(!Boolean(currentUser)) {
        loadPage('/html/login.html');
        return;
    }
    alert(`Hello ${currentUser.username}`);
    setTimeout(() => {
        loadPage('/main.html');
    })
})


