let x = 0,
  y = 0,
  dirX = 1,
  dirY = 1;
const speed = 4;
const pallete = [
  "#ff8800",
  "#e124ff",
  "#6a19ff",
  "#ff2188",
  "#f97316",
  "#84cc16",
  "#06b6d4",
  "#f43f5e",
];
let dvd = document.getElementById("dvd");
dvd.style.backgroundColor = pallete[0];
let prevColorChoiceIndex = 0;
let background = document.getElementById("animation-background");
const dvdWidth = dvd.clientWidth;
const dvdHeight = dvd.clientHeight;

function getNewRandomColor() {
  const currentPallete = [...pallete];
  currentPallete.splice(prevColorChoiceIndex, 1);
  const colorChoiceIndex = Math.floor(Math.random() * currentPallete.length);
  prevColorChoiceIndex =
    colorChoiceIndex < prevColorChoiceIndex
      ? colorChoiceIndex
      : colorChoiceIndex + 1;
  const colorChoice = currentPallete[colorChoiceIndex];
  return colorChoice;
}
function animate() {
  const screenHeight = document.body.clientHeight;
  const screenWidth = document.body.clientWidth;

  if (y + dvdHeight >= screenHeight || y < 0) {
    dirY *= -1;
    dvd.style.backgroundColor = getNewRandomColor();
  }
  if (x + dvdWidth >= screenWidth || x < 0) {
    dirX *= -1;

    dvd.style.backgroundColor = getNewRandomColor();
  }
  x += dirX * speed;
  y += dirY * speed;
  dvd.style.left = x + "px";
  dvd.style.top = y + "px";
  window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);

// thanks to https://codepen.io/eighthday/pen/pjdZvX

let tl = new TimelineMax({repeat: -1,repeatDelay: 2});

tl.to('.glitch', 0.1, {skewX:70,ease: Power4.easeInOut})
.to('.glitch', 0.04, {skewX:0,ease: Power4.easeInOut})
.to('.glitch', 0.04, {opacity:0})
.to('.glitch', 0.04, {opacity:1})
.to('.glitch', 0.04, {x:-20})
.to('.glitch', 0.04, {x:0})
.add("split", 0)
.to('.top', 0.5, {x:-60,ease: Power4.easeInOut},'split')
.to('.bottom', 0.5, {x:60,ease: Power4.easeInOut},'split')
.to('.glitch', 0.08, { className: '+=redShadow'},'split')

.to('#txt', 0, { scale:1.1},'split')
.to('#txt', 0, { scale:1}, "+=0.02")

.to('.glitch', 0.08, { className: '-=redShadow'}, "+=0.09")
.to('.glitch', 0.03,{ className: '+=greenShadow'},'split')
.to('.glitch', 0.03,{ className: '-=greenShadow'},"+=0.01")

.to('.top', 0.2, {x:0,ease: Power4.easeInOut})
.to('.bottom', 0.2, {x:0,ease: Power4.easeInOut})

.to('.glitch', 0.02, {scaleY:1.1,ease: Power4.easeInOut})
.to('.glitch', 0.04, {scaleY:1,ease: Power4.easeInOut})

