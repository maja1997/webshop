// eslint-disable-next-line import/prefer-default-export
export const addProduct = (products, productsToAdd) => {
  const productsClone = [...products];

  productsToAdd.forEach((product) => {
    const foundProd = productsClone.find((prod) => prod.id === product.id);
    if (!foundProd) {
      productsClone.push(product);
    }
  });

  return productsClone;
};
