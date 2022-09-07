import { getElement } from '../utils.js';
import display from '../displayProducts.js';
const setupSearch = (store) => {
  const form = getElement('.input-form');
  const nameInput = getElement('.search-input');
  form.addEventListener('keyup', function () {// הכנסת אפשרות לרשום בתיבה
    const value = nameInput.value; // מה צריך להיות רשום
    if (value) {
      const newStore = store.filter((product) => {
        let { name } = product;
        name = name.toLowerCase();
        if (name.startsWith(value)) {// התאמת מה שרשום בתיבה לתוצאות חיפוש
          return product;
        }
      });
      display(newStore, getElement('.products-container'), true); // הצגת הרהיטים החדשים בחנות 
      if (newStore.length < 1) {
        const products = getElement('.products-container');
        products.innerHTML = `<h3 class="filter-error">
       sorry, no products matched your search
       </h3>`;
      }
    } else {
      display(store, getElement('.products-container'), true); // אם לא נוסיף מילים לפילטר אז כל המוצרים יוצגו
    }
  });
};

export default setupSearch;
