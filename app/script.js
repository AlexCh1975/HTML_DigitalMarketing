
const menu = document.getElementById('nav__menu');

document.addEventListener("click", function(e) {
    if (e.target.classList != 'menu__click' && e.target.id != 'nav__menu') {
      menu.style.right = '-250px';
    } else if (e.target.classList == 'menu__click') {
      menu.style.right = (menu.style.right != '0') ? '0' : '-250px';
    }
  });