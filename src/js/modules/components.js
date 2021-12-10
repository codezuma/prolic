import { userData } from "./fetchUserData.js";
import {dialogbox,MyFiles,UserFiles} from "./module.js"

class fileComponent{
    constructor(fileElement){
        this.path = fileElement.getAttribute('data-filepath');
        this.name = UserFiles.getFileNameFromPath(this.path);
        this.filetype = fileElement.getAttribute('data-fileType');
        const fileObject = this;
        fileElement.addEventListener('dblclick',()=>{fileObject.open()});
    }
    componentType = 'folder';

    async download(){
       this.fetchFile().then(response=>{response.blob().then(blob=>{
            const data = window.URL.createObjectURL(blob);
            console.log(data);
            let ele = document.createElement('a');
            ele.href = data;    
            ele.setAttribute("download",this.name);
            ele.click();
        })
        });
    }
    async fetchFile(){
        const fileObject = new FormData();
        fileObject.append("filepath",this.path); 
        return fetch("../backend/database/getFile.php",{
              method: 'POST', 
              body: fileObject // body data type must match "Content-Type" header
              })
      }
    async open(){
        this.fetchFile().then(response=>{response.blob().then(blob=>{
            let fileReader = new FileReader();
            fileReader.readAsDataURL(blob);
            fileReader.onload = ()=>{
                dialogbox.putDialogBox(`<image style="width:600px;height:auto"src="${fileReader.result}">`)
                dialogbox.showDialogBox();     
            }
             
        })
        });
    }

    
}
class folderComponent{
    constructor(folderObject){
       this.folderObject = folderObject;
    }
    componentType = 'file';
    getFileName(){
        const pathSplitArray = this.path.split("/");
        return  pathSplitArray.pop();
    }
    
    async open(){
    
    }

    
}
export{fileComponent,folderComponent};