let txt = document.querySelector("#editor");
let btn = document.querySelector("#showBtn");
let res = document.querySelector(".message");

btn.addEventListener("click", () => {
  if (txt.value.trim() === "") {
    res.textContent = "❌ Empty input! Please write something.";
  } else {
    res.innerHTML = txt.value; 
  }
});
