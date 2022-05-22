import { useState, useEffect } from "react";
import gamingImages from "./exportGamingImages";

export default function GamingLogin() {
  const [current, setCurrent] = useState(6);

  useEffect(() => {
    setTimeout(() => {
      switch (current) {
        case gamingImages.length - 1:
          setCurrent(0);
          break;
        default:
          setCurrent(current + 1);
      }
    }, 5000);
  }, [current]);

  return (
    <div className="GamingHome">
        {/* <div className='GamingTitle'>
            <h1>I love Gaming and {words} Yall!!!</h1>
        </div> */}

      <div className="gamingContainer">
        <div className="slideShowContainer">
          <div className="slide">
            <img src={gamingImages[current]} alt="Gaming Slide Show" />
          </div>
        </div>
      </div>

      <div className="gamingReviews">
        <h1> Testing Space </h1>
      </div>
    </div>
  );
}
