let product = {};
let size = "";
let color = "";
let quantity = 1;
let cartflag = false;
let addbtn = document.getElementById("quantity__plus");
let subbtn = document.getElementById("quantity__minus");
addbtn.onclick = function () {
  let quantitydiv = document.getElementById("quantity__value");
  quantity++;
  quantitydiv.textContent = quantity;
};
subbtn.onclick = function () {
  let quantitydiv = document.getElementById("quantity__value");
  quantity--;
  quantitydiv.textContent = quantity;
};

let carticon = document.getElementById("shopping__cart");
carticon.onclick = function () {
  let dropdown = document.getElementById("hover__dropdown");
  dropdown.style.display = "block";
  cartflag = true;
  fillcartitem();
};

window.onclick = function (e) {
  console.log(e.target.id);
  if (e.target.id !== "shopping__cart" && e.target.id !== "hover__dropdown") {
    let dropdown = document.getElementById("hover__dropdown");
    dropdown.style.display = "none";
    cartflag = false;
  }
};

let url = window.location.search;
let result = url.split("=");
console.log(url, result[1]);

function productName(result) {
  let products = localStorage.getItem("products");
  products = JSON.parse(products);
  let item = products.filter((item) => item.id == result);
  console.log(item[0]);
  product = item[0];
  let name = document.getElementById("description__title");
  name.innerText = item[0].name;
  let price = document.getElementById("product--price");
  price.innerText = "$" + item[0].price;
  let cartbtn = document.getElementById("cart__btn");
  cartbtn.onclick = function () {
    let cartitems = JSON.parse(localStorage.getItem("cart"));
    product.quantity = quantity;
    cartitems.push(product);
    localStorage.setItem("cart", JSON.stringify(cartitems));
    cartNumbers();
  };
  let sizeSelect = document.getElementById("description__size");
  sizeSelect.onchange = function (e) {
    size = e.target.value;
    product.size = size;

    console.log(e.target.value);
  };
  let colorSelect = document.getElementById("description__color");
  colorSelect.onchange = function (e) {
    color = e.target.value;
    product.color = color;
    console.log(e.target.value);
  };
  let ratingContainer = document.getElementById("product--review");
  for (let i = 0; i < item[0].ratings; i++) {
    let star = document.createElement("img");
    star.src = "images/star-solid.svg";
    star.classList.add("product--rating");
    ratingContainer.appendChild(star);
  }
}
function cartNumbers() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  let number = cart.length;
  let cartNumber = document.getElementById("cart__number");
  cartNumber.textContent = number;
}
productName(result[1]);
function fillcartitem() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  console.log(cart);
  let container = document.getElementById("hover__dropdown");
  container.innerHTML = "";
  cart.map((item) => {
    let cartitem = document.createElement("div");
    cartitem.classList.add("cart__item");
    let name = document.createElement("div");
    name.classList.add("product__name");
    name.textContent = item.name;
    let price = document.createElement("div");
    price.textContent = "$" + item.price;
    price.classList.add("product__price");
    cartitem.appendChild(name);
    cartitem.appendChild(price);
    container.appendChild(cartitem);
  });
}
cartNumbers();
