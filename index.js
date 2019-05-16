const dodger = document.getElementById("dodger");

document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
})

function moveDodgerLeft() {
  let leftEdge = parseInt(dodger.style.left.replace("px", ""), 10);
  if (leftEdge > 0) {
    dodger.style.left = `${leftEdge-1}px`;
  }
}

function moveDodgerRight() {
  let leftEdge = parseInt(dodger.style.left.replace("px", ""), 10);
  if (leftEdge < 360) {
    dodger.style.left = `${leftEdge+1}px`;
  }
}
