const menu = document.getElementById('menu');
const toggle_menu = document.getElementById('toggle');

document.getElementById('signout').addEventListener('click', () => {
    location.href = '/'
})

const toggle = () => {
    if (menu.classList.contains('hidden-menu')) {
        menu.classList.remove('hidden-menu')
        menu.classList.add('active-menu')

        toggle_menu.classList.remove('toggle-180')
        toggle_menu.classList.add('toggle-0')
    } else {
        menu.classList.add('hidden-menu')
        menu.classList.remove('active-menu')

        toggle_menu.classList.add('toggle-180')
        toggle_menu.classList.remove('toggle-0')
    }
}

document.getElementById('toggle').addEventListener('click', toggle)