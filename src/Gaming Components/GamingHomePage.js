import { useState, useEffect } from "react";
import gamingImages from "./exportGamingImages";

export default function GamingHomePage() {
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
    </div>
  );
}
