import { useState, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

import img1 from "./assets/picture/Dome1.jpg";
import img2 from "./assets/picture/Dome2.jpg";
import img3 from "./assets/picture/Dome3.jpg";
import img4 from "./assets/picture/Dome4.jpg";
import img5 from "./assets/picture/Dome5.jpg";
import img6 from "./assets/picture/Dome6.jpg";
import img7 from "./assets/picture/Dome7.jpg";

const slides = [
  { country: "ส่วนกลางของหอพัก", title: "มุมพักใจ", desc: "มุมพักใจ คือพื้นที่เล็ก ๆ ที่ออกแบบมาเพื่อให้ผู้คนได้หยุดพักจากความวุ่นวาย ผ่อนคลายจิตใจ และเติมพลังให้ตัวเอง ไม่ว่าจะด้วยการนั่งเงียบ ๆ คุยกับเพื่อน หรือแค่ได้มองต้นไม้เขียว ๆ ก็ช่วยให้ใจสงบขึ้นได้ 🧡", image: img3 },
  { country: "ภายในหอพัก", title: "จุดพักใจ", desc: "จุดพักใจ คือพื้นที่เล็ก ๆ ที่เปิดโอกาสให้เราได้หยุดหายใจลึก ๆ ทบทวนตัวเอง และปล่อยให้ความเครียดค่อย ๆ ละลายไป เป็นเหมือน “ช่องว่าง” ระหว่างความเร่งรีบ ที่ช่วยเติมเต็มพลังใจให้กลับมาอีกครั้ง 🌿", image: img2 },
  { country: "ภายในห้องพัก", title: "เตียงนอน", desc: "นุ่มสบายเหมือนนอนอยู่บ้าน", image: img5 },
  { country: "ส่วนห้องน้ำรวม", title: "ห้องน้ำรวม", desc: "ห้องน้ำรวม คือพื้นที่สุขาที่ใช้ร่วมกันระหว่างหลายคน โดยมักมีโถสุขภัณฑ์แยกเป็นห้อง ๆ พร้อมประตูปิดเพื่อความเป็นส่วนตัว และมีอ่างล้างมือรวมอยู่ในพื้นที่เดียวกัน 🧼", image: img1 },
  { country: "บริการหอพัก", title: "ฝากสิ่งของ", desc: "จุดรับฝากของตู้ล็อกเกอร์ หรือเคาน์เตอร์ที่มีเจ้าหน้าที่ดูแล พื้นที่จัดเก็บชั่วคราวชั้นวางของหรือพื้นที่ที่นักเรียนสามารถวางของไว้ระหว่างทำกิจกรรม", image: img6 },
  { country: "บริเวณรอบแถวหอพัก", title: "ทุกพื้นที่ เราดูแลให้สะอาดและปลอดภัย เพื่อให้คุณรู้สึกเหมือนอยู่บ้าน”", desc: "สะอาดทุกมุม ปลอดภัยทุกก้าว เพราะคุณคือคนสำคัญ", image: img7 },
];

export default function FullOverlayCarousel() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const thumbsRef = useRef([]);

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      const newIndex = (current + 1) % slides.length;
      setCurrent(newIndex);
      scrollThumbIntoView(newIndex);
      setFade(true);
    }, 200);
  };

  const scrollThumbIntoView = (index) => {
    if (thumbsRef.current[index]) {
      thumbsRef.current[index].scrollIntoView({
        behavior: "smooth",
        inline: "nearest",
        block: "nearest",
      });
    }
  };

  const handleSelect = (index) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(index);
      scrollThumbIntoView(index);
      setFade(true);
    }, 200);
  };

  return (
    <div className="relative w-full mx-auto h-[42rem] rounded-xl overflow-hidden">
      <div
        className={`absolute inset-0 bg-center bg-cover transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: `url(${slides[current].image})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-between h-full p-8 text-white">
        <div>
          <p className="text-sm uppercase tracking-widest">{slides[current].country}</p>
          <h1 className="text-4xl font-bold">{slides[current].title}</h1>
          <p className="max-w-md mt-2">{slides[current].desc}</p>
          {/* <button className="mt-4 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition">
            DISCOVER NOW
          </button> */}
        </div>
      </div>

      {/* Thumbnail ลอย */}
      <div className="absolute bottom-8 left-8 right-8 z-20">
        <div className="flex gap-4 overflow-x-auto pb-2 custom-scroll">
          {slides.map((slide, index) => (
            <div
              key={index}
              ref={(el) => (thumbsRef.current[index] = el)}
              className={`min-w-[150px] h-24 rounded-lg mt-20 ml-2 overflow-hidden cursor-pointer transition-transform duration-300 ${
                index === current
                  ? "scale-105 ring-4 ring-white"
                  : "opacity-70 hover:opacity-100"
              }`}
              onClick={() => handleSelect(index)}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-4 flex items-center justify-between text-white">
          <div className="flex-1 h-1 bg-white/50 rounded-full overflow-hidden mr-4">
            <div
              className="h-full bg-white transition-all duration-500"
              style={{ width: `${((current + 1) / slides.length) * 100}%` }}
            ></div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-lg font-bold">{String(current + 1).padStart(2, "0")}</span>
            <button
              onClick={nextSlide}
              className="bg-white cursor-pointer text-black px-4 py-2 rounded-full flex items-center gap-2 hover:bg-gray-200"
            >
              ถัดไป <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
