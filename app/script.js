
const menu = document.getElementById('nav__menu');

// document.addEventListener('click', function(e){
//     if (e.target.id != 'menu__btn' && e.target.id != 'nav__menu'){
//         // menu.style.display = 'none';
//         menu.style.visibility = 'hidden';
//     }else if(e.target.id == 'menu__btn'){
//         // menu.style.display = (menu.style.display != 'block') ? 'block' : 'none';
//         menu.style.visibility = (menu.style.visibility != 'visible') ? 'visible' : 'hidden';
//     }
    
// });

document.addEventListener("click", function(e) {
    if (e.target.id != 'menu__btn' && e.target.id != 'nav__menu') {
      menu.style.transform = 'translateX(150%)';
    } else if (e.target.id == 'menu__btn') {
      menu.style.transform = (menu.style.transform != 'translateX(0)') ? 'translateX(0)' : 'translateX(150%)';
    }
  });