import { fileComponent, userData, MyFiles,dialogbox, UserFiles, navbar, ContextMenu, inputBox, passwordInputBox, emailInputBox, FormBox, DialogBox, OtpFormBox, Backend } from './modules/module.js';
document.querySelector(".size_toggle_btn").addEventListener('click', () => {userData.refreshUserData(); navbar.toggleSize(); });
document.querySelector("#upload_file_button").addEventListener('click', () => { UserFiles.getFileFromUser() });
userData.setUserObject();
userData.updateRecentItemsSection();
userData.updateFolderSection();
ContextMenu.start();
(function () {
        const dashboardItems = document.getElementsByClassName('dashboard_item');
        const navItems = document.getElementsByClassName('nav_item');
        
        Array.from(navItems).forEach((clickedNavItem) => {
            clickedNavItem.addEventListener('click', () => {
                const isClcikedItemActive = (clickedNavItem.getAttribute('data-state') === 'active');
               
                if (!isClcikedItemActive) {
                    const activeNavItem = Array.from(navItems).find((ele) => { return ele.getAttribute('data-state') === 'active';});
                    const activeDashboardItem = Array.from(dashboardItems).find((ele) => { return (ele.getAttribute('data-state') === 'active')});
                    const clickedELementName = clickedNavItem.getAttribute('data-item_name');
                    const clcikedElementDashboardItem = Array.from(dashboardItems).find(ele => (ele.getAttribute('data-item_name')===clickedELementName))

                    activeDashboardItem.setAttribute('data-state', 'non_active');
                    activeNavItem.setAttribute('data-state', 'non_active');
                    
                    clickedNavItem.setAttribute('data-state', 'active');
                    clcikedElementDashboardItem.setAttribute('data-state', 'active');
                    
                }
            })

        })
})();
