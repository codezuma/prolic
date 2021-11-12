import { UserFiles,navbar,inputBox, passwordInputBox, emailInputBox, FormBox, DialogBox,OtpFormBox ,Backend} from './modules/module.js';
document.querySelector(".size_toggle_btn").addEventListener('click',()=>{navbar.toggleSize();});
document.querySelector("#upload_file_button").addEventListener('click',()=>{UserFiles.getFileFromUser()});
