import {userData} from "./fetchUserData.js"
import { MyFiles } from "./MyFiles.js";
class UserFiles {
    static async getFileFromUser(path = userData.userObject.path,folderObject) {
        let inputElement = document.createElement("input");
        inputElement.setAttribute("type", "file");
        inputElement.click();
        inputElement.addEventListener("change", () => {
            const file = inputElement.files[0];
            const fileFormData = new FormData();
            fileFormData.append("file", file);
            fileFormData.append("path", path);
            fileFormData.append("type", file.type);
            fetch("../../src/backend/database/saveFile.php", {
                method: "POST",
                body: fileFormData,
            }).then((response) => {
                response.text().then((text) => {
                    userData.refreshUserData(()=>{
                         userData.refreshUserData(()=>{this.open()});        
                        this.refreshFolder();
                        console.log(this);
                        this.open();
                    })
                });
            });
        });
    }
    static  getFileNameFromPath(path){
        const pathSplitArray = path.split("/");
        return  pathSplitArray.pop();
    }
    static getFileType(file) {
        let fileType = (typeof file == 'string') ? file : file.type;
        if (fileType.match('image'))
            return 'image';

        if (fileType.match('video.*'))
            return 'video';

        if (fileType.match('audio.*'))
            return 'audio';

        if (fileType.match("pdf.*"))
            return 'pdf';
        // etc...

        return 'other'
    }
    static getFileTypeFromExtension(extension) {
        const extensionObjects = [
            {
                fileType: 'image',
                extensions: ['apng', 'avif', 'gif', 'jpg', 'jpeg', 'jfif', 'pjpeg', 'pjp', 'png', 'svg', 'webp']
            },
            {
                fileType: 'pdf',
                extensions:['pdf']
          
            },
             {
                fileType: 'video',
                extensions:['webm', 'mkv', 'flv', 'vob', 'ogv', 'ogg', 'rrc', 'gifv', 'mng', 'mov', 'avi', 'qt', 'wmv', 'yuv', 'rm', 'asf', 'amv', 'mp4', 'm4p', 'm4v', 'mpg', 'mp2', 'mpeg', 'mpe', 'mpv', 'm4v', 'svi', '3gp', '3g2', 'mxf', 'roq', 'nsv', 'flv', 'f4v', 'f4p', 'f4a', 'f4b']
             }

            ];
        const ExtensionObject = (extensionObjects.find((ele)=>!(ele.extensions.indexOf(extension) ===-1)));
       return ExtensionObject ? ExtensionObject.fileType :'other';

    }
    static convertStringToHTMLELement(String){
        var div = document.createElement('div');
        div.innerHTML = String.trim();
      
        // Change this to div.childNodes to support multiple top-level nodes
        return div.firstChild; 
      
    }

}
export { UserFiles };