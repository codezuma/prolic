import {dialogbox} from "./module.js"

class fileComponent{
    constructor(fileElement){
        this.path = fileElement.getAttribute('data-filepath');
        this.name = this.getFileName();
        this.filetype = fileElement.getAttribute('data-fileType');
    }

    getFileName(){
        const pathSplitArray = this.path.split("/");
        return  pathSplitArray.pop();
    }
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
    async fetchFile(){
        const fileObject = new FormData();
        fileObject.append("filepath",this.path); 
        return fetch("../backend/database/getFile.php",{
              method: 'POST', 
              body: fileObject // body data type must match "Content-Type" header
              })
      }
    
}
export{fileComponent};