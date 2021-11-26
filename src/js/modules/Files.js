class UserFiles {
    static getFileFromUser(path = "") {
        let inputElement = document.createElement("input");
        inputElement.setAttribute("type", "file");
        inputElement.click();
        inputElement.addEventListener("change", () => {
            const file = inputElement.files[0];
            const fileFormData = new FormData();
            fileFormData.append("file",file);
            fileFormData.append("path", path);
            fileFormData.append("type", file.type);
            fetch("../../src/backend/database/saveFile.php", {
                method: "POST",
                body: fileFormData,
            }).then((response) => {
                response.text().then((text) => {
                });
            });
        });
    }

    static getFileType(file) {
        let fileType = (typeof file == 'string')?file:file.type;
        console.log(("image/png").match('image'));
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
    
}
export { UserFiles };