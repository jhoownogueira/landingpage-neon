const header = document.getElementById('js-header');
const buttonMenuFixed = document.getElementById('btn-fixed')


function fixedMenu() {
    if(window.pageYOffset > 80) {
        header.classList.add('secondary-menu');
        buttonMenuFixed.classList.remove('btn-white');
        buttonMenuFixed.classList.add('btn-secondary');

    } else {
        header.classList.remove('secondary-menu')
        buttonMenuFixed.classList.add('btn-white');
        buttonMenuFixed.classList.remove('btn-secondary');
    }
}

document.addEventListener('scroll', fixedMenu);