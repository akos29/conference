const toggler = document.querySelector('.menu-toggler');
const menu = document.getElementByClass('.nav-menu');

toggler.addEventListener('click', toggle());

function toggle() {
	menu.Style.display = 'flex';
}
