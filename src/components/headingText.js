import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";

const HeadingText = ({ title, subtitle }) => {
  let titleRef = useRef(null);
  let secondTitleRef = useRef(null);

  useEffect(() => {
    TweenMax.to(titleRef, 3, { opacity: 1, ease: Power3.easeOut });
    TweenMax.to(secondTitleRef, 2, {
      opacity: 1,
      x: 0,
      ease: Power3.easeOut,
      delay: 0.4
    });
  }, []);
  return (
    <h1 ref={el => (titleRef = el)} className="lg-heading">
      {title}{" "}
      <span ref={el => (secondTitleRef = el)} className="text-secondary">
        {subtitle}
      </span>
    </h1>
  );
};

export default HeadingText;
