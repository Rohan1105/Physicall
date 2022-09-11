const checkbox = document.getElementById("checkbox");
const basic = document.getElementById("Basic");
const premium = document.getElementById("Premium");
const standard = document.getElementById("Standard");

checkbox.addEventListener("click", () => {
  basic.textContent = basic.textContent === "₹99" ? "₹999" : "₹99";
  premium.textContent =premium.textContent === "₹159" ? "₹1499 " : "₹159";
  standard.textContent = standard.textContent === "₹199" ? "₹1899" : "₹199";
});