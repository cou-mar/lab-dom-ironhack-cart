let cartElem = document.querySelector('#cart tbody')

// ITERATION 1
function updateSubtotal(product) {
    // console.log('Calculating subtotal, yey!');
    const priceElement = product.querySelector('.price span');
    const quantityElement = product.querySelector('.quantity input');
    const price = Number(priceElement.innerHTML);
    const quantity = Number(quantityElement.value);

    //calculate subtotal
    let subtotal = price * quantity;

    let subtotalElement = product.querySelector('.subtotal span');

    subtotalElement.innerHTML = subtotal;

    return subtotal;
/*
  for (let i = 0; i < product.length; i++) {
    let price = product[i].querySelector('.price span').innerHTML;
    let quantity = product[i].querySelector('.quantity input').value;
    let subtotalProducts = (product[i].querySelector(
      '.subtotal span'
    ).innerHTML = price * quantity);
  }*/
}

// code in the following two lines is added just for testing purposes.
// it runs when only iteration 1 is completed. at later point, it can be removed.
// const singleProduct = document.querySelector('.product');
// updateSubtotal(singleProduct);
// end of test

// ITERATION 2 & 3

function calculateAll() {
  let productElement = document.querySelectorAll('.product');

  let totalPrice = 0;

  productElement.forEach(function(oneProduct){
    let productTotal = updateSubtotal(oneProduct);
    totalPrice += productTotal;
  });

  let grandTotal = document.querySelector('#total-value span');
  
  grandTotal.innerHTML = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  let productToRemove = target.parentNode.parentNode;
  cartElem.removeChild(productToRemove);

  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

let removeButtons = cart.getElementsByClassName('btn-remove');
[...removeButtons].forEach(button => button.addEventListener('click', removeProduct));

});
