const plusButton = document.querySelectorAll(`.plus-btn`);
const counter = document.querySelectorAll(`.counter`);
const minusButton = document.querySelectorAll(`.minus-btn`);

const totalPrice = document.querySelector(".total-amount");

let itemTotal = 0;
function handlePlusButton(index) {
  itemTotal += 1;
  counter[index].innerText = Number(counter[index].innerText) + 1;
  calculateTotalPrice("increase", index);
}

plusButton.forEach((button, index) => {
  button.addEventListener(`click`, () => {
    handlePlusButton(index);
  });
});

// let itemTotal = -1;
function handleMinusButton(index) {
  if (itemTotal === 0) {
    return 0;
  }
  itemTotal = itemTotal - 1;
  counter[index].innerText = Number(counter[index].innerText) - 1;
  calculateTotalPrice("decrease", index);
}

minusButton.forEach((button, index) => {
  button.addEventListener(`click`, () => {
    handleMinusButton(index);
  });
});

const deleteButtons = document.querySelectorAll(".delete-btn");
const counts = document.querySelectorAll(".count");

deleteButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    counts[index].innerText = "0";
  });
});

const likeButtons = document.querySelectorAll(".like-btn");

function handleLikeButton() {
  if (this.style.color === "black") {
    this.style.color = "red";
  } else {
    this.style.color = "black";
  }
}

likeButtons.forEach((like) => {
  like.addEventListener("click", handleLikeButton);
});

function calculateTotalPrice(operation, index) {
  if (operation === "increase") {
    switch (index) {
      case 0:
        totalPrice.innerText = Number(totalPrice.innerText) + 100;
        break;
      case 1:
        totalPrice.innerText = Number(totalPrice.innerText) + 20;
        break;
      case 2:
        totalPrice.innerText = Number(totalPrice.innerText) + 50;
        break;
      default:
        break;
    }
  }

  if (operation === "decrease") {
    switch (index) {
      case 0:
        totalPrice.innerText = Number(totalPrice.innerText) - 100;
        break;
      case 1:
        totalPrice.innerText = Number(totalPrice.innerText) - 20;
        break;
      case 2:
        totalPrice.innerText = Number(totalPrice.innerText) - 50;
        break;
      default:
        break;
    }
  }
}
