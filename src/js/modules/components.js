import { ContextMenu, } from "./ContextMenu.js";
import { userData } from "./fetchUserData.js";
import { ContextMenuParent, dialogbox, MyFiles, UserFiles } from "./module.js"

class fileComponent {
    constructor(fileElement, name, path, filetype) {
        this.path = path;
        this.name = name;
        this.filetype = filetype;
        let componentObject = this;
        fileElement.addEventListener('dblclick', () => { componentObject.open() });
    }
    componentType = 'file';

    async download() {
        this.fetchFile().then(response => {
            response.blob().then(blob => {
                const data = window.URL.createObjectURL(blob);
                console.log(data);
                let ele = document.createElement('a');
                ele.href = data;
                ele.setAttribute("download", this.name);
                ele.click();
            })
        });
    }
    async fetchFile() {
        const fileObject = new FormData();
        fileObject.append("filepath", this.path);
        return fetch("../backend/database/getFile.php", {
            method: 'POST',
            body: fileObject
        })
    }
    async open() {
        this.fetchFile().then(response => {
            response.blob().then(blob => {
                let fileReader = new FileReader();
                fileReader.readAsDataURL(blob);
                fileReader.onload = () => {
                    dialogbox.putDialogBox(`<image style="width:600px;height:auto"src="${fileReader.result}">`)
                    dialogbox.showDialogBox();
                }
            })
        });
    }


}
class folderComponent {
    constructor(folderElement, folderObject) {
        this.folderObject = folderObject;
        this.folderElement = folderElement;
        let componentObject = this;
        folderElement.addEventListener('dblclick', () => { componentObject.open() })
    }
    componentType = 'folder';
    getFileName() {
        return this.path.split("/").pop();
    }

    open() {
        MyFiles.show(this.folderObject);
    }

    createNewFolder() {
        let requestBody = new FormData();
        requestBody.append("folderPath", this.folderObject.path)
            /
            requestBody.append("folderName", "newfolder");
        fetch('../backend/database/createSubFolder.php', {
            method: 'POST',
            body: requestBody
        }).then((response) => {
            response.json().then(data => {
                if (data.folderExits) {
                    alert('folder exits try another name');
                }
                else if (data.folderCreated) {
                    //as folder is created web update files from folder
                    userData.updateFolderSection();
                    this.refreshFolder();
                }
            })
        })
    }

    refreshFolder() {
        const folderPath = this.folderObject.path;
        function findFolderObject(folderObject) {
            console.log(folderObject.path, folderPath);
            if (folderObject.folders.length > 0) {
                return folderObject.folders.find((ele) => { return findFolderObject(ele); });
            }
            else {
                console.log((folderObject.path === folderPath))
                return (folderObject.path === folderPath);
            }
        }
        console.log(findFolderObject(userData.userObject));
    }
}
class folderNavItemComponent extends folderComponent {
    open() {
        while (this.folderElement.nextSibling) {
            this.folderElement.nextSibling.remove();
        }
        MyFiles.show(this.folderObject, true);
    }
}
class folderObject {

}
export { fileComponent, folderComponent, folderNavItemComponent };