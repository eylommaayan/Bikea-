// global imports המרת העמודים
import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";

//  filter imports חלוקת הרהיטים לפפי סוגי בחירה
import setupSearch from "../filters/search.js";
import setupCompanies from "../filters/companies.js";
import setupPrice from "../filters/price.js";

// specific imports התאמת המשתנים לקבצים
import { store } from "../store.js";
import display from "../displayProducts.js";
import { getElement } from "../utils.js";

const loading = getElement(".page-loading"); //  יצרת אלמנט לטענית העמוד  בשביל שנוכל להשתמש באלמנט ה כדי להסתיר את עמוד הטעינה

display(store, getElement(".products-container")); // הכנסת מוצרי החנות לאלמנט

//
setupSearch(store);
setupCompanies(store);
setupPrice(store);
loading.style.display = "none";
