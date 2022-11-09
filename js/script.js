const getId = (id) => document.getElementById(`${id}`);
const circles = document.querySelectorAll(".circle");
const progress = getId("progress");
const previous = getId("previous");
const next = getId("next");

let acc = 1;

const handleClickNext = () => {
  acc++;
  if (acc > circles.length) {
    acc = circles.length;
  }
  updateProgress();
};

const handleClickPrevious = () => {
  acc--;
  if (acc < 1) {
    acc = 1;
  }
  updateProgress();
};

const updateProgress = () => {
  circles.forEach((circle, index) => {
    if (index < acc) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (acc === 1) {
    previous.disabled = true;
  } else if (acc === 4) {
    next.disabled = true;
  } else {
    next.disabled = false;
    previous.disabled = false;
  }
};

next.addEventListener("click", handleClickNext);
previous.addEventListener("click", handleClickPrevious);
