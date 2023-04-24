let carousel = document.querySelector(
  ".gallery-carousel-15 .gallery-carousel_content-15"
);
let counter = document.querySelector(
  ".gallery-carousel-15 .gallery-carousel_counter-15"
);
const elements = document.querySelectorAll(
  ".gallery-carousel-15 .gallery-carousel_element-15"
);
let target = document.querySelector(
  ".gallery-carousel-15 .gallery-carousel_content-15 .target"
);

const btnRight = document.getElementById(
  "gallery-carousel_element_btnRight-15"
);
const btnLeft = document.getElementById("gallery-carousel_element_btnLeft-15");

let maxWidth = 0;
let position = 0;
let last = 0;
let listPosition = 0;
widths = null;

counter.innerHTML = "1/" + elements.length;

btnRight.addEventListener("click", function () {
  if (widths == null) {
    widths = [];
    elements.forEach((element) => {
      widths.push(element.clientWidth);
    });
  }
  console.log(widths);
  console.log(target.clientWidth);
  console.log(carousel);
  actualWidth = target.clientWidth;

  if (listPosition + 1 < elements.length) {
    position = position - widths[listPosition];
    carousel.style.left = position + "px";
    listPosition++;
    target = elements[listPosition];
  } else {
    position = 0;
    carousel.style.left = position + "px";
    listPosition = 0;
    target = elements[listPosition];
  }
  changeCounter(listPosition + 1, widths.length);
});

btnLeft.addEventListener("click", function () {
  if (widths == null) {
    widths = [];
    elements.forEach((element) => {
      widths.push(element.clientWidth);
    });
  }
  console.log(target.clientWidth);
  console.log(carousel);

  if (listPosition - 1 >= 0) {
    console.log(position);
    console.log(widths[listPosition - 1]);
    console.log(listPosition);
    console.log(target);

    position = position + widths[listPosition - 1];
    carousel.style.left = position + "px";
    listPosition--;
    target = elements[listPosition];
    console.log(target);
  } else {
    if (maxWidth == 0) {
      elements.forEach((element) => {
        maxWidth = maxWidth + element.clientWidth;
      });
    }
    position = -(maxWidth - elements[widths.length - 1].clientWidth);
    carousel.style.left = position + "px";
    listPosition = widths.length - 1;
    target = elements[listPosition];
  }
  changeCounter(listPosition + 1, widths.length);
});

function changeCounter(position, max) {
  counter.innerHTML = position + "/" + max;
}
