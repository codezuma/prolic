import {Icons} from "./module.js";
class swap{
static fire(newData={}){
    new swap(newData);
}
static start(){
    const container = document.createElement('div');
    container.classList.add('swap_alert_container');
    document.getElementsByTagName('body')[0].appendChild(container);
}
constructor(newData={}){
    //changing default values with sent parameters 
    const defaultPara = {body:"default",type:""}
    const fusedData = {...defaultPara,...newData};

    //creating alert and setting data
    this.alert = document.createElement('div');
    this.alert.classList.add('swap_alert');
    this.alert.innerHTML =`
    <span class="swap_alert_icon">${Icons.info}</span>
    <span class="swap_alert_body">${fusedData.body}</span>`;
    document.getElementsByClassName('swap_alert_container')[0].appendChild(this.alert);
    
    //adding close button 
    this.closeButton = document.createElement('button');
    this.closeButton.innerHTML = Icons.close;
    this.closeButton.classList.add('swap_alert_close_button');
    this.closeButton.addEventListener('click',()=>{this.close()}) 
    this.alert.appendChild(this.closeButton);

}
close(){
    this.alert.remove();
}
}
export {swap};