//! Functions

const popUpMenu = () =>{
    var element = document.getElementById("menu");
    element.classList.remove("close");
    element.classList.remove("start");
    element.classList.add("open");
};


const  closeMenu = () =>{
    var element = document.getElementById("menu");
    element.classList.remove("open");
    element.classList.add("close");
};
