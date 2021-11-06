class navbar{
    static toggleSize(){
        let navbar =   document.getElementById("nav_bar");
        let app_wrap = document.getElementById('app_wrap');      

        if(navbar.getAttribute("data-state")=="maximized"){
            app_wrap.style.gridTemplateColumns = "75px 1fr var(--aside_width)"        
            navbar.setAttribute("data-state","minimized");
        }
        else{
            app_wrap.style.gridTemplateColumns = "var(--aside_width) 1fr var(--aside_width)"        
            navbar.setAttribute("data-state","maximized");
        }
     
    }
}

export {navbar}