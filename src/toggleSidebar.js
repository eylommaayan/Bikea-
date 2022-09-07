import { getElement } from "./utils.js"; // המרת פונקציה בחירה

const toggleNav = getElement(".toggle-nav"); //פתור תפריט
const sidebarOverlay = getElement(".sidebar-overlay"); // כפתור תפריט מעבר
const closeBtn = getElement(".sidebar-close"); // כפתור סגירה
//הפעלת כפור פתיחה
toggleNav.addEventListener("click", () => {
  sidebarOverlay.classList.add("show");
}); //הפעלת כפור סגירה
closeBtn.addEventListener("click", () => {
  sidebarOverlay.classList.remove("show");
});
