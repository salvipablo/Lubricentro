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
