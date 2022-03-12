function solve() {
   let addProductButtons = Array.from(document.querySelectorAll('.add-product'));
   let textAreaElement = document.querySelector('textarea');
   let checkoutButton = document.querySelector('.checkout');
   let productsList = [];
   let totalSum = 0;

   addProductButtons.forEach(addProductButton => addProductButton.addEventListener('click', onAddProduct));
   checkoutButton.addEventListener('click', onCheckout)

   function onAddProduct(e) {
      let currentProduct = e.target.parentNode.parentNode;
      let productName = currentProduct.querySelector('.product-title').textContent;
      let productPrice = currentProduct.querySelector('.product-line-price').textContent;
      productsList.push(productName);
      totalSum += Number(productPrice);
      textAreaElement.textContent += `Added ${productName} for ${productPrice} to the cart.\n`;
   }

   function onCheckout() {
      let uniqueProducts = productsList.filter((v, i, arr) => arr.indexOf(v) === i);
      textAreaElement.textContent += `You bought ${uniqueProducts.join(', ')} for ${totalSum.toFixed(2)}.`;
      addProductButtons.forEach(addProductButton => addProductButton.setAttribute('disabled', true));
      checkoutButton.setAttribute('disabled', true);
   }
}
