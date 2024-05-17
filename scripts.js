const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");

if (bar.click) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
