import { inputBox, passwordInputBox, emailInputBox, FormBox, DialogBox,OtpFormBox ,Backend} from './modules/module.js';
const dialogbox = new DialogBox(document.getElementsByClassName('dialog_box_wrap')[0]);

document.getElementById('signup_button').addEventListener('click', () => { 
const signupFormHtmlData = `<h1  class="heading4 head flex">Sign up for a free<br> Prolic account.</h1>
<form class="flex signup_form" action=""><div class="input_section"><h4 class="input_section_head">Email address</h4>
    <div class="input_section_ele_wrapper flex"><input class="input_section_ele" id="signup_email_input" name="email" placeholder="johncarber@example.com">
        <svg xmlns="http://www.w3.org/2000/svg" class="input_section_ele_icon input_icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
    </svg></div><div class="input_message_box flex">
        <svg xmlns="http://www.w3.org/2000/svg" class="error_box_icon" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-triangle"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
        <span class="error_message_text"></span>
    </div>
</div>
<div class="input_section">
    <h4 class="input_section_head">Password</h4>
    <div class="input_section_ele_wrapper flex">
        <input type="password" id="signup_password_input" name="password" class="input_section_ele" placeholder="Must have minimum 6 characters">
        <svg xmlns="http://www.w3.org/2000/svg" class="input_section_ele_icon input_icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="eye_icon input_icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
    </div>
    <div class="input_message_box flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="error_box_icon" class="feather feather-alert-triangle"><pathd="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line> </svg>
        <span class="error_message_text"></span>
    </div>
</div>
<button type="submit" class="subtitle_text flex" value="Register">Register</button>
</form>
<div class="already_memeber_button flex subtitle_text">
<span>  Already a Member?<span> Signin</span></span>
</div>`;
const optFormHtmlData = `  <h1 class="title_text">Verify email address</h1>
<span style="text-align: center;margin-top: 1rem;" class=" body_text secondary_text font_weight_600">Code is sent to <span class="otp_email"></span>            </span><br>
<form class="flex flex_direction_column opt_form "  id='signUpOtpForm'>
<div class="opt_in_wrap flex "> 
 <input maxlength="1" class="otp_input" type="text   ">
 <input maxlength="1" class="otp_input" type="text">
 <input maxlength="1" class="otp_input" type="text">
 <input maxlength="1" class="otp_input" type="text">
</div>
<div id="send_otp_again" class="body_text secondary_text font_weight_500">Didn't recieve code?<span class=""> Request again</span></div>
<button type="submit" class="body_text">Submit</button>
</form>`;
dialogbox.putDialogBox(signupFormHtmlData);

const signupEmailInput = new emailInputBox(document.getElementById('signup_email_input'));

const signupPasswordInput = new passwordInputBox(document.getElementById('signup_password_input'));
const signupForm = new FormBox(document.querySelector('.signup_form'), signupEmailInput, signupPasswordInput);
signupForm.afterSubmit = () => {
    signupForm.SubmittingForm();
    const signupFormData = new FormData(signupForm.form);
    signupFormData.append('type','signup');
    localStorage.setItem('email',document.getElementById('signup_email_input').value);
    localStorage.setItem('password',document.getElementById('signup_password_input').value);
    function sendOtp (){
        fetch('./src/backend/otp/request_otp.php', {
            method: 'POST',
            body: signupFormData
        }).then((response) => {
            response.text().then((text) => {
                console.log(text);
                switch (text) {
                    case 'user_available':
                        signupEmailInput.showError('email already used try signing in');
                        signupForm.SubmittedForm();
                        break;
                    case 'mail_not_send':
                        signupEmailInput.showError('something went wrong ');
                          signupForm.SubmittedForm();
                        break;
                    case 'mail_send':
                            dialogbox.SwitchDialogBoxTo(optFormHtmlData).then(()=>{
                            const signupOtpForm = new OtpFormBox(document.getElementById('signUpOtpForm'));
                            signupOtpForm.afterSubmit = function(value){
                              signupFormData.append('otp',value);
                              signupOtpForm.submitButton.innerHTML = 'Please wait...';
                              fetch('./src/backend/otp/verify_otp.php',{
                                method: 'POST',
                                body: signupFormData
                              }).then(response=>{
                                  response.text().then((text)=>{
                                      console.log(text);
                                      if(text =='wrong_otp'){
                                        signupOtpForm.submitButton.innerHTML = 'Incorrect verification code';
                                      }
                                      else{
                                        signupOtpForm.submitButton.innerHTML = 'signup succesfull';   
                                        location.assign("./src/sidePages/dashboard.html")
                                      }
                                  })
                              })
                            }
                        });
                            break;
                    default:
                        break;
                }
            })
        });  
    }
    
    sendOtp();
}
dialogbox.showDialogBox();
});
