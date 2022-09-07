import { allProductsUrl } from "./utils.js";

const fetchProducts = async () => {
  // פונקציה מוצרים
  const response = await fetch(allProductsUrl).catch((err) => console.log(err)); //אם יש שגיאה
  if (response) {
    //אם אין שגיאה
    return response.json();
  }
  return response;
};

export default fetchProducts;
