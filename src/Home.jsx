import { useEffect } from "react";
import Carousel from "./carousel.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

// รูปภาพ
import Hoo1 from "./assets/picture/Hoo1.jpg";
import Dome1 from "./assets/picture/Dome1.jpg";
import Dome2 from "./assets/picture/Dome2.jpg";
import Dome3 from "./assets/picture/Dome3.jpg";
import Dome4 from "./assets/picture/Dome4.jpg";
import Dome5 from "./assets/picture/Dome5.jpg";
import Dome6 from "./assets/picture/Dome6.jpg";
import Dome7 from "./assets/picture/Dome7.jpg";
import Dome8 from "./assets/picture/Dome8.jpg";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const textBlock = (
    <div className="text-gray-800 space-y-4" data-aos="fade-right">
      <h2 className="text-2xl font-bold">Centara Signatures</h2>
      <p className="text-sm leading-relaxed">
        At Centara, signature moments start the love story early. Delight in Kids Stay & Eat Free,
        unique inclusive privileges at our beachfront havens, unwind with award-winning treatments at SPA Cenvaree,
        and embark on a journey along Thai’s finest extraordinary high-end dining and drinking experiences crafted to captivate every palate.
      </p>
    </div>
  );

  const imageBlock = (src, alt, label, animation = "fade-up") => (
    <div className="relative" data-aos={animation}>
      <img
        src={src}
        alt={alt}
        className="rounded-lg shadow-lg w-full h-auto object-cover"
      />
      <div className="absolute bottom-4 left-4 bg-white/80 px-4 py-2 rounded text-sm font-semibold">
        {label}
      </div>
    </div>
  );

  return (
    <div className="mt-24 px-10">
      <Carousel />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mt-20">
        {textBlock}
        {imageBlock(Dome1, "Kids Stay Free", "Kids Stay and Eat For Free", "fade-up")}
        {imageBlock(Dome2, "Exclusive Benefits", "Exclusive Member Benefits", "fade-up")}
      </div>

      {/* Section 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mt-20">
        {imageBlock(Dome3, "Spa Cenvaree", "Award-Winning Spa", "fade-right")}
        {imageBlock(Dome4, "Beachfront Haven", "Beachfront Paradise", "fade-left")}
        {textBlock}
      </div>

      {/* Section 3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mt-20">
        {textBlock}
        {imageBlock(Dome5, "Fine Dining", "High-End Dining", "zoom-in")}
        {imageBlock(Dome6, "Luxury Stay", "Exclusive Suites", "zoom-in")}
      </div>
      
    </div>
  );
}
