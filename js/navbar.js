const menuItemsDesktop = document.querySelectorAll('.menu-item-desktop');
const menuItemsMobile = document.querySelectorAll('.menu-item-mobile');

menuItemsDesktop.forEach((item) => {
  item.classList.add(
    'text-gray-300',
    'hover:text-white',
    'px-3',
    'py-2',
    'rounded-md',
    'text-sm',
    'font-medium',
  );
});

menuItemsMobile.forEach((item) => {
  item.classList.add(
    'text-gray-300',
    'hover:text-white',
    'block',
    'px-3',
    'py-2',
    'rounded-md',
    'text-sm',
    'font-medium',
  );
});

const button = document.querySelector('button');
const menu = document.getElementById('mobile-menu');

button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});
