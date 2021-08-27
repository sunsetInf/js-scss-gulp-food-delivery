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
                    <div class="order__item-quantity__inner">
                      <button></button>
                      <input type="number" value="1">
                      <button></button>
                    </div>
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
                      <input onclick="removeItem(w)" class="order__delete-input" type="button">
                    </div>
                  </td>
                </tr>
                <!-- item-border -->
        `;

    //compress container and push out right order-block
    moveBlocks("normal");
    //set the new price of order
    const subtotal = document.querySelector(".order__subtotal");
    var subtotalValue = parseFloat(
      subtotal.textContent.substring(1, subtotal.textContent.length)
    );

    //query to last order-item ti find his price
    var desiredItem = document.querySelectorAll(".order__table-item");
    desiredItem = desiredItem[desiredItem.length - 1];
    //query to price of the last order-item
    var desiredPrice = desiredItem.querySelector(".order__dish-price");

    desiredPrice = parseFloat(
      desiredPrice.textContent.substring(1, desiredPrice.textContent.length)
    );

    //add the found price to subtotal
    subtotalValue += desiredPrice;
    subtotal.textContent = "$" + subtotalValue.toFixed(2);

    //set the quantity-input settings
    const quantity = desiredItem.querySelector(".order__item-quantity input");
    quantity.textContent.onchange = function() { alert(true); }
  };
}
//set exit option for order-exit-button
const orderExitBtn = document.querySelector(".order__exit-btn");
orderExitBtn.onclick = function () {
  moveBlocks("reverse");
  setTimeout(function () {
    orderBody.innerHTML = "";
  }, 800);
};
function moveBlocks(direction) {
  if (direction === "normal") {
    container.style.animation =
      "container-compression 1s ease-in-out .2s 1 normal forwards";

    orderSidenav.style.right = "-408px";
    orderSidenav.style.animation =
      "order-slide .7s ease-in-out .2s 1 normal forwards";
  } else if (direction === "reverse") {
    orderSidenav.style.right = "0";
    orderSidenav.style.animation =
      "order-slide-out .7s ease-in-out 0s 1 normal forwards";

    container.style.animation =
      "container-compression-out .7s ease-in-out 0s 1 reverse forwards";
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
    }
    setTimeout(function () {
      items[0].remove();
      items[1].remove();
    }, 200);
  }, 300);
}
