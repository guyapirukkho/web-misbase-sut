import 'primeicons/primeicons.css';
import { useState } from 'react';
import Userprofile from "./assets/picture/user.png";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuToggle = () => setMenuOpen(!menuOpen);

    return (
        <nav className="bg-white shadow-md h-20 relative fixed top-0 left-0 w-full z-50">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">

                <div className="text-3xl font-bold text-black-600 cursor-pointer tracking-wide transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                    SUT DOME
                </div>
                <div className="bg-white">
                    <ul className="flex justify-center items-center gap-15 text-gray-700 font-medium ">
                        {["หน้าหลัก", "รายชื่อผู้พัก", "หอพัก", "แจ้งซ่อม", "เลือกตั้ง", "ฟอร์มเอกสาร"].map((item, idx) => (
                            <li key={idx}>
                                <a
                                    href="#"
                                    className="hover:text-red-600 hover:border-b-2 border-red-600 pb-1 transition-all"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex items-center gap-6">
                    <span className="pi pi-search text-xl cursor-pointer hover:text-red-600"></span>

                    {/* Profile */}
                    <div className="relative">
                        <div
                            className="w-8 h-8 rounded-full overflow-hidden cursor-pointer border-2 border-gray-300"
                            onClick={menuToggle}
                        >
                            <img
                                src={Userprofile}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {menuOpen && (
                            <div className="absolute right-0 mt-2 w-56 bg-white border-gray-200 border-1 shadow-lg rounded-md overflow-hidden z-50">
                                <div className="p-4 border-b">
                                    <h3 className="text-lg font-semibold">Vamos</h3>
                                    <span className="text-sm text-gray-500">XXXXX</span>
                                </div>
                                <ul className="p-2">
                                    {[
                                        { icon: "./assets/icons/user.png", label: "ข้อมูลของฉัน" },
                                        { icon: "./assets/icons/edit.png", label: "เปลีย่นแปลงข้อมูล" },
                                        { icon: "./assets/icons/envelope.png", label: "ติดต่อ" },
                                        { icon: "./assets/icons/settings.png", label: "ตั้งค่า" },
                                        { icon: "./assets/icons/question.png", label: "ช่วยเหลือ" },
                                        { icon: "./assets/icons/log-out.png", label: "ออกจากระบบ" },
                                    ].map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded cursor-pointer"
                                        >
                                            <img src={item.icon} alt="" className="w-4 h-4" />
                                            <a href="#">{item.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}