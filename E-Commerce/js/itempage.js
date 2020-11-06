let products = [
  { name: "Cruise Dual Analog", price: 250.0, ratings: 4, id: 1 },
  { name: "Crown Summit Backpack", price: 250.0, ratings: 4, id: 2 },
  { name: "Joust Duffle Bag", price: 250.0, ratings: 4, id: 3 },
  { name: "Voyage Yoga Bag", price: 250.0, ratings: 4, id: 4 },
  { name: "Compete Track Tote", price: 250.0, ratings: 4, id: 5 },
  { name: "Sprite Yoga Companion Kit", price: 250.0, ratings: 4, id: 6 },

];
let slideProducts = []

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
    product.pricenew =product.price*quantity;
    console.log(product)

    let present = false
    let indexMain = 0

    cartitems.map((item1, index) => {
      // console.log()
      if (item1.id == item[0].id) {

        present = true
        indexMain = index
      }
      console.log(item1, present, item[0])
    }
    )
    if (present == true) {
      cartitems[indexMain].quantity += quantity
      cartitems[indexMain].pricenew += cartitems[indexMain].price*quantity
    } else {

      cartitems.push(product);

    }
    console.log(cartitems)
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
    let nameContainer = document.createElement("div")
    nameContainer.classList.add("cart__item__name")
    let name = document.createElement("div");
    name.classList.add("product__name");
    name.textContent = item.name;
    nameContainer.appendChild(name)
    let quantity = document.createElement("div")
    quantity.textContent = "quantity:" + item.quantity
    nameContainer.appendChild(quantity)
    let price = document.createElement("div");
    price.textContent = "$" + item.pricenew;
    price.classList.add("product__price");
    cartitem.appendChild(nameContainer);
    cartitem.appendChild(price);
    container.appendChild(cartitem);
  });
}
cartNumbers();
let descriptionTab = document.getElementById("feedback__description")
let reviewTab = document.getElementById("feedback__reviews")
let descriptionContainer = document.getElementById("description__container")
let formContainer = document.getElementById("form__container")
descriptionTab.onclick = function () {
  descriptionTab.classList.add("active")
  reviewTab.classList.remove("active")
  descriptionContainer.style.display = "block";
  formContainer.style.display = "none"
}

reviewTab.onclick = function () {
  reviewTab.classList.add("active")
  descriptionTab.classList.remove("active")
  descriptionContainer.style.display = "none";
  formContainer.style.display = "block"
}
let i = 0;
let j = 4;
let rightbtn = document.getElementById("right__arrow")
let leftbtn = document.getElementById("left__arrow")
rightbtn.onclick = function () {
  if (j == products.length - 1) {
    return
  }
  i++
  j++
  initialize(i, j);
}
leftbtn.onclick = function () {
  if (i == 0) {
    return 0
  }
  i--
  j--
  initialize(i, j);
}

function initialize(i, j) {
  let container = document.getElementById("best__seller__products");
  container.innerHTML = ""
  slideProducts = products.slice(i, j)
  slideProducts.map((item) => {
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
    image.classList.add("product__images");
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
    parent.onclick = function () { };
    parent.appendChild(ratingContainer);
    container.appendChild(parent);
  });

}
initialize(0, 4);
let product__images = [
  "images/pexels-karolina-grabowska-5632371.jpg",
  "images/pexels-mark-mccammon-1080696.jpg",
  "images/pexels-karolina-grabowska-5632371.jpg",
  "images/pexels-iain-2267909.jpg",
  "images/pexels-artem-beliaikin-2474729.jpg"
]
let p = 0
let q = 3
let imageContainer = document.getElementById("slide__img")
let leftBtn = document.getElementById("slider__left")
let rightBtn = document.getElementById("slider__right")
rightBtn.onclick = function () {
  if (q == product__images.length - 1) {
    return
  }
  p++
  q++
  slideImages(p, q);

}
leftBtn.onclick = function () {
  if (p == 0) {
    return
  }
  p--

  q--
  slideImages(p, q);

}
function slideImages(p, q) {
  let slice = product__images.slice(p, q)
  imageContainer.innerHTML = ""
  console.log(slice)
  slice.map(item => {

    let img = document.createElement("img")
    img.src = item
    img.classList.add("img__small")
    img.onclick = function () {
      let mainimage = document.getElementById("detail__image")
      mainimage.src = img.src
    }
    imageContainer.appendChild(img)

  })
  console.log(imageContainer)

}
slideImages(p, q);




