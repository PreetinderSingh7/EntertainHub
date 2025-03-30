import { loadPage } from "../utils/loadPage.js";
import { getUser, setCurrentUser } from "./localStorage.js";

const loginForm = document.getElementById("login-form");
const username = document.querySelector('#login-form [name="user_name"]');
const password = document.querySelector('#login-form [name="user_password"]');
const checkbox = document.querySelector('#login-form [name="remember"]');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!username.value || !password.value) {
        alert('please fill all the fields');
        return;
    }

    const user = getUser(username.value, undefined);
    if (!user) {
        alert('user not found please signup');
        return;
    }
    if (user.password !== password.value) {
        alert('password incorrect');
        return;
    }
    if (checkbox.checked) {
        setCurrentUser(user);
    }

    alert('logged in successfully');
    setTimeout(() => {
        loadPage('/main.html');
    });
    return;
})

