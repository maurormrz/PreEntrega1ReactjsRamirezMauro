import products from './data/products.json';

export const getItems = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (categoryId) {
        resolve(products.filter(product => product.category === categoryId));
      } else {
        resolve(products);
      }
    }, 1000);
  });
};

export const getItem = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(product => product.id === id));
    }, 1000);
  });
};