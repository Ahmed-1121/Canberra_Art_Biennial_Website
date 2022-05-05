//hamburger menu: this code allow to show and hide menu in mobile & tablet viws.
//In mobile and tablet viws you will see a hamburger icon appear instead of regular menu.
//when you press the hamburger icon a menu will show, and iside it you will find a (x) icon, which can be used to close the menu
//function show() {
  //var x =  document.getElementById("show_menu2");
   
  //if (x.style.display === "block") {
    //x.style.display = "none";
  //} else {
    //x.style.display = "block";
//  }
//}



function show2() {
    document.getElementById("show_menu2").classList.remove("show_menu");
    document.getElementById("show_menu2").classList.add("show_menu2");
    
}


function show() {
    document.getElementById("show_menu2").classList.remove("show_menu2");
    document.getElementById("show_menu2").classList.add("show_menu");
    
}

