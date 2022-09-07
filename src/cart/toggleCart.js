import { getElement } from '../utils.js';
//משתנים
const cartOverlay = getElement('.cart-overlay'); // כפתור עגלה
const closeCartBtn = getElement('.cart-close');  // כפתור סגירה עגלה
const toggleCartBtn = getElement('.toggle-cart'); // כמות מוצרים בעגלה 
//הפעלת הכפור
toggleCartBtn.addEventListener('click', () => {
  cartOverlay.classList.add('show');
});//הפעלת הכפור
closeCartBtn.addEventListener('click', () => {
  cartOverlay.classList.remove('show');
});
//הפעלת הכפור של עגלת קניות שיהיה בעודים נוספים
export const openCart = () => {
  cartOverlay.classList.add('show');
};
