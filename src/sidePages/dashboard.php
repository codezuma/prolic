<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style/css/dashboard.css">
    <link rel="icon" href="../images/app_icon.svg" sizes="32x32">
    <title>My Drive-Prolic</title>
</head>

<body>
    <?php
    session_start();
    if (empty($_SESSION["email"])) {
        echo "<br><br><br><br><h2>Error 404 page not found</h2>";
        die();
    }
    $email = $_SESSION["email"];

    ?>
    <div class="dialog_box_wrap flex" data-close>
        <div class="flex" id="dialog_box">
            <div class="flex close_dialog_button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </div>
            <section class="flex">

            </section>
        </div>
    </div>
    <div id="app_wrap">
        <aside id="nav_bar" class="" data-state="maximized">
            <button class="size_toggle_btn flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg></button>
            <div>
                <div class="app_icon_con">
                    <img src="../images/app_logo.svg" alt="">
                </div>
                <nav class="flex">
                    <div class="nav_item flex" data-item_name="dashboard" data-state="non_active">
                        <span class="nav_icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg></span>
                        <span class="nav_text">Dashboard</span>
                    </div>
                    <div class="nav_item flex" data-item_name="my_files" data-state="active">
                        <span class="nav_icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder">
                                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z">
                                </path>
                            </svg></span>
                        <span class="nav_text">My Files</span>
                    </div>
                    <div class="nav_item flex" data-item_name="starred" data-state="non_active">
                        <span class="nav_icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2">
                                <circle cx="18" cy="5" r="3"></circle>
                                <circle cx="6" cy="12" r="3"></circle>
                                <circle cx="18" cy="19" r="3"></circle>
                                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                            </svg></span>
                        <span class="nav_text">Shared Files</span>
                    </div>
                    <div class="nav_item flex" data-item_name="shared" data-state="non_active">
                        <span class="nav_icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                </polygon>
                            </svg></span>
                        <span class="nav_text">Starred</span>
                    </div>
                    <div class="nav_item flex" data-item_name="trash" data-state="non_active">
                        <span class="nav_icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                </path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg></span>
                        <span class="nav_text">Trash</span>
                    </div>
                </nav>
            </div>
            <div>
                <div class="file_upload_con flex" id="upload_file_button">
                    <div class="add_icon flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </div>
                    <h2>Upload new file</h2>
                    <p>Drap and drop</p>
                </div>
            </div>

        </aside>
        <header class="flex">
            <form action="">
                <div class="input_section" data-inputElement="search_bar">
                    <div class="input_section_ele_wrapper flex">
                        <input id='search_bar' class="input_section_ele" type="search" name="search_query" placeholder="Search here">
                        <svg xmlns="http://www.w3.org/2000/svg" class="input_section_ele_icon input_icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                </div>
            </form>
            <div class="profile_header_section">
                <div class="profile_icon">
                </div>
            </div>
        </header>
        <main id="dashboard_section">
            <div class="dashboard_item" data-item_name="dashboard" data-state="non_active">
                <div class="quick_access_section">
                    <h3 class="sub_item_head">Quick Access</h3>
                    <div class="quick_items_con flex">
                        <div class="quick_item contextMenuParent" data-contextMenuType="folder">
                            <div class="quick_item_icon file_icon" data-file_type="folder"></div>
                            <div class="quick_item_file_name">Human Cetered design </div>
                        </div>
                        <div class="quick_item contextMenuParent">
                            <div class="quick_item_icon file_icon" data-file_type="pdf"></div>
                            <div class="quick_item_file_name">Human Cetered design </div>
                        </div>
                        <div class="quick_item contextMenuParent">
                            <div class="quick_item_icon file_icon" data-file_type="pdf"></div>
                            <div class="quick_item_file_name">Human Cetered design </div>
                        </div>
                        <div class="quick_item contextMenuParent">
                            <div class="quick_item_icon file_icon" data-file_type="pdf"></div>
                            <div class="quick_item_file_name">Human Cetered design </div>
                        </div>
                    </div>

                </div>
                <div class="folder_section">
                    <h3 class="sub_item_head">Folders</h3>
                    <div class="folders_con flex" id="folders_container">
                        <div class="folder_item flex">
                            <div class="folder_icon file_icon" data-file_type="folder"></div>
                            <div class="folder_name">Documents</div>
                        </div>
                    </div>
                </div>
                <div class="recent_section">
                    <h3 class="sub_item_head">Recents</h3>
                    <div class="recent_item head">
                        <div class="recent_item_file_name text_field">Name</div>
                        <div class="recent_item_Modified_date text_field">Modified Date</div>
                        <div class="recent_item_size text_field">Size</div>
                    </div>
                    <div class="recent_item_con">

                    </div>
                </div>
            </div>
            <div class="dashboard_item" data-item_name="my_files" data-state="active">
               <div class="file_nav_item_con flex" id="file_nav_item_con" >
                   <button class="file_nav_item subtitle_text" data-state="active">MyDrive</button>
                   <svg class="file_nav_item_seperater" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                   <button class="file_nav_item subtitle_text" data-state="non_active">MyDrive</button>
                </div>
               <hr>
               <br>
             <div class="folder_section">
                    <h3 class="subtitle_text">Folders</h3>
                    <br>
                    <div class="folders_con flex" id="MyFiles_folder_section">
                        <!-- <div class="folder_item flex">
                            <div class="folder_icon file_icon" data-file_type="folder"></div>
                            <div class="folder_name">Documents</div>
                        </div> -->
                    </div>
                </div>
                <div class="file_section">
                    <h3 class="subtitle_text">Files</h3>
                    <br>
                    <div class="files_con flex" id="MyFiles_files_section">
                     <!--    <div class="file contextMenuParent" data-contextMenuType="folder">
                            <div class="file_item_icon file_icon" data-file_type="folder"></div>
                            <div class="file_item_name">Human Cetered design </div>
                        </div> -->
                    </div>

                </div>
            </div>
            <div class="dashboard_item" data-item_name="shared" data-state="non_active">starred</div>
            <div class="dashboard_item" data-item_name="starred" data-state="non_active">shared</div>
            <div class="dashboard_item" data-item_name="trash" data-state="non_active">trash</div>
        </main>
        <aside id="user_section">
            <div class="user_section_wrap">
                <div class="data_section">
                    <h2><span class="data_used">2.98 GB</span>&nbsp;&nbsp; used of &nbsp;&nbsp;<span class="total_data">5.8 GB</span></h2>
                    <div class="data_bar_con flex">
                        <div class="data_bar_item" data-file_name=""></div>
                        <div class="data_bar_item" data-file_name=""></div>
                        <div class="data_bar_item" data-file_name=""></div>
                        <div class="data_bar_item" data-file_name=""></div>
                    </div>

                </div>
                <div class="files_section">
                    <div class="file_item" data-file_name="image">
                        <div class="file_data flex">
                            <img src="../images/image_icon.svg" class="file_icon" alt="">
                            <div>
                                <div class="file_name">Images</div>
                                <div class="num_of_files">54 files</div>
                            </div>
                            <div class="file_size">2.5 GB</div>
                        </div>
                    </div>
                    <div class="file_item" data-file_name="image">
                        <div class="file_data flex">
                            <img src="../images/video_icon.svg" class="file_icon" alt="">
                            <div>
                                <div class="file_name">Video</div>
                                <div class="num_of_files">7 files</div>
                            </div>
                            <div class="file_size">3.5 GB</div>
                        </div>
                    </div>
                    <div class="file_item" data-file_name="image">
                        <div class="file_data flex">
                            <img src="../images/pdf_file_icon.svg" class="file_icon" alt="">
                            <div>
                                <div class="file_name">Pdf</div>
                                <div class="num_of_files">18 files</div>
                            </div>
                            <div class="file_size">0.5 GB</div>
                        </div>
                    </div>
                    <div class="file_item" data-file_name="image">
                        <div class="file_data flex">
                            <img src="../images/text_file.svg" class="file_icon" alt="">
                            <div>
                                <div class="file_name">Other files</div>
                                <div class="num_of_files">23 files</div>
                            </div>
                            <div class="file_size">0.3 GB</div>
                        </div>
                    </div>
                </div>
            </div>

        </aside>
    </div>
    <script src="../js/modules/gsap.min.js"></script>
    <script type="module" src="../js/dashboard.js"></script>
</body>