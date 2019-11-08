import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";
import SplitText from "react-pose-text";
import HeadingText from "./headingText";
import Brackets from "./Brackets";

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 20
  }
};

const About = () => {
  let textTitle = useRef(null);

  useEffect(() => {
    TweenMax.to(textTitle, 2, {
      opacity: 1,
      x: 0,
      ease: Power3.easeOut,
      delay: 0.4
    });
  }, []);

  return (
    <main className="about">
      <HeadingText title="About" subtitle="me" />
      <div className="about-info">
        <div className="bio-image">
          <Brackets />
        </div>

        <div className="bio">
          <h3 ref={el => (textTitle = el)} className="text-secondary">
            Hello
          </h3>
          <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
            My name is Łukasz Gancarz. I&nbsp;come from a&nbsp;small town near
            Tarnów. In&nbsp;every free moment I&nbsp;devote myself entirely to
            my passion which is creating websites and mobile applications.
            I&nbsp;was interested in computers from an early age. I&nbsp;got
            infected with programming in 2014. Since then, I&nbsp;devote every
            free moment to learning and implementing various projects in which
            I&nbsp;use Html, CSS&nbsp;(Sass), JavaScript, jQuery, WordPress,
            Bootstrap, React.js, Gatsby.js.
          </SplitText>
        </div>
      </div>
    </main>
  );
};

export default About;
