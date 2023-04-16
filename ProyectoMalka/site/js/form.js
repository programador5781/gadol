const $form = document.querySelector('#form');
const $buttonMailto = document.querySelector('#enviar');

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    console.log(form.get('name'));
    $buttonMailto.setAttribute('href',`mailto:banquetesgadolkosher@gmail.com?subject=Nombre: ${form.get('name')} Correo: ${form.get('email')} Phone: ${form.get('phone')}&body=${form.get('message')}`)
    $buttonMailto.click()

    // Limpiar los campos de formulario
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#phone').value = '';
    document.querySelector('#message').value = '';
}