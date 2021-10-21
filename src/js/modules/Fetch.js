class  Backend{
    static send(url,reqData){
        fetch(url,reqData).then((response)=>{
            response.text().then(text=>{
                return text;
            })
        })
    }
}
export {Backend};