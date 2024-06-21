const BtnEnviar = document.getElementById('btnEnviar')

const TxtDescription = document.getElementById('txtDescription')
const TxtAmount = document.getElementById('txtAmount')
const TxtPriceWNIva = document.getElementById('txtPriceWNIva')
const TxtEndPrice = document.getElementById('txtEndPrice')

const DataToSend = {
  descriptionProduct: '',
  amount: 0,
  costPrice: 0,
  endPriceSale: 0
}

function VerifyEnteredData () {
  const description = TxtDescription.value
  const amount = TxtAmount.value
  const priceWNIva = TxtPriceWNIva.value
  const endPrice = TxtEndPrice.value

  if (description === '' || amount === '' || priceWNIva === '' || endPrice === '') return false

  DataToSend.descriptionProduct = description
  DataToSend.amount = parseInt(amount)
  DataToSend.costPrice = parseFloat(priceWNIva)
  DataToSend.endPriceSale = parseFloat(endPrice)

  return true
}

async function sendData () {
  console.log('sendData de modifyProduct')

  const Request = await fetch('http://localhost:3002/sales', {
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

    if (message === 'Sale successfully completed') window.location.href = 'http://localhost:3002/sales'
  }
})
