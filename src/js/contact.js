//Archivo para generar data de correos
document.getElementById('contactMe').addEventListener('click', () => {
  let name = document.getElementById('contactName').value;
  let email = document.getElementById('contactEmail').value;
  let phoneNumber = document.getElementById('contactPhone').value;
  let message = document.getElementById('contactMessage').value;
  contacto = {
    name,
    email,
    phoneNumber,
    message
  };
  firebase.database().ref('contactos').push(contacto)
})
