class ContextMenu{
    static start(){
        let contextMenuELemnts = document.querySelectorAll(".contextMenuParent");
        contextMenuELemnts.forEach((ele)=>{
            new ContextMenuParent(ele);
        })
    }  

    static hide(element){
        let contextMenuCon = element.querySelector(".contextMenuCon");
        contextMenuCon.remove();
    }
    static getMenuItem(){

    }
}

class ContextMenuParent{
   constructor(htmlElement){
       this.htmlElement = htmlElement;
       htmlElement.addEventListener("contextmenu",this.addContextMenu);
   }
   addContextMenu = (e)=>{
        e.preventDefault();
        var rect = e.currentTarget.getBoundingClientRect();
        let offsetX = e.clientX - rect.left;
        let offsetY = e.clientY - rect.top;
        

        //removing previous context menu
        let contextmenu = document.querySelector(".contextMenuCon");
        if(!contextmenu){
         this.showContextMenu(offsetX,offsetY);    
        }   
        else{
           contextmenu.remove();
           this.showContextMenu(offsetX,offsetY);
       }
    }
    showContextMenu(xCordinate,yCordinate){
    let menuCon = document.createElement('div');
    menuCon.classList.add("contextMenuCon");
    menuCon.style.top = yCordinate+"px";
    menuCon.style.left = xCordinate+"px";
    this.htmlElement.appendChild(menuCon);
    this.htmlElement.style.position = "relative";

    document.addEventListener("click",()=>{
        let contextMenuCon = document.querySelector(".contextMenuCon");
        if(contextMenuCon){
            contextMenuCon.remove();
        }
    })
  
    }

    addContetMenuItems(){
        let ContextMenuType = this.htmlElement.getAttribute("data-contextMenuType");
        const constMenuTypes = []; 
        constMenuTypes.push({
            name:"file",
            openFile : function(){
                
            }
        })
    }

    
}



export {ContextMenu};