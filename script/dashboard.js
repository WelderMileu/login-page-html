const $ = e => document.querySelector(e);

// Função de toggle do menu na versao mobile.
const toggle_menu = () => {
    if ($('#menu').classList.contains('hidden-menu')) {
        $('#menu').classList.remove('hidden-menu')
        $('#menu').classList.add('active-menu')

        $('#toggle').classList.remove('toggle-180')
        $('#toggle').classList.add('toggle-0')
    } else {
        $('#menu').classList.add('hidden-menu')
        $('#menu').classList.remove('active-menu')

        $('#toggle').classList.add('toggle-180')
        $('#toggle').classList.remove('toggle-0')
    }
}

// Evento para redirecionar o usario para nossa pagina de login.
$('#signout').addEventListener('click', () => location.href = '/');
$('#toggle').addEventListener('click', toggle_menu)