<?php
session_start();
?><!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="src/images/app_icon.svg" type="image/svg" sizes="32x32">
    <meta name="theme-color" content="#0A1966">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="src/style/css/home.css">
    <title>Prolic</title>
</head>

<body class="flex">
    <div class="dialog_box_wrap flex" data-close>
        <div class="flex" id="dialog_box">
            <div class="flex close_dialog_button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-x">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </div>
            <section class="flex">
                <h1 class="heading4 head flex">Sign in to continue.</h1>
                <form class="flex signin_form" action="">
                    <div class="input_section">
                        <h4 class="input_section_head">Email address</h4>
                        <div class="input_section_ele_wrapper flex"><input class="input_section_ele"
                                id="signin_email_input" name="email" placeholder="johncarber@example.com">
                            <svg xmlns="http://www.w3.org/2000/svg" class="input_section_ele_icon input_icon" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                                </path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </div>
                        <div class="input_message_box flex">
                            <svg xmlns="http://www.w3.org/2000/svg" class="error_box_icon" width="18" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-alert-triangle">
                                <path
                                    d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z">
                                </path>
                                <line x1="12" y1="9" x2="12" y2="13"></line>
                                <line x1="12" y1="17" x2="12.01" y2="17"></line>
                            </svg>
                            <span class="error_message_text"></span>
                        </div>
                    </div>
                    <div class="input_section">
                        <h4 class="input_section_head">Password</h4>
                        <div class="input_section_ele_wrapper flex">
                            <input type="password" id="signin_password_input" name="password" class="input_section_ele"
                                placeholder="Must have minimum 6 characters">
                            <svg xmlns="http://www.w3.org/2000/svg" class="input_section_ele_icon input_icon" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" class="eye_icon input_icon" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                        </div>
                        <div class="input_message_box flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="error_box_icon" class="feather feather-alert-triangle">
                                <pathd="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0
                                    0-3.42 0z">
                                    </path>
                                    <line x1="12" y1="9" x2="12" y2="13"></line>
                                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                            </svg>
                            <span class="error_message_text"></span>
                        </div>
                    </div>
                    <button type="submit" class="subtitle_text flex" value="Register">Log In</button>
                </form>
                <div class="already_memeber_button flex subtitle_text">
                    <span> New to prolic ?<span> Signup</span></span>
                </div>
            </section>
        </div>
    </div>
    <aside>

    </aside>
    <div class="container nav_bar flex">
        <span class="logo flex  ">
            <img class="logo_img" src="src/images/app_icon.svg" alt="">
            <div class="logo_text heading4"><span>pro</span><span>lic</span></div>
        </span>
        <nav class="flex">
            <li class="nav_items body_text">About</li>
            <li class="nav_items body_text">Features</li>
            <li class="nav_items body_text">Pricing</li>
            <li class="nav_items body_text" id='signin_button'>SignIn</li>
            <li class="nav_items body_text flex" id='signup_button'>Get Started</li>
        </nav>
    </div>
    <div class="container hero_section ">
        <div class="floating_items video_icon flex"><img src="src/images/video.svg" alt=""></div>
        <div class="floating_items flex pdf_icon title_text">PDF</div>
        <div class="floating_items flex heading3 zip_icon">ZIP</div>
        <div class="floating_items flex text_icon"><img src="src/images/text_file.svg" alt=""></div>
        <div class="heading1 hero_section_head">
            <span>Manage</span>
            <span>all your files</span>
            <br>
            <span>in</span>
            <span>one place</span>
        </div>
        <div class="title_text hero_section_subhead">
            A comfortable way to have access to <br> all your files
        </div>
        <div class="cta_wrap flex">
            <form class="flex" action="">
                <input type="email" class="body_text" required placeholder="Enter your email">
                <input type="submit" class="body_text" value="Get Started">
            </form>
        </div>
    </div>

    <script src="src/js/modules/gsap.min.js"></script>
    <script type="module" src="src/js/main.js"></script>
</body>

</html>