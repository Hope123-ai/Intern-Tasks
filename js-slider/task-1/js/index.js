var images = document.getElementsByClassName("images__items");  
console.log(images);

function slider(images, interval) {
  this.images = images;
  this.interval = interval;
  this.currentIndex = 0;
  this.position = 0;
  this.changeInterval = 50;
  this.Index = 1;
  this.changeImage = () => {
    setInterval(() => {
      this.currentIndex++;
      for (let i = 0; i <= 10 * this.currentIndex; i++) {
        let rt = this;
        (function (ind) {
          setTimeout(function () {
            if (i === 0) {
              rt.images[rt.currentIndex].style.left = -(10 * 1) + '%';
            } else {
              rt.images[rt.currentIndex].style.left = -(10 * i) + '%';
            }
          }, 50 * (ind + 1));
        })(i);
      }
      if (this.currentIndex >= this.images.length) {
        this.currentIndex = 0;
        this.position = 0;
        for (let i = 0; i < this.images.length; i++) {
          this.images[i].style.left = 0;
        }
      }
    }, this.interval);
  };
}
var slider = new slider(images, 2000);
console.log(slider);
slider.changeImage();

