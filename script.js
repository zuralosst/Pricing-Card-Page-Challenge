var ball_check = 0;

// prettier-ignore
document.querySelector(".change-plan").addEventListener("click", controlAnimation);

document.addEventListener("DOMContentLoaded", () => {
  const ball = document.querySelector(".ball");
  ball.style.position = "absolute";
});

function controlAnimation() {
  const ball = document.querySelector(".ball");
  if (ball_check === 0) {
    ball.style.animation = "button-slider-right 0.2s forwards";
    ball_check = 1;
    updateTextMonthToYear();
  } else if (ball_check === 1) {
    ball.style.animation = "button-slider-left 0.2s forwards";
    ball_check = 0;
    updateTextYearToMonth();
  }
}

function updateTextYearToMonth() {
  const prices = document.querySelectorAll(".price");
  prices[0].innerHTML = "$19";
  updateSelect();
}

function updateTextMonthToYear() {
  const prices = document.querySelectorAll(".price");
  prices[0].innerHTML = "$220";
  updateSelect();
}

function updateSelect() {
  const select_options = document.querySelector("#monthly");
  const prices = document.querySelectorAll(".price");
  var selected = select_options.options[select_options.selectedIndex].value;
  if ((selected === "1000") & (ball_check === 0)) {
    prices[1].innerHTML = '$59<span class="plan-type">/month</span>';
  } else if ((selected === "2000") & (ball_check === 0)) {
    prices[1].innerHTML = '$89<span class="plan-type">/month</span>';
  } else if ((selected === "2500") & (ball_check === 0)) {
    prices[1].innerHTML = '$99<span class="plan-type">/month</span>';
  } else if ((selected === "3000") & (ball_check === 0)) {
    prices[1].innerHTML = '$129<span class="plan-type">/month</span>';
  } else if ((selected === "1000") & (ball_check === 1)) {
    prices[1].innerHTML = '$699<span class="plan-type">/month</span>';
  } else if ((selected === "2000") & (ball_check === 1)) {
    prices[1].innerHTML = '$1059<span class="plan-type">/month</span>';
  } else if ((selected === "2500") & (ball_check === 1)) {
    prices[1].innerHTML = '$1179<span class="plan-type">/month</span>';
  } else if ((selected === "3000") & (ball_check === 1)) {
    prices[1].innerHTML = '$1539<span class="plan-type">/month</span>';
  }
}
