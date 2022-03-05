function storeCatalogue(input) {
  let products = [];

  for (const line of input) {
    let [productName, productPrice] = line.split(' : ');
    productPrice = Number(productPrice);

    const currentProduct = { productName, productPrice };
    products.push(currentProduct);
  }
  products.sort((a, b) => (a.productName > b.productName) ? 1 : -1);

  const productCatalogue = {

    filterByInitial(array) {
      for (const obj of array) {
        const initial = obj.productName[0];
        this[initial] = products.filter(product => product.productName[0] == initial);
      }
    },

  }
  productCatalogue.filterByInitial(products);

  for (const [key, value] of Object.entries(productCatalogue)) {
    if (typeof (value) != 'function') {
      console.log(key);
      value.forEach(item => console.log(`  ${item.productName}: ${item.productPrice}`));
    }
  }
}

storeCatalogue(
  [
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
  ]
)

