const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "ok";
  gif.src = "https://media1.tenor.com/m/BBp2XL-y8dIAAAAC/kuromi.gif";
  
  document.body.style.backgroundColor = "white"; // Change background color to white
    
  yesBtn.style.display = 'none';
  noBtn.style.display = 'none';
});

let firstClick = true; // To track if it's the first time the "No" button is clicked
let secondClick = false; // To track if it's the second time the "No" button is clicked

noBtn.addEventListener("click", () => {
  if (firstClick) {
    noBtn.textContent = "are you sure? :(";
    firstClick = false;
    secondClick = true;
  } else if (secondClick) {
    noBtn.textContent = "fine, catch me if you can then!";
    setTimeout(() => {
      noBtn.textContent = "no"; // Immediately reset the button text to "no" after showing the second message
      secondClick = false; // Prevent further changes to the text
    }, 500); // Change back to "no" after 0.5 seconds
  } else {
    moveButton(); // If neither firstClick nor secondClick, just move the button
  }
});

function moveButton() {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}