const bxMenu = document.querySelector('.bx.bx-menu'); // Corrected selector
const ul = document.querySelector('ul');

bxMenu.addEventListener('click', () => {
    ul.classList.toggle('ham_active');

    let hamChild = bxMenu.firstElementChild;
    if (ul.classList.contains('ham_active')) {
        hamChild.classList.replace('fa-bars', 'fa-xmark');
    } else {
        hamChild.classList.replace('fa-xmark', 'fa-bars');
    }
});
