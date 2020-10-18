var images = document.getElementsByClassName("images__items"); //storing in array
console.log(images);

function slider(images, interval) {
  this.images = images;
  this.interval = interval;
  this.currentIndex = 0;
  this.init = () => {
    this.images[this.currentIndex].style.display = "block";
  };
  this.changeImage = () => {
    setInterval(() => {
      if (this.currentIndex >= this.images.length) {
        this.currentIndex = 0;
      }
      this.images[this.currentIndex].classList.add("images__hidden");
      setTimeout(() => {
        this.images[this.currentIndex].style.display = "none";
        this.currentIndex++;
        if (this.currentIndex >= this.images.length) {
          this.currentIndex = 0;
        }
        this.images[this.currentIndex].classList.remove("images__hidden");
        this.images[this.currentIndex].style.display = "block";
      }, 350);
    }, this.interval);
  };
}
var slider = new slider(images, 2000);
console.log(slider);
slider.init();
slider.changeImage();
