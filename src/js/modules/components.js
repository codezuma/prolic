class fileComponent{
    constructor(fileElement){
        this.path = fileElement.getAttribute('data-filepath');
        this.name = this.getFileName();
    }
    getFileName(){
        const pathSplitArray = this.path.split("/");
        return  pathSplitArray.pop();
    }
    async get(){
      const fileObject = new FormData();
      fileObject.append("filepath",this.path); 
       fetch("../backend/database/getFile.php",{
            method: 'POST', 
            body: fileObject // body data type must match "Content-Type" header
            }).then(response=>{response.blob().then(blob=>{
                const data = window.URL.createObjectURL(blob);
                console.log(data);
                let ele = document.createElement('a');
                ele.href = data;    
                ele.setAttribute("download",this.name)
                ele.click();
            })
      });
    }
}
export{fileComponent};