import { inputBox, passwordInputBox, emailInputBox, FormBox, DialogBox } from './modules/module.js';

const dialogbox = new DialogBox(document.getElementsByClassName('dialog_box_wrap')[0]);

document.getElementById('signup_button').addEventListener('click', () => { dialogbox.showDialogBox() })

const signupEmailInput = new emailInputBox(document.getElementById('signup_email_input'));
const signupPasswordInput = new passwordInputBox(document.getElementById('signup_password_input'));
const signupForm = new FormBox(document.querySelector('.signup_form'), signupEmailInput, signupPasswordInput);

signupForm.afterSubmit = () => {
    const signupFormData = new FormData(signupForm.form);

    fetch('../../src/backend/database/saveUser.php', {
        method: 'POST',
        body: signupFormData
    }).then((response) => {
        response.text().then((text) => {
            console.log(text);
        })
    });
}