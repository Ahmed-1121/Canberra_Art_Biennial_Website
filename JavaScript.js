
//hamburger menu: this code allow to show and hide menu in mobile & tablet viws.
//when you press the hamburger icon a menu will show, and iside it you will find a (x) icon, which can be used to close the menu
// The show and hide menue are working by removing and injecting class.
function show2() {
    document.getElementById("show_menu2").classList.remove("show_menu");
    document.getElementById("show_menu2").classList.add("show_menu2");
    
}


function show() {
    document.getElementById("show_menu2").classList.remove("show_menu2");
    document.getElementById("show_menu2").classList.add("show_menu");
    
}

