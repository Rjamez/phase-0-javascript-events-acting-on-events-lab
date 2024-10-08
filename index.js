// Your code here

const dodger = document.getElementById("dodger");

// moves the dodger left
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

 function moveDodgerLeft() {
      dodger.style.left = `${left - 1}px`;
    }
  }
//moves the dodger right
  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
  }
 
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }else 
    if (e.key === "ArrowRight"){
        moveDodgerRight();
    }
  });

