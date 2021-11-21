class UserFiles {
    static getFileFromUser(path = "") {
        let inputElement = document.createElement("input");
        inputElement.setAttribute("type", "file");
        inputElement.click();
        inputElement.addEventListener("change", () => {
            const fileType = this.getFileType(inputElement.files[0]);
            const fileFormData = new FormData();
            fileFormData.append("file", inputElement.files[0]);
            fileFormData.append("path", path);
            fileFormData.append("type", fileType);
            fetch("../../src/backend/database/saveFile.php", {
                method: "POST",
                body: fileFormData,
            }).then((response) => {
                response.text().then((text) => {
                console.log(text);
                });
            });
        });
    }

    static getFileType(file) {

        if (file.type.match('image.*'))
            return 'image';

        if (file.type.match('video.*'))
            return 'video';

        if (file.type.match('audio.*'))
            return 'audio';
            
        if (file.type.match("pdf.*"))
            return 'pdf';
        // etc...

        return 'other'
    }
}
export { UserFiles };