import "./App.css";
import sample from "./sample.png";
import { useState, useEffect } from "react";
import { useElementSize } from "usehooks-ts";
import React from "react";

function App() {
  const [containerRef, { width, height }] = useElementSize();
  const [scaleValue, setScaleValue] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [fontScaleVal, setFontScaleVal] = useState(1);

  // Used useEffect to avoid infinite rendering because we are using useState for scaleValue
  useEffect(() => {
    if (window.innerWidth < width) {
      setRotate(90);
      if (window.innerWidth < height) {
        setScaleValue(window.innerWidth / height);
      }
    } else {
      setScaleValue(1);
      setFontScaleVal(1);
      setRotate(0);
    }
  });

  return (
    <div className="App">
      <div
        className="container"
        ref={containerRef}
        style={{ transform: `scale(${scaleValue}) rotate(${rotate}deg)` }}
      >
        <div className="element-container">
          <div className="yellow-container">
            <div className="purple-circle"></div>
            <div className="purple-circle"></div>
            <div className="purple-circle"></div>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          auctor bibendum risus, sit amet vestibulum odio feugiat vitae. Cras
          dignissim hendrerit velit, eget aliquet tortor auctor at. Cras non
          lectus tincidunt, mattis sem eget, rhoncus metus. Curabitur maximus
          lacus ut purus dapibus sodales. Vivamus purus ligula, placerat vel
          tempor ac, euismod ac felis. Etiam arcu magna, pellentesque sit amet
          sollicitudin quis, molestie sit amet lorem. Aliquam dignissim metus
          elementum, molestie lacus non, dictum arcu. Mauris tempus odio in
          malesuada venenatis. Proin pellentesque lacinia consectetur. Fusce
          ornare pellentesque magna ac luctus. Mauris quam lacus, condimentum at
          mattis at, scelerisque a nibh. Cras mollis ante ac nulla pulvinar, ut
          congue dui congue. Donec a ante vel leo imperdiet ornare ut at ipsum.
          Vestibulum quis eros id nunc egestas tristique eu eu odio. Phasellus
          non sapien massa.
        </p>
      </div>
    </div>
  );
}

export default App;
