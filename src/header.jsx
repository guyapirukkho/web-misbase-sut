import 'primeicons/primeicons.css';
import { useState } from 'react';
import Userprofile from "./assets/picture/user.png";
import Logo from "./assets/picture/ssut.png";

export default function Header({ onLogout }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuToggle = () => setMenuOpen(!menuOpen);

    const menuItems = [
        { icon: "pi pi-user", label: "ข้อมูลของฉัน" },
        { icon: "pi pi-pencil", label: "เปลี่ยนแปลงข้อมูล" },
        { icon: "pi pi-envelope", label: "ติดต่อ" },
        { icon: "pi pi-cog", label: "ตั้งค่า" },
        { icon: "pi pi-question-circle", label: "ช่วยเหลือ" },
        { icon: "pi pi-sign-out", label: "ออกจากระบบ", action: onLogout },
    ];


    return (
        <nav className="bg-white shadow-xl fixed top-0 left-0 w-full border-b border-gray-300 z-50">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between h-20 px-6 text-black">
                <img src={Logo} alt="Logo" className="w-40 cursor-pointer" />
                <ul className="flex gap-6 font-normal  text-gray-800">
                    {["หน้าหลัก", "รายชื่อผู้พัก", "หอพัก", "แจ้งซ่อม", "เลือกตั้ง", "ชำระเงิน"].map((item, idx) => (
                        <li key={idx}>
                            <a
                                href="#"
                                className="relative inline-block no-underline 
                  after:block after:content-[''] after:w-full after:border-b-2 after:border-red-600
                  after:scale-x-0 after:origin-left after:transition-transform after:duration-300
                  hover:text-gray-500 hover:after:scale-x-100"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* โปรไฟล์ */}
                <div className="relative">
                    <div
                        className="w-8 h-8 rounded-full overflow-hidden cursor-pointer border-2 border-gray-300"
                        onClick={menuToggle}
                    >
                        <img src={Userprofile} alt="Profile" className="w-full h-full object-cover" />
                    </div>

                    {menuOpen && (
                        <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 shadow-lg rounded-md z-50">
                            <div className="p-4 border-b">
                                <h3 className="text-lg font-not-italic font-semibold">Vamos</h3>
                                <span className="text-sm text-gray-500">XXXXX</span>
                            </div>
                            <ul className="p-2">
                                {menuItems.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded cursor-pointer"
                                        onClick={item.action ? item.action : undefined}
                                    >
                                        <i className={`${item.icon} text-gray-600`}></i>
                                        <span>{item.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
