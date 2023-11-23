const sideBar = document.querySelector(".sidebar")
function desktopsideBar(){
    const tutupBarD = document.querySelector(".tutup-barD")
    const bukaBarD = document.querySelector(".buka-barD")
    const sideBar_width = sideBar.offsetWidth;    
    
    if(sideBar_width > 0 ){
        bukaBarD.classList.add("lg:hidden")
        bukaBarD.classList.remove("lg:block")
    }    
    tutupBarD.addEventListener("click", function(){
        sideBar.classList.toggle("lg:left-[-300px]") 
        bukaBarD.classList.remove("lg:hidden") 
        bukaBarD.classList.add("lg:block")      
    })
    bukaBarD.addEventListener("click",function(){
        sideBar.classList.toggle("lg:left-[-300px]")
        bukaBarD.classList.remove("lg:block") 
        bukaBarD.classList.add("lg:hidden") 
    })
}


function dropDown() {
    const dropDown = document.querySelector("#drop-down")
    const subMenu = document.querySelector("#submenu")
    const arrow = document.querySelector("#arrow")
    dropDown.addEventListener("click",function(){
        subMenu.classList.toggle("hidden")
        arrow.classList.toggle("rotate-0")
    })
    
}

desktopsideBar()

dropDown()
