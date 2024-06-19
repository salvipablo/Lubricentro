const BtnEnviar = document.getElementById('btnEnviar')

const TxtDescription = document.getElementById('txtDescription')
const TxtBrand = document.getElementById('txtBrand')
const TxtStock = document.getElementById('txtStock')
const TxtPriceWNIva = document.getElementById('txtPriceWNIva')

const DataToSend = {
  description: '',
  brand: '',
  stock: 0,
  priceWNIva: 0
}

function VerifyEnteredData () {
  const description = TxtDescription.value
  const brand = TxtBrand.value
  const stock = TxtStock.value
  const priceWNIva = TxtPriceWNIva.value

  if (description === '' || brand === '' || stock === '' || priceWNIva === '') return false

  DataToSend.description = description
  DataToSend.brand = brand
  DataToSend.stock = parseInt(stock)
  DataToSend.priceWNIva = parseFloat(priceWNIva)

  return true
}

async function sendData () {
  const Request = await fetch('http://localhost:3002/products/saveProduct', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(DataToSend)
  })

  const Response = await Request.json()

  return Response.message
}

BtnEnviar.addEventListener('click', async (e) => {
  e.preventDefault()

  const dataOk = VerifyEnteredData()

  if (!dataOk) window.alert('Le falto cargar datos!!')
  else {
    const message = await sendData()
    window.alert(message)

    if (message === 'Save register sucesfully') window.location.href = 'http://localhost:3002/products'
  }
})
