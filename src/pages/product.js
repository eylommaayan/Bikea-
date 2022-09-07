// global imports
import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";
// specific
import { addToCart } from "../cart/setupCart.js"; // המרת פונקציה להוסיף לעגלה
import { singleProductUrl, getElement, formatPrice } from "../utils.js";

// selections -  בחירת משתנים
const loading = getElement(".page-loading");
const centerDOM = getElement(".single-product-center");
const pageTitleDOM = getElement(".page-hero-title");
const imgDOM = getElement(".single-product-img");
const titleDOM = getElement(".single-product-title");
const companyDOM = getElement(".single-product-company");
const priceDOM = getElement(".single-product-price");
const colorsDOM = getElement(".single-product-colors");
const descDOM = getElement(".single-product-desc");
const cartBtn = getElement(".addToCartBtn");

// cart product -id משתנה ל
let productID;

// show product when page loads
window.addEventListener("DOMContentLoaded", async function() {
  const urlID = window.location.search;
  //של המוצר שנלחץ  id הפעלת הצגת העמוד לפי ה
  try {
    const response = await fetch(`${singleProductUrl}${urlID}`);
    if (response.status >= 200 && response.status <= 299) {
      //jason כאשר הרשימת מחירים היא בין ערכים של מחיר שאפשר אז יטען ה
      const product = await response.json();
      // grab data
      const { id, fields } = product; //משתנה של מוצר עם ערכים
      productID = id; // - הכנסת הערך של המוצר הנבחר ל

      const { name, company, price, colors, description } = fields; // משנה עם הערכים של המוצר שנבחר
      const image = fields.image[0].thumbnails.large.url; // משתנה התמונה
      // set values - הכנסת הערכים החדשים של המוצר לעמוד

      document.title = `${name.toUpperCase()} | Comfy`;
      pageTitleDOM.textContent = `Home / ${name}`;
      imgDOM.src = image;
      titleDOM.textContent = name;
      companyDOM.textContent = `by ${company}`;
      priceDOM.textContent = formatPrice(price);
      descDOM.textContent = description;
      colors.forEach((color) => {
        const span = document.createElement("span");
        span.classList.add("product-color");
        span.style.backgroundColor = `${color}`;
        colorsDOM.appendChild(span); // עיגולי הצבעים
      });
    } else {
      console.log(response.status, response.statusText); // אם לא אז תתקבל הודעת שגיאה
      centerDOM.innerHTML = `
    <div>
    <h3 class="error">sorry, something went wrong</h3>
    <a href="index.html" class="btn">back home</a> 
    </div> 
     `;
    }
  } catch (error) {
    console.log(error);
  }

  loading.style.display = "none";
});

cartBtn.addEventListener("click", function() {
  addToCart(productID);
});
