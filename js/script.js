const burger = document.getElementById('menu-burger');
const menu   = document.getElementById('mobile-menu');

burger.addEventListener('click', (e) => {
    e.stopPropagation(); 

    burger.querySelectorAll('img').forEach(img => img.classList.toggle('hidden'));
    menu.classList.toggle('translate-x-full');
});


document.addEventListener('click', (e) => {
    const clickInMenu = menu.contains(e.target);
    const clickOnBurger = burger.contains(e.target);

    if (!clickInMenu && !clickOnBurger) {
        if (!menu.classList.contains('translate-x-full')) {
            menu.classList.add('translate-x-full');
            burger.querySelectorAll('img').forEach(img => img.classList.toggle('hidden'));
        }
    }
});
