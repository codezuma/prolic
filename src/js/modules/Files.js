 class UserFiles{
    static getFileFromUser(path = "") {
        let inputElement = document.createElement('input');
        inputElement.setAttribute("type","file");
        inputElement.click();
        inputElement.addEventListener('change',()=>{
            let fileFormData = new FormData();
            fileFormData.append("file",inputElement.files[0]);
            fileFormData.append("path",path);
            fetch("../../src/backend/database/saveFile.php",{
                method:'POST',
                body:fileFormData
            }).then((response)=>{
                response.text().then((text)=>{console.log(text)})
            });
        })
      
    }
    
}
export {UserFiles}