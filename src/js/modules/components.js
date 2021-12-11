import { ContextMenu, } from "./ContextMenu.js";
import { userData } from "./fetchUserData.js";
import {ContextMenuParent, dialogbox,MyFiles,UserFiles} from "./module.js"

class fileComponent{
    constructor(fileElement,name,path,filetype){
        this.path = path;
        this.name = name;
        this.filetype = filetype;
        let componentObject = this;
        fileElement.addEventListener('dblclick',()=>{componentObject.open()});
    }
    componentType = 'file';

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
              body: fileObject
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
    constructor(folderElement,folderObject){
       this.folderObject = folderObject;
       let componentObject =this;
       folderElement.addEventListener('dblclick',()=>{componentObject.open()})
    }
    componentType = 'folder';
    getFileName(){
        const pathSplitArray = this.path.split("/");
        return  pathSplitArray.pop();
    }
    
    open(){
     MyFiles.show(this.folderObject);
    }
    createNewFolder(){
     
    }

    
}
export{fileComponent,folderComponent};