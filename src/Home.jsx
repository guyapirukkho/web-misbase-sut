import Hoo1 from "./assets/picture/Hoo1.jpg";
import Dome1 from "./assets/picture/Dome1.jpg";
import Dome2 from "./assets/picture/Dome2.jpg";
import Dome3 from "./assets/picture/Dome3.jpg";
import Dome4 from "./assets/picture/Dome4.jpg";
import Dome5 from "./assets/picture/Dome5.jpg";
import Dome6 from "./assets/picture/Dome6.jpg";
import Dome7 from "./assets/picture/Dome7.jpg";
import Dome8 from "./assets/picture/Dome8.jpg";
import Carousel from "./carousel.jsx";

export default function Home() {
  return (
    <div className="mt-24 px-6">
      <Carousel />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mt-20">
        {/* Left Text Section */}
        <div className="text-gray-800 space-y-4">
          <h2 className="text-2xl font-bold">Centara Signatures</h2>
          <p className="text-sm leading-relaxed">
            At Centara, signature moments start the love story early. Delight in Kids Stay & Eat Free,
            unique inclusive privileges at our beachfront havens, unwind with award-winning treatments at SPA Cenvaree,
            and embark on a journey along Thai’s finest extraordinary high-end dining and drinking experiences crafted to captivate every palate.
          </p>
        </div>

        {/* Middle Image */}
        <div className="relative">
          <img src={Dome1} alt="Kids Stay Free" className="rounded-lg shadow-lg w-full h-auto object-cover" />
          <div className="absolute bottom-4 left-4 bg-white/80 px-4 py-2 rounded text-sm font-semibold">
            Kids Stay and Eat For Free
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img src={Dome2} alt="Exclusive Benefits" className="rounded-lg shadow-lg w-full h-auto object-cover" />
          <div className="absolute bottom-4 left-4 bg-white/80 px-4 py-2 rounded text-sm font-semibold">
            Exclusive Member Benefits
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mt-20">
        {/* Left Text Section */}


        {/* Middle Image */}
        <div className="relative">
          <img src={Dome1} alt="Kids Stay Free" className="rounded-lg shadow-lg w-full h-auto object-cover" />
          <div className="absolute bottom-4 left-4 bg-white/80 px-4 py-2 rounded text-sm font-semibold">
            Kids Stay and Eat For Free
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img src={Dome2} alt="Exclusive Benefits" className="rounded-lg shadow-lg w-full h-auto object-cover" />
          <div className="absolute bottom-4 left-4 bg-white/80 px-4 py-2 rounded text-sm font-semibold">
            Exclusive Member Benefits
          </div>
        </div>
        <div className="text-gray-800 space-y-4">
          <h2 className="text-2xl font-bold">Centara Signatures</h2>
          <p className="text-sm leading-relaxed">
            At Centara, signature moments start the love story early. Delight in Kids Stay & Eat Free,
            unique inclusive privileges at our beachfront havens, unwind with award-winning treatments at SPA Cenvaree,
            and embark on a journey along Thai’s finest extraordinary high-end dining and drinking experiences crafted to captivate every palate.
          </p>
        </div>
      </div> <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mt-20">
        {/* Left Text Section */}
        <div className="text-gray-800 space-y-4">
          <h2 className="text-2xl font-bold">Centara Signatures</h2>
          <p className="text-sm leading-relaxed">
            At Centara, signature moments start the love story early. Delight in Kids Stay & Eat Free,
            unique inclusive privileges at our beachfront havens, unwind with award-winning treatments at SPA Cenvaree,
            and embark on a journey along Thai’s finest extraordinary high-end dining and drinking experiences crafted to captivate every palate.
          </p>
        </div>

        {/* Middle Image */}
        <div className="relative">
          <img src={Dome1} alt="Kids Stay Free" className="rounded-lg shadow-lg w-full h-auto object-cover" />
          <div className="absolute bottom-4 left-4 bg-white/80 px-4 py-2 rounded text-sm font-semibold">
            Kids Stay and Eat For Free
          </div>
        </div>
         <div className="relative">
          <img src={Dome1} alt="Kids Stay Free" className="rounded-lg shadow-lg w-full h-auto object-cover" />
          <div className="absolute bottom-4 left-4 bg-white/80 px-4 py-2 rounded text-sm font-semibold">
            Kids Stay and Eat For Free
          </div>
        </div>
      </div>
    </div>
  );
}