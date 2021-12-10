import { UserFiles,fileComponent,folderComponent, } from './module.js'
class userData {
    static userObject = JSON.parse(sessionStorage.getItem("userObject"));
    
  /*   static updateFolderSection() {
        const userObject = this.userObject;
        const dashboardFolderSection = document.getElementById('folders_container');

        //puts folder Elements in container provided
            function putFolderItems(container) {
                userObject.folders.forEach((folderObject) => {
                    const folderItem = document.createElement('div');
                    folderItem.classList.add('folder_item', 'flex');
                    folderItem.componentObject = folderObject;

                    const folderIcon = document.createElement('div');
                    folderIcon.classList.add('folder_icon', 'file_icon');
                    folderIcon.setAttribute("data-file_type", "folder");

                    const folderName = document.createElement('div');
                    folderName.classList.add('folder_name');
                    folderName.innerHTML = folderObject.name;

                    folderItem.appendChild(folderIcon);
                    folderItem.appendChild(folderName);

                    container.appendChild(folderItem);
                });
            }
        putFolderItems(dashboardFolderSection);
        putFolderItems(myfilesFolderSection);
    } */
    static updateRecentItemsSection() {
        let recentItems = sessionStorage.getItem("recentItems");
        recentItems = JSON.parse(recentItems);
        const recentItemCon = document.querySelector(".recent_item_con");

        recentItems.forEach((ele) => {
            const recentItem = document.createElement('div');
            recentItem.classList.add('recent_item', 'contextMenuParent');
            recentItem.componentObject = ele;
            recentItem.setAttribute("data-contextMenuType", "file");
            recentItem.setAttribute("data-fileType", ele.type);
            recentItem.setAttribute("data-filePath", ele.path);
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