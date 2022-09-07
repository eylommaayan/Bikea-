import { getStorageItem, setStorageItem } from "./utils.js"; // להמיר את הפונקציות של קבלה והצגת המידע מהשרת
let store = getStorageItem("store"); //utils - הגדרת משתנה החנות לפונקציה להוצאת המידע של החנות מהשרת שהוגדרה
const setupStore = (products) => {
  // פונקציה לגדרת סדר ההצגה של האלמנים מהשרת
  store = products.map((product) => {
    const {
      id,
      fields: { featured, name, price, company, colors, image: img },
    } = product;
    const image = img[0].thumbnails.large.url; //אלמנט לקובץ תמונה
    return { id, featured, name, price, company, colors, image }; // הכנסת האלמנטים
  });
  setStorageItem("store", store);
};

const findProduct = (id) => {
  let product = store.find((product) => product.id === id);
  return product;
};

export { store, setupStore, findProduct };
