async function SendToDeleteSale (id) {
  const Request = await fetch(`http://localhost:3002/sales/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

  const Response = await Request.json()

  if (Response.message === 'Sale deleted sucessfully') {
    window.alert('Venta eliminada satisfactoriamente')
    window.location.reload()
  }
}

document.addEventListener('click', (event) => {
  const clickedElement = event.target

  if (clickedElement.id && clickedElement.id.substring(0, 9) === 'btnDelete') {
    const id = clickedElement.id.substring(10)
    SendToDeleteSale(id)
  }
})
