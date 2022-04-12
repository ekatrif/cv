let qualities = document.getElementsByClassName("quality__bar");
let emptyBox = `<li class="quality__item">&nbsp;</li>`;
let fullBox = `<li class="quality__item quality__item_full">&nbsp;</li>`;
for (let item of qualities) {
  let currentProgress = item.getAttribute("progress");

  for (let i = 1; i <= 5; i++) {
    if (i <= currentProgress) {
      item.insertAdjacentHTML("afterbegin", fullBox);
    } else {
      item.insertAdjacentHTML("beforeend", emptyBox);
    }
  }
}
