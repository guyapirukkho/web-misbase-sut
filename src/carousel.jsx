import { useState, useEffect } from "react";
import Hoo1 from "./assets/picture/Hoo1.jpg";
import Dome1 from "./assets/picture/Dome1.jpg";
import Dome2 from "./assets/picture/Dome2.jpg";
import Dome3 from "./assets/picture/Dome3.jpg";
import Dome4 from "./assets/picture/Dome4.jpg";
import Dome5 from "./assets/picture/Dome5.jpg";
import Dome6 from "./assets/picture/Dome6.jpg";
import Dome7 from "./assets/picture/Dome7.jpg";
import Dome8 from "./assets/picture/Dome8.jpg";

const images = [Dome1, Dome2, Dome3, Dome4, Dome5, Dome6, Dome7, Dome8];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
<div className="relative w-full max-w-480 h-160 mx-auto overflow-hidden">
  <div
    className="flex transition-transform duration-700 ease-in-out"
    style={{ transform: `translateX(-${current * 100}%)` }}
  >
    {images.map((img, index) => (
      <img key={index} src={img} alt={`Slide ${index}`} className="w-full flex-shrink-0" />
    ))}
  </div>

  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2  px-3 py-2 rounded-full ">
    {images.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrent(index)}
        className={`w-2 h-2 rounded-full pr-4 transition-all ${
          current === index ? "bg-gray-200 scale-125 cursor-pointer" : "bg-white"
        }`}
      />
    ))}
  </div>
</div>
  );
}