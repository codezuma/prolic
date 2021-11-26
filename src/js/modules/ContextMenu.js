import { fileComponent } from './module.js'
class ContextMenu {
    static start() {
        let contextMenuELemnts = document.querySelectorAll(".contextMenuParent");
        contextMenuELemnts.forEach((ele) => {
            new ContextMenuParent(ele);
        })
    }

    static hide(element) {
        let contextMenuCon = element.querySelector(".contextMenuCon");
        contextMenuCon.remove();
    }
    static getMenuItem() {

    }
}

class ContextMenuItem {
    constructor(name, icon, callback) {
        this.name = name;
        this.icon = icon;
        this.function = callback;
    }
}

class ContextMenuParent {
    constructor(htmlElement) {
        this.htmlElement = htmlElement;
        htmlElement.addEventListener("contextmenu", this.addContextMenu);
        this.elementObject = this.getElementObject();

    }
    getElementObject() {
        let ContextMenuType = this.htmlElement.getAttribute("data-contextMenuType");
        if (ContextMenuType == 'file') {
            return new fileComponent(this.htmlElement);
        }
    }
    addContetMenuItems(ContextItemCon){
        let ContextMenuType = this.htmlElement.getAttribute("data-contextMenuType");

        let fileContextMenu = [new ContextMenuItem('Open', '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>', () => {
                               this.elementObject.open();
                                }),
                              new ContextMenuItem('Download', '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>', () => {
                               this.elementObject.download();
                                })

                               ];
        let contextMenuItems;
        if(ContextMenuType == 'file'){
          contextMenuItems = fileContextMenu;
        }
        contextMenuItems.forEach(ele=>{
            let contextMenuItem = document.createElement('div');
            contextMenuItem.classList.add('contextMenuItem');
            console.log(ele);
            contextMenuItem.addEventListener('click',ele.function);
            contextMenuItem.innerHTML = `${ele.icon} <span class="contextMenuName" >${ele.name}</span>`
            ContextItemCon.appendChild(contextMenuItem); 
        })
                                       
        
    }
    addContextMenu = (e) => {
        e.preventDefault();
        var rect = e.currentTarget.getBoundingClientRect();
        let offsetX = e.clientX - rect.left;
        let offsetY = e.clientY - rect.top;


        //removing previous context menu
        let contextmenu = document.querySelector(".contextMenuCon");
        if (!contextmenu) {
            this.showContextMenu(offsetX, offsetY);
        }
        else {
            contextmenu.remove();
            this.showContextMenu(offsetX, offsetY);
        }
    }
    showContextMenu(xCordinate, yCordinate) {
        let menuCon = document.createElement('div');
        menuCon.classList.add("contextMenuCon");
        this.addContetMenuItems(menuCon); 
        menuCon.style.top = yCordinate + "px";
        menuCon.style.left = xCordinate + "px";
        this.htmlElement.appendChild(menuCon);
        this.htmlElement.style.position = "relative";
        document.addEventListener("click", () => {
            let contextMenuCon = document.querySelector(".contextMenuCon");
            if (contextMenuCon) {
                contextMenuCon.remove();
            }
        })

    }

   
}

export { ContextMenu };