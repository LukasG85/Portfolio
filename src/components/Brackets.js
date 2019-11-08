import React, { useRef, useEffect } from "react";
import { TimelineMax, Power3 } from "gsap";
import Tilt from "react-tilt";

const Brackets = () => {
  let monitorRef = useRef(null);
  let monitor2Ref = useRef(null);
  let bracket1Ref = useRef(null);
  let bracket2Ref = useRef(null);
  let bracket3Ref = useRef(null);

  useEffect(() => {
    const tl = new TimelineMax({ delay: 0.2 });

    tl.to(monitorRef, 0.2, {
      fill: "#eece1a",
      ease: Power3.easeOut,
      delay: 4
    })
      .to(monitor2Ref, 0.2, {
        fill: "#ffffff",
        ease: Power3.easeOut
      })
      .to(bracket1Ref, 0.2, {
        fill: "#ffffff",
        ease: Power3.easeOut
      })
      .to(bracket2Ref, 0.2, {
        fill: "#ffffff",
        ease: Power3.easeOut
      })
      .to(bracket3Ref, 0.2, {
        fill: "#ffffff",
        ease: Power3.easeOut
      });
  }, []);

  return (
    <Tilt className="Tilt" options={{ max: 35, scale: 1, reverse: true }}>
      <svg
        version="1.1"
        className="Tilt-inner brackets"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <g>
          <g>
            <path
              ref={el => (monitorRef = el)}
              className="path"
              fill="transparent"
              stroke="#ffffff"
              strokeWidth="2"
              d="M512,44.408H0v329.143h184.017v-15.673H15.673V60.082h480.653v297.796H210.329l-26.248,57.469h-40.407v52.245h224.653
			v-52.245h-40.407l-19.089-41.796H512V44.408z M317.849,431.02h34.805v20.898H159.347V431.02h132.19v-15.673h-90.226l19.089-41.796
			h71.2L317.849,431.02z"
            />
          </g>
        </g>
        <g>
          <g>
            <polygon
              ref={el => (bracket1Ref = el)}
              className="path"
              fill="transparent"
              points="211.09,162.276 200.006,151.194 142.22,208.98 200.006,266.766 211.09,255.683 164.385,208.98 		"
            />
          </g>
        </g>
        <g>
          <g>
            <polygon
              ref={el => (bracket3Ref = el)}
              className="path"
              fill="transparent"
              points="311.994,151.194 300.91,162.276 347.615,208.98 300.91,255.683 311.994,266.766 369.78,208.98 		"
            />
          </g>
        </g>
        <g>
          <g>
            <rect
              ref={el => (bracket2Ref = el)}
              className="path"
              fill="transparent"
              x="198.377"
              y="201.134"
              transform="matrix(0.4226 -0.9063 0.9063 0.4226 -41.5664 352.6952)"
              width="115.292"
              height="15.672"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              ref={el => (monitor2Ref = el)}
              className="path"
              fill="transparent"
              d="M31.347,75.755v266.449h449.306V75.755H31.347z M464.98,326.531H47.02V91.429H464.98V326.531z"
            />
          </g>
        </g>
      </svg>
    </Tilt>
  );
};

export default Brackets;
