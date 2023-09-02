const form = document.getElementById('formContact');

const divMensaje = document.getElementById('mensaje');

form.addEventListener('submit',function (e){
    e.preventDefault();
alert("mensaje enviado")
    const nomApe = document.getElementById('nomApe').value;
    const mensaje = `¡Hola , ${nomApe}! ¡gracias por contactarnos, su consulta será resuelta a la brevedad! `
    divMensaje.textContent=mensaje
})
