//adds current dateTime to header
const weekArr = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
  },
  monthArr = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };
var currentDate =
  weekArr[new Date().getDay()] +
  ", " +
  new Date().getDate() +
  " " +
  monthArr[new Date().getMonth() + 1] +
  " " +
  new Date().getFullYear();
const headerTime = document.querySelector(".header__time");
headerTime.textContent = currentDate;

//push out right order-block on the screen and add dishes to it
const orderSidenav = document.querySelector(".order");
const container = document.querySelector(".container");
const dishesItem = document.querySelectorAll(".dishes__item");
const orderBody = document.querySelector(".order__table tbody");
for (item of dishesItem) {
  item.onclick = function () {
    //add selected dish to order-block

    orderBody.innerHTML += `
                <tr class="order__table-item">
                  <td class="order__item-info">
                    <img src="assets/images/dish-1.jpg" alt="">
                    <div class="order__info-wrapper">
                      <div class="order__dish-title">Spicy seasoned seafood noodles</div>
                      <div class="order__dish-price">$ 2.29</div>
                    </div>
                  </td>
                  <td class="order__item-quantity">
                    <input type="text" value="1">
                  </td>
                  <td class="order__item-price">
                    $ 4,58
                  </td>
                </tr>
                <tr class="order__addition">
                  <td class="order__notice" colspan="2">
                    <input type="text" placeholder="Please, just a little bit spicy only.">
                  </td>
                  <td class="order__delete-btn">
                    <div class="order__delete-btn-inner">
                      <input onclick="removeItem(this)" class="order__delete-input" type="button">
                    </div>
                  </td>
                </tr>
                <!-- item-border -->
        `;

    //compress container and push out right order-block
    moveBlocks("normal");
  };
}
//set exit option for order-exit-button
const orderExitBtn = document.querySelector(".order__exit-btn");
orderExitBtn.onclick = function () {
  orderSidenav.style.animationDirection = "reverse";
  container.style.animationDirection = "reverse";
  setTimeout(function () {
    orderBody.innerHTML = "";
  }, 700);
};
function moveBlocks(direction) {
  if (direction === "normal") {
    container.style.animation =
      "container-compression 1s ease-in-out .2s 1 normal forwards";
    orderSidenav.style.animation =
      "order-slide .7s ease-in-out .2s 1 normal forwards";
  } else if (direction === "reverse") {
    container.style.animation =
      "container-compression-out 1s ease-in-out .2s 1 normal forwards";
    orderSidenav.style.animation =
      "order-slide-out .7s ease-in-out .2s 1 normal forwards";
  }
}
//set delete-option for order-item
function removeItem(input) {
  const items = [
    input.parentElement.parentElement.parentElement,
    input.parentElement.parentElement.parentElement.previousSibling
      .previousSibling,
  ];
  items[0].style.animation =
    "order-item-vanish .3s ease-in-out 0s 1 normal forwards";
  items[1].style.animation =
    "order-item-vanish .3s ease-in-out 0s 1 normal forwards";
  setTimeout(function () {
    if (orderBody.childElementCount == 2) {
      moveBlocks("reverse");
    } else {
      const otherItems = document.querySelectorAll("[itemnumber]");
      for (i = 3; i < otherItems.length; i++) {
        if (otherItems[i].hasAttribute("onclick")) continue;
      }
    }
    setTimeout(function () {
      items[0].remove();
      items[1].remove();
    }, 200);
  }, 300);
}
