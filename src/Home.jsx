import { useEffect } from "react";
import Carousel from "./carousel.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import BGGG from "./assets/picture/bggg.jpg"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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


    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    faculty: "",
    year: "",
    dorm: "หอ 7",
    rent: 4500,
    water: 120,
    electricity: 200,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    // ส่งข้อมูลไปยังหน้าถัดไป (อาจใช้ context หรือ localStorage)
    localStorage.setItem("paymentInfo", JSON.stringify(formData));
    navigate("/payment"); // ไปยังหน้าที่สอง
  };


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const textBlockCleanDesign = (
    <div className="text-gray-800 space-y-4" data-aos="fade-right">
      <h2 className="text-2xl font-bold">ห้องน้ำรวม</h2>
      <p className="text-sm leading-relaxed">
        ห้องน้ำรวมที่นี่ออกแบบอย่างเรียบง่ายแต่ดูดี พื้นกระเบื้องสีฟ้าอ่อนช่วยให้รู้สึกสะอาดตา
        พร้อมเคาน์เตอร์ล้างหน้ากว้างและกระจกบานใหญ่ที่สะท้อนความใส่ใจในรายละเอียด
        ทุกพื้นที่ถูกจัดวางอย่างลงตัวเพื่อให้ใช้งานได้สะดวกและปลอดภัย
      </p>
    </div>
  );
  const textBlockPrivacySafety = (
    <div className="text-gray-800 space-y-4" data-aos="fade-left">
      <h2 className="text-2xl font-bold">ห้องพักรวม</h2>
      <p className="text-sm leading-relaxed">
        ที่นี่ไม่ใช่แค่ “ห้องพัก” แต่คือพื้นที่ที่คุณจะได้เติบโต มีแรงบันดาลใจ และใช้ชีวิตในแบบที่คุณเลือก
        หอพักสุรนารีพร้อมต้อนรับคุณเข้าสู่ชีวิตนักศึกษาที่ทั้งสงบ ปลอดภัย และเต็มไปด้วยโอกาสดีๆ
      </p>
    </div>
  );
  const textBlockConvenience = (
    <div className="text-gray-800 space-y-4" data-aos="fade-up">
      <h2 className="text-2xl font-bold">“ฝากไว้ได้...มั่นใจทุกกล่อง” — ระบบฝากพัสดุในหอพักสุรนารี </h2>
      <p className="text-sm leading-relaxed">
        เพราะชีวิตนักศึกษาไม่ได้มีแค่เรียนหนังสือ แต่ยังมีของที่ต้องรับ ของที่ต้องส่ง และความสะดวกที่ต้องมี หอพักสุรนารีจึงออกแบบพื้นที่รับฝากพัสดุให้ใช้งานง่าย ปลอดภัย และเป็นระบบ
      </p>
    </div>
  );

  const imageBlock = (src, alt, label, animation = "fade-up") => (
    <div className="relative group overflow-hidden rounded-lg shadow-lg" data-aos={animation}>
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-90"
      />
      <div className="absolute bottom-4 left-4 bg-white/80 px-4 py-2 rounded text-sm font-semibold transition duration-300 group-hover:bg-white">
        {label}
      </div>
    </div>
  );


  return (
    <div
      className="mt-24 px-2 h-470 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BGGG})` }}
    >
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="mb-20 relative z-10" // เพิ่ม margin-bottom
      >
        <Carousel />
      </div>

    
      <div className="grid grid-cols-1 px-20 md:grid-cols-3 gap-6 items-center mt-36">
        {textBlockCleanDesign}
        {imageBlock(Dome1, "Kids Stay Free", "ห้องน้ำรวม", "fade-up")}
        {imageBlock(Dome2, "Exclusive Benefits", "จุดพักใจ", "fade-up")}
      </div>

      {/* Section 2 */}
      <div className="grid grid-cols-1 px-20 md:grid-cols-3 gap-6 items-center mt-20">
        {imageBlock(Dome3, "Spa Cenvaree", "มุมพักใจ", "fade-right")}
        {imageBlock(Dome4, "Beachfront Haven", "ห้องพักรวม", "fade-left")}
        {textBlockPrivacySafety}
      </div>

      {/* Section 3 */}
      <div className="grid grid-cols-1 px-20 md:grid-cols-3 gap-6 items-center mt-20">
        {textBlockConvenience}
        {imageBlock(Dome5, "Fine Dining", "สิ่งอำนวยความสะดวก", "zoom-in")}
        {imageBlock(Dome6, "Luxury Stay", "จุดฝากของ", "zoom-in")}
      </div>

    </div>
  );
}
