const BtnEnviar = document.getElementById('btnEnviar')

const IdProduct = document.getElementById('idProduct')
const TxtDescription = document.getElementById('txtDescription')
const TxtBrand = document.getElementById('txtBrand')
const TxtStock = document.getElementById('txtStock')
const TxtPriceWNIva = document.getElementById('txtPriceWNIva')
const TxtStockNotice = document.getElementById('txtStockNotice')
const TxtStockAlarm = document.getElementById('txtStockAlarm')

const DataToSend = {
  id: 0,
  description: '',
  brand: '',
  stock: 0,
  priceWNIva: 0,
  stockNotice: 0,
  stockAlarm: 0
}

function VerifyEnteredData () {
  const description = TxtDescription.value
  const brand = TxtBrand.value
  const stock = TxtStock.value
  const priceWNIva = TxtPriceWNIva.value
  const stockNotice = TxtStockNotice.value
  const stockAlarm = TxtStockAlarm.value

  if (description === '' || brand === '' || stock === '' ||
                                    priceWNIva === '' || stockNotice === '' || stockAlarm === '') return false

  DataToSend.id = parseInt(IdProduct.value)
  DataToSend.description = description
  DataToSend.brand = brand
  DataToSend.stock = parseInt(stock)
  DataToSend.priceWNIva = parseFloat(priceWNIva)
  DataToSend.stockNotice = stockNotice
  DataToSend.stockAlarm = stockAlarm
  return true
}

async function sendData () {
  console.log('sendData de modifyProduct')

  const Request = await fetch('http://localhost:3002/products/modifyProduct', {
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

    if (message === 'Product modified successfully') window.location.href = 'http://localhost:3002/products'
  }
})
