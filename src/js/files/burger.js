const burger = document.querySelector('.burger');
if (burger) {
  const menu = document.querySelector('.nav-menu');
  const body = document.querySelector('html');
  burger.addEventListener("click", function (e) {
    burger.classList.toggle('menu--active');
    menu.classList.toggle('menu--active');
    body.classList.toggle('lock');
  });
}