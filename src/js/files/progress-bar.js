let currentWidth;
let speed = 0;
let maxWidth;
let progress = document.getElementsByClassName("skill__bar");
for (const element of progress) {
  element.style.display = "none";
}

async function loadBars(array) {
  for (const item of array) {
    await drawBar(item);
  }
}

loadBars(progress);

async function drawBar(currentBar) {
  currentBar.style.display = "block";
  currentWidth = 0;
  maxWidth = parseInt(currentBar.style.width);
  let interval = setInterval(function () {
    currentBar.style.width = currentWidth + "%";
    let sign = Math.random() > 0.5 ? 1 : -1;
    if (speed > 0) speed += sign * Math.random() * 0.4;
    if (speed <= 0) speed = 0.4;
    if (currentWidth >= maxWidth) {
      speed = 0;
    } else {
      currentWidth += speed;
    }
  }, 10);
  await new Promise((resolve) => setTimeout(resolve, 0));
  clearInterval(interval);
}
