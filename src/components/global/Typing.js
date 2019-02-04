import React from "react";
import Typewriter from "typewriter-effect";

function Typing() {
  return (
    <>
      <Typewriter
        options={{
          strings: [
            `Hi, I'm a web developer`,
            `I create websites`,
            `And mobile applications`
          ],
          autoStart: true,
          loop: true
        }}
      />
    </>
  );
}

export default Typing;
