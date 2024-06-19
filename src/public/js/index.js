const btnNewProduct = document.getElementById('btnNewProduct')

btnNewProduct.addEventListener('click', async (e) => {
  try {
    const reqNewProuct = await fetch('http://localhost:3002/products/newProduct')

    window.location.href = reqNewProuct.url
  } catch (error) {
    document.alert(`Error: ${error.message}`)
  }
})

async function SendToDeleteProduct (id) {
  const Request = await fetch(`http://localhost:3002/products/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

  const Response = await Request.json()

  if (Response.message === 'Product deleted sucessfully') {
    document.alert('Producto eliminado satisfactoriamente')
    window.location.reload()
  }
}

document.addEventListener('click', (event) => {
  const clickedElement = event.target

  if (clickedElement.id && clickedElement.id.substring(0, 9) === 'btnDelete') {
    const id = clickedElement.id.substring(10)
    SendToDeleteProduct(id)
  }
})
