import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupPrice = (store) => { // התאמת הצגת המחיר לערך ומסנן
  const priceInput = getElement('.price-filter');
  const priceValue = getElement('.price-value');

  // הגדרת מסנן
  let maxPrice = store.map((product) => product.price);
  maxPrice = Math.max(...maxPrice);// מחיר סופי
  maxPrice = Math.ceil(maxPrice / 100); //לעגל את המספרים
  priceInput.value = maxPrice;// הכנסת הערך שיוצא לתג מספר 
  priceInput.max = maxPrice;
  priceInput.min = 0;
  priceValue.textContent = `Value : $${maxPrice}`;// הצגת המחיר


  //הצגת המחיר
  priceInput.addEventListener('input', function () {
    const value = parseInt(priceInput.value);// הפיכת הערך למספר בשביל הסינון
    priceValue.textContent = `Value : $${value}`;// שינוי המספר בפס
    let newStore = store.filter((product) => product.price / 100 <= value); // התאמת המוצר למחיר שמוצג
    display(newStore, getElement('.products-container'), true);
    if (newStore.length < 1) { // כאשר אין מוצרים להצגה בהתאם למחיר
      const products = getElement('.products-container');
      products.innerHTML = `<h3 class="filter-error">sorry, no products matched your search</h3>`;
    }
  });
};

export default setupPrice;
