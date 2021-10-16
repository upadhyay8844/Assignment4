let count = 0;
let x = document.getElementById("counter");
let minusButton = document.getElementById("minus");
minusButton.style.color = "gray";
minusButton.style.border = "gray";

function increment() {
  count++;
  x.innerHTML = count;
  minusButton.style.color = "black";
  minusButton.style.border = "";
}

function decrement() {
  if (count == 1) {
    count--;
    x.innerHTML = count;
    minusButton.style.color = "gray";
    minusButton.style.border = "gray";
  } else if (count >= 2) {
    count--;
    x.innerHTML = count;
  }
}
