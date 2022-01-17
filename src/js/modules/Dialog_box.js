class DialogBox{
    constructor(wrap){
        this.dialogBoxWrap = wrap;
        this.dialogBox = wrap.querySelector('#dialog_box');
        this.dialogBoxWrap.querySelector('.close_dialog_button').onclick = ()=>{this.hideDialogBox()}
        this.dialogBoxSection =  this.dialogBox.getElementsByTagName('section')[0];
       }
    showDialogBox(){
        this.dialogBoxWrap.removeAttribute('data-close');
        gsap.fromTo(this.dialogBoxWrap,{opacity:0},{ opacity:1, backgroundColor: "#00000033", backdropFilter:" blur(5px)",duration:0.2});
        gsap.fromTo(this.dialogBox,{opacity:0,scale: 0.4},{opacity:1,scale:1,duration:0.3});
   }
    hideDialogBox(){
       gsap.to(this.dialogBox,{opacity:0,scale:0.4,duration:0.3});
       gsap.to(this.dialogBoxWrap,{ opacity:0, backgroundColor: "#00000033", backdropFilter:" blur(5px)",duration:0.2});
       setTimeout(() => {
           this.dialogBoxWrap.setAttribute('data-close',"");
       }, 500);
    }
    putDialogBox(htmlCode){
        this.dialogBox.getElementsByTagName('section')[0].innerHTML = htmlCode;
    }
    SwitchDialogBoxTo(htmlCode){
       return new Promise((resolve)=>{
           const tl = gsap.timeline();
           tl.fromTo(this.dialogBoxSection,{x:0,opacity:1},{x:-300,opacity:0,duration:0.2});
           tl.call(()=>{this.putDialogBox(htmlCode)},null,">");
           tl.fromTo(this.dialogBoxSection,{x:300,opacity:0},{x:0,opacity:1,duration:0.2});
           tl.call(()=>{resolve()},null,">");
       })
    }
    promt(userData = {heading,subHeading,primaryAction,secondaryAction}){
        const defaultData = {
            heading : "",
            subHeading : "",
            primaryAction : "Ok",
            secondaryAction : "Cancel"
        }       

        const promtData = {...defaultData,...userData};
        console.log(promtData);
    }
   }
   const dialogbox = new DialogBox(document.getElementsByClassName('dialog_box_wrap')[0]);
   
   export {DialogBox,dialogbox};