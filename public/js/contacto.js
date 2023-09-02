const form = document.getElementById('formContact');

const divMensaje = document.getElementById('mensaje');

form.addEventListener('submit',function (e){
    e.preventDefault();

    const nomApe = document.getElementById('nomApe').value;
    form.classList.toggle('borrarForm')
;    const mensaje = `¡Hola , ${nomApe}! ¡gracias por contactarnos, su consulta será resuelta a la brevedad! `
    divMensaje.textContent=mensaje
})
