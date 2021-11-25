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

class ContextMenuItem{
    static eyeIcon =`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
    
    constructor(name,icon,callback){
        this.name = name ;
        this.icon = ContextMenuItem.icon;
        this.function = callback;
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
        
    }
    static fileContextMenu = [new ContextMenuItem('open','eye',()=>{
        console.log("open file");
    }),
     ]
}

export {ContextMenu};