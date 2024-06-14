const btnNewProduct = document.getElementById('btnNewProduct')

btnNewProduct.addEventListener('click', async (e) => {
  try {
    const reqNewProuct = await fetch("http://localhost:3002/products/newProduct")
    console.log(reqNewProuct);
    window.location.href = reqNewProuct.url
  } catch (error) {
    alert(`Error: ${error.message}`)
  }
})

function SendToDeleteProduct(id) {
  // TODO: Hacer fetch enviando por metodo DELETE, el pedido de eliminar producto.
}

document.addEventListener('click', (event) => {
  const clickedElement = event.target

  if (clickedElement.id && clickedElement.id.substring(0, 9) === 'btnDelete') {
    let id = clickedElement.id.substring(10)
    SendToDeleteProduct(id)
  }
})
