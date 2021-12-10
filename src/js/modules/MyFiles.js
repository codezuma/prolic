import { UserFiles,userData,fileComponent,ContextMenuParent,folderComponent} from "./module.js"

class MyFiles {
    static removeChildren (parent){
        while (parent.firstChild) {
            parent.firstChild.remove()
        }
    }
    static show(folderObject) {
        const folderSection = document.getElementById('MyFiles_folder_section');
        const fileSection = document.getElementById('MyFiles_files_section');
        
        this.removeChildren(folderSection);
        this.removeChildren(fileSection);

        folderObject.folders.forEach(element => { this.putFolderItems(element, folderSection); });
        folderObject.files.forEach((element) => {
            const fileElement = document.createElement('div');
            fileElement.classList.add('file');

            let fileType = UserFiles.getFileTypeFromExtension((element.name.split('.')).pop())

            fileElement.componentObject = new fileComponent(fileElement,element.name,element.path.substring(7),fileType);
            new ContextMenuParent(fileElement);
            const fileElementContent = `<div class="file_item_icon file_icon" data-file_type="${fileType}"></div>
                                        <div class="file_item_name">${element.name} </div>`;
         
            fileElement.innerHTML = fileElementContent;
            fileSection.appendChild(fileElement); 
        })
    }
    static putFolderItems(folderObject, container) {
        const folderElement = document.createElement('div');
        folderElement.classList.add('folder_item', 'flex');

        folderElement.componentObject = new folderComponent(folderElement, folderObject);
        new ContextMenuParent(folderElement);


        const folderIcon = document.createElement('div');
        folderIcon.classList.add('folder_icon', 'file_icon');
        folderIcon.setAttribute("data-file_type", "folder");

        const folderName = document.createElement('div');
        folderName.classList.add('folder_name');
        folderName.innerHTML = folderObject.name;

        folderElement.appendChild(folderIcon);
        folderElement.appendChild(folderName);

        container.appendChild(folderElement);
    }


}

export { MyFiles };
