import React, { Component } from "react";

export default class Typing extends Component {
  state = {
    active: false
  };

  componentDidMount() {
    //Typing
    const spnText = document.querySelector(".text");

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

    const cursorAnimation = () => {
      this.setState({
        active: !this.state.active
      });
    };
    setInterval(cursorAnimation, 400);
  }

  render() {
    return (
      <h2 className="sm-heading">
        <span className="text" />
        <span className="cursor">|</span>
      </h2>
    );
  }
}

// import React from "react";

// //Typing
// const spnText = document.querySelector(".text");
// const spnCursor = document.querySelector(".cursor");
// const txt = [
//   `Hi, I'm a web developer`,
//   `I create websites`,
//   `And mobile applications`
// ];
// console.log(spnCursor, spnText);
// let acttiveLetter = -10;
// let activeWord = 0;

// const addLetter = () => {
//   if (acttiveLetter >= 0) {
//     spnText.textContent += txt[activeWord][acttiveLetter];
//   }

//   acttiveLetter++;

//   if (acttiveLetter === txt[activeWord].length) {
//     activeWord++;
//     if (activeWord === txt.length) {
//       activeWord = 0;
//     }

//     return setTimeout(() => {
//       acttiveLetter = 0;
//       spnText.textContent = "";
//       addLetter();
//     }, 2000);
//   }

//   setTimeout(addLetter, 100);
// };

// addLetter();

// const cursorAnimation = () => {
//   spnCursor.classList.toggle("active");
// };
// setInterval(cursorAnimation, 400);

// function Typing() {
//   return (
//     <h2 className="sm-heading">
//       <span className="text">{}</span>
//       <span className="cursor">|</span>
//     </h2>
//   );
// }

// export default Typing;
