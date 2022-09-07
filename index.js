// global imports-המרת הקבצים המופיעים בכל העמודים
import "./src/toggleSidebar.js";
import "./src/cart/toggleCart.js";
import "./src/cart/setupCart.js";
// specific imports- רכיבים להמרה לעמוד
import fetchProducts from "./src/fetchProducts.js";
import { setupStore, store } from "./src/store.js";
import display from "./src/displayProducts.js";
import { getElement } from "./src/utils.js";

const init = async () => {
  // פונקציה - לחכות שהמידע של המוצרים יטען
  const products = await fetchProducts();
  if (products) {
    // להוסיף מוצרים לחנות ואיפה להציג אותם
    setupStore(products);
    const featured = store.filter((product) => product.featured === true);
    display(featured, getElement(".featured-center")); //איזה סוג של פריטים יוצגו בעמוד הראשון
  }
};

window.addEventListener("DOMContentLoaded", init); //init בשביל לחכות שהחלון  יפתח אחרי הטעינה ,צריך פונקציה
