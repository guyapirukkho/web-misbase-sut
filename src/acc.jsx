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
import Bgblack from "./assets/picture/bg_black.png"
export default function ACC() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        faculty: "",
        year: "",
        dorm: "หอ 7",
        rent: 3000,
        water: 50,
        electricity: 640,
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleNext = () => {
        localStorage.setItem("paymentInfo", JSON.stringify(formData));
        navigate("/payment");
    };
      useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
          easing: "ease-in-out",
        });
      }, []);
    return (
        <div
            className="relative min-h-screen p-8 scale-100 text-slate-800 bg-cover bg-center"
            style={{
                backgroundImage: `url(${Bgblack})`,
            }}
        >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div data-aos="fade-down" className="relative mt-30 z-10">
                <div className="bg-white max-w-3xl mx-auto p-6 rounded-lg shadow">
                    <main className="space-y-6">
                        <h1 className="text-2xl font-bold">ข้อมูลการชำระเงิน</h1>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-md font-extrabold">ชื่อ</label>
                                <h2>ธรรมชาติ ดี</h2>
                            </div>
                            <div>
                                <label className="block text-md font-extrabold">คณะ</label>
                                <h2>คณะเทคโนโลยีดิจิทัล</h2>
                            </div>
                            <div>
                                <label className="block text-md font-extrabold">ปีการศึกษา</label>
                                <h2>ปีที่ 1</h2>
                            </div>
                        </div>
                        <div className="mt-6 border-t pt-4 space-y-2">
                            <p>หอพัก: {formData.dorm}</p>
                            <p>ค่าหอพักเดือน 9/68: {formData.rent} บาท</p>
                            <p>ค่าน้ำ: {formData.water} บาท</p>
                            <p>ค่าไฟ: {formData.electricity} บาท</p>
                            <p className="font-semibold text-lg">
                                ยอดรวม: {formData.rent + formData.water + formData.electricity} บาท
                            </p>
                        </div>
                        <button
                            onClick={handleNext}
                            className="relative h-[38px] overflow-hidden
                       border rounded-lg w-full  border-orange-400
                        justify-self-center bg-white text-orange-400
                         shadow-2xl transition-all before:absolute before:left-0
                          before:top-0 before:h-full before:w-0 before:duration-100
                           after:absolute after:right-0 after:top-0 after:h-full 
                            after:w-0 after:duration-100 cursor-pointer hover:text-white hover:shadow-orange-400 
                            hover:before:w-2/4 hover:before:bg-orange-400 hover:after:w-3/4
                             hover:after:bg-orange-400">
                            <span className="relative z-10">
                                ดำเนินการต่อ</span>
                        </button>
                    </main>
                </div>
            </div>
        </div>
    );
}