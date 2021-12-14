import { Icons } from './Icons.js';
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
    }
    addContetMenuItems(ContextItemCon) {
        let componentObject = this.htmlElement.componentObject;
        let ContextMenuType = componentObject.componentType;
        let fileContextMenuItems = [new ContextMenuItem('Open', Icons.open, () => { componentObject.open(); }),
        new ContextMenuItem('Download', Icons.download, () => { componentObject.download() })
        ];
        let folderContextMenuItems = [new ContextMenuItem('Open', Icons.open, () => { componentObject.open(); }),
        new ContextMenuItem('New Folder', Icons.folderOpen, () => { componentObject.createNewFolder(); })
        ];
        let contextMenuItems;
        switch (ContextMenuType) {
            case 'file':
                contextMenuItems = fileContextMenuItems;
                break;
            case 'folder':
                contextMenuItems = folderContextMenuItems;
            default:
                break;
        }
        contextMenuItems.forEach(ele => {
            let contextMenuItem = document.createElement('div');
            contextMenuItem.classList.add('contextMenuItem');
            contextMenuItem.addEventListener('click', ele.function);
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

export { ContextMenu, ContextMenuParent };
