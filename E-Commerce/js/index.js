let carticon = document.getElementById("shopping__cart");
carticon.onclick = function () {
  let dropdown = document.getElementById("hover__dropdown");
  dropdown.style.display = "block";
  fillcartitem();
};

window.onclick = function (e) {
  console.log(e.target.id);
  if (e.target.id !== "shopping__cart" && e.target.id !== "hover__dropdown") {
    let dropdown = document.getElementById("hover__dropdown");
    dropdown.style.display = "none";
  }
};
let products = [
  { name: "Cruise Dual Analog", price: 250.0, ratings: 4, id: 1 ,pricenew: 250.0},
  { name: "Crown Summit Backpack", price: 250.0, ratings: 4, id: 2 ,pricenew: 250.0},
  { name: "Joust Duffle Bag", price: 250.0, ratings: 4, id: 3 ,pricenew: 250.0},
  { name: "Voyage Yoga Bag", price: 250.0, ratings: 4, id: 4 ,pricenew: 250.0},
  { name: "Compete Track Tote", price: 250.0, ratings: 4, id: 5 ,pricenew: 250.0},
  { name: "Sprite Yoga Companion Kit", price: 250.0, ratings: 4, id: 6,pricenew: 250.0 },
  { name: "Strive Shoulder Pack", price: 250.0, ratings: 4, id: 7 ,pricenew: 250.0},
  { name: "Impulse Duffle", price: 250.0, ratings: 4, id: 8 ,pricenew: 250.0},
  { name: "Fusion Backpack", price: 250.0, ratings: 4, id: 9,pricenew: 250.0 },
  { name: "Endeavor Daytrip", price: 250.0, ratings: 4, id: 10,pricenew: 250.0 },
];
localStorage.setItem("products", JSON.stringify(products));
let cartlist = [{ name: "Fusion Backpack", price: 250.0, ratings: 4, id: 9,pricenew: 250.0,quantity:1}];
localStorage.setItem("cart", JSON.stringify(cartlist));
function initialize() {
  let container = document.getElementById("products__list");
  products.map((item) => {
    let parent = document.createElement("div");
    parent.classList.add("product__menu");
    let imageparent = document.createElement("div");
    imageparent.classList.add("img__container");

    let hover = document.createElement("div");
    hover.classList.add("hoverbtn");
    let hover2 = document.createElement("div");
    hover2.classList.add("hoverbtn");
    let hover3 = document.createElement("div");
    hover3.classList.add("hoverbtn");
    let cartbtn = document.createElement("img");
    cartbtn.classList.add("social__icon");
    let heartbtn = document.createElement("img");
    heartbtn.classList.add("social__icon");
    heartbtn.src = "images/heart-solid.svg";
    hover2.appendChild(heartbtn);
    let returnbtn = document.createElement("img");
    returnbtn.classList.add("social__icon");
    returnbtn.src = "images/retweet-black.svg";
    hover3.appendChild(returnbtn);
    cartbtn.onclick = function () {
      console.log(item);
      window.location = "itempage.html" + "?id=" + item.id;
    };

    cartbtn.src = "images/shopping-cart-black.svg";
    hover.appendChild(cartbtn);
    hover.id = "hover-" + item.id;
    let image = document.createElement("img");
    image.src = "images/pexels-mark-mccammon-1080696.jpg";
    image.classList.add("product__img");
    imageparent.appendChild(image);
    let hoverparent = document.createElement("div");
    hoverparent.classList.add("hover__container");
    hoverparent.id = "hover-" + item.id;
    hoverparent.appendChild(hover);
    hoverparent.appendChild(hover2);
    hoverparent.appendChild(hover3);
    imageparent.appendChild(hoverparent);
    imageparent.onmouseover = function () {
      let btns = document.getElementById(`hover-${item.id}`);
      btns.style.display = "block";
    };

    imageparent.onmouseout = function () {
      let btns = document.getElementById(`hover-${item.id}`);
      btns.style.display = "none";
    };

    parent.appendChild(imageparent);

    console.log(parent);
    let name = document.createElement("div");
    name.classList.add("product--name");

    name.innerText = item.name;
    parent.appendChild(name);
    let price = document.createElement("div");
    price.classList.add("product--price");
    price.innerText = "$" + item.price;
    parent.appendChild(price);
    let ratingContainer = document.createElement("div");
    ratingContainer.classList.add("product--review");
    for (let i = 0; i < item.ratings; i++) {
      let star = document.createElement("img");
      star.src = "images/star-solid.svg";
      star.classList.add("product--rating");
      ratingContainer.appendChild(star);
    }
    console.log(item);
    parent.onclick = function () {};
    parent.appendChild(ratingContainer);
    container.appendChild(parent);
  });
}
initialize();
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
function cartNumbers() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  let number = cart.length;
  let cartNumber = document.getElementById("cart__number");
  cartNumber.textContent = number;
}

cartNumbers();

var images = document.getElementsByClassName("images__items");
console.log(images);
var container = document.getElementById("slider");
var images = [
  "images/pexels-mark-mccammon-1080696.jpg",
  "images/pexels-karolina-grabowska-5632371.jpg",
  "images/pexels-iain-2267909.jpg",
  "images/pexels-artem-beliaikin-2474729.jpg",
];
function slider(images, interval) {
  this.images = images;
  this.interval = interval;
  this.currentIndex = 0;
  this.position = 0;
  this.changeInterval = 50;
  this.Index = 1;
  this.changeImage = () => {
    setInterval(() => {
      container.style.backgroundImage = `url(${
        this.images[this.currentIndex]
      })`;
      this.currentIndex++;
      if (this.currentIndex >= this.images.length) {
        this.currentIndex = 0;
      }
    }, this.interval);
  };
}
var slider = new slider(images, 3500);
console.log(slider);
slider.changeImage();

