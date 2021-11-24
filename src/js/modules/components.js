class fileComponent{
    constructor(fileElement){
        console.log(fileElement);
        this.path = fileElement.getAttribute('data-filepath');
    }
    open(){
      const fileObject = new FormData();
      fileObject.append("filepath",this.path);  
      fetch("../backend/database/getFile.php",{
           method: 'POST', 
           body: fileObject // body data type must match "Content-Type" header
            }).then(response=>{response.blob().then(blob=>{
                const data = window.URL.createObjectURL(blob);
                                let ele = document.createElement('a');
                ele.href = data;
                ele.setAttribute("download","")
                ele.click();
            })  });
    }
}
export{fileComponent};