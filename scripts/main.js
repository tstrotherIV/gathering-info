// Some starter code
const container = document.querySelector("#purchaseList")
const inputField1 = document.querySelector("#productName")
const inputField2 = document.querySelector("#store")

document.querySelector("#saveEntry").addEventListener("click", event => {
  const product = document.querySelector("#productName").value
  const store = document.querySelector("#store").value

  container.innerHTML += `<section>I can purchase a ${product} at ${store}.</section> `
  inputField1.value = ""
  inputField2.value = ""
})