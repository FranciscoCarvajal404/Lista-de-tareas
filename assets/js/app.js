import { addItem } from "./components/addItem.js";

const submit = document.querySelector("[data-btn]");
submit.addEventListener("click", addItem);