function solve(input) {
  let result = [];

  for (const row of input) {
    let [townName, productName, productPrice] = row.split(' | ');
    productPrice = Number(productPrice);
    let currentProduct = { townName, productName, productPrice };
    let nameMatchesCount = 0;

    if (result.length < 1) {
      result.push(currentProduct);
      continue;
    }

    result.forEach((obj, i) => {
      if (obj.productName == productName) {
        nameMatchesCount++;
        if (obj.productPrice > productPrice) {
          obj.productPrice = productPrice;
          obj.townName = townName;
        }
      } else if (nameMatchesCount == 0 && i == result.length - 1) {
        result.push(currentProduct);
      }
    });
  }

  for (const obj of result) console.log(`${obj.productName} -> ${obj.productPrice} (${obj.townName})`);
}

solve(
  ['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);
