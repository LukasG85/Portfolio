//Typing
const spnText = document.querySelector(".text");
const spnCursor = document.querySelector(".cursor");
const txt = [
  `Hi, I'm a web developer`,
  `I create websites`,
  `And mobile applications`
];

let acttiveLetter = -10;
let activeWord = 0;

const addLetter = () => {
  if (acttiveLetter >= 0) {
    spnText.textContent += txt[activeWord][acttiveLetter];
  }

  acttiveLetter++;

  if (acttiveLetter === txt[activeWord].length) {
    activeWord++;
    if (activeWord === txt.length) {
      activeWord = 0;
    }

    return setTimeout(() => {
      acttiveLetter = 0;
      spnText.textContent = "";
      addLetter();
    }, 2000);
  }

  setTimeout(addLetter, 100);
};

addLetter();

// const cursorAnimation = () => {
//   spnCursor.classList.toggle("active");
// };
// setInterval(cursorAnimation, 400);
