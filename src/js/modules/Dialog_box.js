class DialogBox{
 constructor(wrap){
     this.dialogBoxWrap = wrap;
     this.dialogBox = wrap.querySelector('#dialog_box');
    
     this.dialogBoxWrap.querySelector('.close_dialog_button').onclick = ()=>{this.hideDialogBox()}
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
}

export {DialogBox};
