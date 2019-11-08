import React, { useRef, useEffect } from "react";
import { TweenMax, TimelineMax, Power3 } from "gsap";
import Tilt from "react-tilt";

const Head = () => {
  let svgRef = useRef(null);
  let headRef = useRef(null);
  let lightRef = useRef(null);
  let radius1Ref = useRef(null);
  let radius2Ref = useRef(null);
  let radius3Ref = useRef(null);
  let radius4Ref = useRef(null);

  useEffect(() => {
    TweenMax.set(svgRef, {
      fill: "none",
      drawSVG: "0%"
    });
    const tl = new TimelineMax({ delay: 0.2 });
    tl.set(svgRef, { autoAlpha: 1 })
      .to(headRef, 0.8, {
        fill: "#ffffff",
        ease: Power3.easeOut
      })
      .to(lightRef, 0.5, {
        fill: "#eece1a",
        ease: Power3.easeOut
      })
      .to(radius1Ref, 0.2, {
        fill: "#eece1a",
        ease: Power3.easeOut
      })
      .to(radius2Ref, 0.2, {
        fill: "#eece1a",
        ease: Power3.easeOut
      })
      .to(radius3Ref, 0.2, {
        fill: "#eece1a",
        ease: Power3.easeOut
      })
      .to(radius4Ref, 0.2, {
        fill: "#eece1a",
        ease: Power3.easeOut
      });
  }, []);
  return (
    <Tilt className="Tilt" options={{ max: 35, scale: 1, reverse: true }}>
      <div className="Tilt-inner head">
        <svg
          ref={el => (svgRef = el)}
          version="1.1"
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 513.856 513.855"
        >
          <g>
            <g>
              <path
                className="face"
                ref={el => (headRef = el)}
                d="M302.37,0.179C179.871-4.066,51.109,67.132,62.235,204.885c0.292,9.6,11.341,52.496-31.806,87.397
			c-15.351,12.467-11.289,36.597,10.316,48.489c7.165,3.956,14.658,6.592,22.437,8.425c-1.602,8.627-0.81,17.356,3.344,25.562
			c-10.161,19.804,3.41,37.851,15.282,42.116c5.581,2.758,1.275,12.751,1.892,21.13c1.731,24.039,30.399,35.698,48.947,32.788
			c33.248-5.388,70.64-3.676,83.131,32.845c2.496,7.292,8.797,9.287,15.6,10.095c15.089,1.849,188.122-17.641,193.321-20.789
			c7.252-2.26,13.106-10.38,8.425-19.129c-39.974-74.524,40.034-153.645,55.405-225.233C514.452,130.782,413.994,0.179,302.37,0.179
			z M464.119,239.958c-16.696,76.596-89.957,150.648-60.956,230.85c-54.477,7.394-164.512,18.966-164.887,19.022
			c-19.609-43.646-65.242-51.48-110.393-44.646c-5.964,1.179-18.725-0.203-18.385-11.836c3.712-25.649-12.756-40.345-19.261-41.924
			c-2.445-0.798-1.424-2.001-1.462-1.966c12.263-13.781-6.198-26.339,3.168-44.097c5.708-10.826-1.627-18.027-13.688-19.692
			c-15.021-1.625-22.952-7.257-28.157-9.562c-2.521-1.199-3.499-3.393-1.181-5.967c47.73-43.331,39.608-104.688,39.562-105.249
			C77.694,71.416,214.071,18.633,303.685,26.422C409.712,35.974,482.039,139.996,464.119,239.958z"
              />
              <path
                className="path"
                id="light"
                ref={el => (lightRef = el)}
                d="M234.434,138.562c-34.777,20.962-42.051,63.048-27.68,98.871c3.433,8.559,8.95,16.021,13.182,24.163
			c12.34,23.755,4.062,21.643,4.172,30.682c0.119,10.593,2.775,29.889,3.895,35.089c0.899,5.667,5.053,10.734,12.469,10.734
			c85.45,0,86.872,5.286,91.518-4.854c2.742-4.626,1.762-7.83,1.762-36.054c0-13.508-13.868-1.711,11.648-36.424
			c6.5-8.839,12.939-17.367,17.164-27.574c8.993-21.751,7.51-46.492-4.215-66.976C333.564,122.833,274.298,114.545,234.434,138.562z
			 M307.564,312.96c-18.514-0.762-37.043-0.93-55.581-0.98c-0.391-2.859-0.719-5.718-1.003-8.582
			c18.92-0.355,37.754,0.549,56.583,2.442V312.96z M331.044,237.458c-7.57,7.914-18.945,20.035-25.526,41.962
			c-4.515-0.432-9.028-0.803-13.543-1.117c0.035-5.2-2.895-15.671,2.147-35.224c0.158-0.604,0.219-1.171,0.27-1.731l13.563-13.566
			c9.155-9.143-4.718-23.056-13.878-13.883l-6.668,6.66c-2.025-3.41-4.225-6.728-6.723-9.938
			c-6.236-8.018-23.539,1.442-13.884,13.888c3.326,4.271,5.799,9.313,8.211,14.203c-3.209,12.868-3.904,25.621-2.392,38.687
			c-6.87-0.192-13.749-0.3-20.634-0.173c-1.226-14.051-6.792-23.663-12.172-31.765c-3.255-5.294-37.534-56.939,11.641-86.582
			c27.487-16.562,60.175-7.066,81.71,13.733C359.014,207.256,335.275,232.768,331.044,237.458z"
              />
              <path
                className="path"
                id="radius"
                ref={el => (radius1Ref = el)}
                d="M175.639,185.518c-11.347-0.079-22.63-1.031-33.923-2.054c-11.893-1.082-11.789,17.44,0,18.509
			c11.293,1.026,22.576,1.978,33.923,2.057C187.572,204.105,187.567,185.594,175.639,185.518z"
              />
              <path
                className="path"
                id="radius"
                ref={el => (radius2Ref = el)}
                d="M228.863,109.912c-6.566-9.849-13.238-19.624-20.979-28.604c-7.805-9.06-20.83,4.09-13.088,13.088
			c6.708,7.782,12.395,16.316,18.085,24.854C219.474,129.124,235.51,119.862,228.863,109.912z"
              />
              <path
                className="path"
                id="radius"
                ref={el => (radius3Ref = el)}
                d="M346.076,114.106c4.891-7.825,9.79-15.645,14.391-23.643c5.962-10.367-10.028-19.68-15.975-9.344
			c-4.606,8.003-9.501,15.828-14.396,23.644C323.753,114.924,339.769,124.201,346.076,114.106z"
              />
              <path
                className="path"
                id="radius"
                ref={el => (radius4Ref = el)}
                d="M391.951,192.386c11.796-3.306,23.109-7.863,34.083-13.269c10.704-5.284,1.32-21.236-9.333-15.98
			c-9.572,4.717-19.394,8.523-29.666,11.402C375.558,177.753,380.444,195.61,391.951,192.386z"
              />
            </g>
          </g>
        </svg>
      </div>
    </Tilt>
  );
};

export default Head;
