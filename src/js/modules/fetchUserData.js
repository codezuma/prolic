import { UserFiles, fileComponent, folderComponent, MyFiles, ContextMenuParent } from './module.js'
class userData {

    static userObject;
    static setUserObject(userObject = JSON.parse(sessionStorage.getItem("userObject"))) {
        this.userObject = userObject;
    }
    static refreshUserData() {
        fetch('../backend/database/refreshData.php').then((response) => {
            response.json().then((data) => {
                data.userObject.name = "MyDrive";
                userData.userObject = { ...data.userObject };
                this.updateRecentItemsSection(data.recentItems);
            })
        })
    }
    static updateFolderSection() {
        MyFiles.show(this.userObject);
    }
    static updateRecentItemsSection(recentItems = JSON.parse(sessionStorage.getItem("recentItems"))) {
        // if rececent Items are it will show one from sesion storage;
        const recentItemCon = document.querySelector(".recent_item_con");
        recentItems.forEach((ele) => {
            const recentItem = document.createElement('div');
            recentItem.classList.add('recent_item');
            recentItem.componentObject = ()=>{ return new fileComponent(recentItem, ele.name, ele.path, UserFiles.getFileType(ele.type))};
            new ContextMenuParent(recentItem);
            recentItem.innerHTML = ` <div class="flex recent_item_name_wrap">
                                          <div class="recent_item_file_icon file_icon" data-file_type="${UserFiles.getFileType(ele.type)}"></div>
                                          <div class="recent_item_file_name text_field"> ${ele.name}</div>
                                     </div>
                                     <div class="recent_item_Modified_date text_field">${ele.modifiedDate}</div>
                                     <div class="recent_item_size text_field">${getSize(ele.size)}</div>
                                     </div>`;

            recentItemCon.appendChild(recentItem);
        })
        function getSize(bytes) {
            const inMegabytes = (bytes / 1048576).toFixed(2);
            return (-inMegabytes > 0) ? inMegabytes + " MB" : (bytes / 128).toFixed(2) + " KB";
        }

    }
}
export { userData }