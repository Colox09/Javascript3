const form = document.querySelector('form');
const usuario = document.getElementById('user');
const pass = document.getElementById('pass');

/* send.addEventListener('click', enviar) */

form.onsubmit = function(e) {

    let cont = false;
    for (let value of usuario.value) {
        if (value == '@') {
            cont = true;
            break;
        }
    }

    if (usuario.value === '' || pass.value === '') {
        alert('El formulario no esta completo o esta vacio');
        e.preventDefault();
    } else if (!cont) {
        alert('Falta un @ en el usuario');
        e.preventDefault();
    }
}