import React, { Component } from "react";

let letters;
let cursorAnim;

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

      letters = setTimeout(addLetter, 100);
    };

    addLetter();

    const cursorAnimation = () => {
      this.setState({
        active: !this.state.active
      });
    };
    cursorAnim = setInterval(cursorAnimation, 400);
  }

  componentWillUnmount() {
    clearInterval(letters);
    clearInterval(cursorAnim);
  }

  render() {
    return (
      <h2 className="sm-heading">
        <span className="text" />
        <span className={this.state.active ? "cursor active" : "cursor"}>
          |
        </span>
      </h2>
    );
  }
}
