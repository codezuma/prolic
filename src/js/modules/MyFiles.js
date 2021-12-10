import { userData } from "./fetchUserData.js"

class MyFiles {
    static show(folderObject =  userData.userObject){
    const folderSection =  document.getElementById('MyFiles_folder_section');
    folderObject.folders.forEach(element => {
       this.putFolderItems(element,folderSection);
    });
    }
    static putFolderItems(folderObject,container) { 
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
    }


}

export {MyFiles};
