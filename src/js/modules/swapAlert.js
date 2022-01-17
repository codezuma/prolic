import {Icons, } from "./module.js";
class swap{
static fire(newData={}){
   const alert =  new swap(newData);
   //time for which alert is shown
   const shownTime = 3;
    gsap.timeline()
    .call(()=>{alert.show();})
    .addPause(shownTime,()=>{alert.close()});
}
static start(){
    const container = document.createElement('div');
    container.classList.add('swap_alert_container');
    document.getElementsByTagName('body')[0].appendChild(container);
}
constructor(newData={}){
    //changing default values with sent parameters 
    const alertContainer = document.getElementsByClassName('swap_alert_container')[0];
    const defaultPara = {body:"default",type:"info"}
    const fusedData = {...defaultPara,...newData};

    //creating alert and setting data
    this.alert = document.createElement('div');
    this.alert.classList.add('swap_alert');
    this.alert.setAttribute("data-alertType",fusedData.type);
    this.alert.innerHTML =`
    <span class="swap_alert_icon">${Icons.info}</span>
    <span class="swap_alert_body">${fusedData.body}</span>`;
     alertContainer.insertBefore(this.alert,alertContainer.querySelector('.swap_alert'))
    
    //adding close button 
    this.closeButton = document.createElement('button');
    this.closeButton.innerHTML = Icons.close;
    this.closeButton.classList.add('swap_alert_close_button');
    this.closeButton.addEventListener('click',()=>{this.close()}) 
    this.alert.appendChild(this.closeButton);
    this.alert.style.display = "none";

}
show(){
    gsap.fromTo(this.alert,0.3,{x:100,opacity:0.3},{x:0,display:"flex",opacity:1})
}
close(){
    gsap.timeline()
    .to(this.alert,0.3,{x:this.alert.offsetWidth,opacity:0})
    .call(()=>{this.alert.remove();});
}
}
export {swap};