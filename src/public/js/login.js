const LinkLogin = document.getElementById('linkLogin')
const FrmLogin = document.getElementById('frmLogin')
const IconClose = document.getElementById('iconClose')
const BtnLogin = document.getElementById('btnLogin')

const TxtUserName = document.getElementById('txtUserName')
const TxtPassword = document.getElementById('txtPassword')

LinkLogin.addEventListener('click', () => {
  FrmLogin.classList.remove ('closeFrmLogin')
})

IconClose.addEventListener('click', () => {
  FrmLogin.classList.add('closeFrmLogin')
})

BtnLogin.addEventListener('click', async (e) => {
  e.preventDefault()

  let username = TxtUserName.value
  let password = TxtPassword.value

  if (username === '' || password === '') alert('Falta ingresar datos...')
  else {
    const DataToSend = {
      username,
      password,
    };

    const Request = await fetch('http://localhost:3002/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(DataToSend)
    });
  
    const Response = await Request.json()

    if (Response.message === 'acepted') window.location.href = "http://localhost:3002/products";
    else alert('Datos de usuario ingresados incorrectos...')
  }
})
