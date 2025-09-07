import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProfilePic from "./assets/picture/sssut.png"; // รูปโปรไฟล์
import { useNavigate } from "react-router-dom";
import Bgblack from "./assets/picture/bg_black.png";

export default function PersonalInfo() {
  const person = {
    firstName: "ธรรมชาติ",
    lastName: "ดี",
    faculty: "คณะเทคโนโลยีดิจิทัล",
    year: "ปีที่ 1",
    dorm: "หอ-7",
    phone: "080-123-4567",
    email: "natchawat@example.com",
    age: 20,
    meterElectricPrev: 1000,
    meterElectricNow: 1080,
    meterWaterPrev: 500,
    meterWaterNow: 510,
    rent: 3000
  };
  const navigate = useNavigate();

  const electricUnits = person.meterElectricNow - person.meterElectricPrev;
  const waterUnits = person.meterWaterNow - person.meterWaterPrev;
  const electricPrice = electricUnits * 8;
  const waterPrice = waterUnits * 5;
  const total = person.rent + electricPrice + waterPrice;

  return (
    <div
      className="relative min-h-screen p-8 scale-100 text-slate-800 bg-cover bg-center"
      style={{
        backgroundImage: `url(${Bgblack})`,
      }}
    >
      {/* ชั้นโปร่งใสทับพื้นหลัง */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* กล่องเนื้อหา */}
      <div className="relative z-10 w-300 mx-auto bg-white border mt-25 border-gray-300 rounded-xl p-6 shadow">
        {/* ส่วนโปรไฟล์ */}
        <div className="flex items-center gap-6 border-b pb-4 mb-4">
          <img
            src={ProfilePic}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border"
          />
          <div>
            <h2 className="text-2xl font-bold">
              {person.firstName} {person.lastName}
            </h2>
            <p className="text-gray-600">{person.faculty}</p>
            <p className="text-gray-600">{person.year}</p>
          </div>
        </div>

        {/* ข้อมูลส่วนตัว */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <span className="font-semibold">ชื่อหอพัก:</span> {person.dorm}
          </div>
          <div>
            <span className="font-semibold">เบอร์โทรศัพท์:</span> {person.phone}
          </div>
          <div>
            <span className="font-semibold">อีเมล:</span> {person.email}
          </div>
          <div>
            <span className="font-semibold">อายุ:</span> {person.age} ปี
          </div>
        </div>

        {/* ข้อมูลมิเตอร์ */}
        <h3 className="text-lg font-bold mb-2">ข้อมูลมิเตอร์</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="p-3 border border-gray-300 rounded">
            <p className="font-semibold">มิเตอร์ไฟฟ้า</p>
            <p>เดือนที่แล้ว: {person.meterElectricPrev}</p>
            <p>เดือนนี้: {person.meterElectricNow}</p>
            <p>ใช้ไป: {electricUnits} หน่วย</p>
            <p>ค่าไฟ: {electricPrice} บาท</p>
          </div>
          <div className="p-3 border border-gray-300 rounded">
            <p className="font-semibold">มิเตอร์น้ำ</p>
            <p>เดือนที่แล้ว: {person.meterWaterPrev}</p>
            <p>เดือนนี้: {person.meterWaterNow}</p>
            <p>ใช้ไป: {waterUnits} หน่วย</p>
            <p>ค่าน้ำ: {waterPrice} บาท</p>
          </div>
        </div>

        {/* ค่าเช่าและรวม */}
        <div className="border-t pt-4">
          <p>ค่าเช่า: {person.rent} บาท</p>
          <p className="font-bold text-lg mt-2">
            ยอดรวมทั้งหมด: {total} บาท
          </p>
        </div>

        {/* ปุ่ม */}
        <div className="justify-self-end">
          <button
            onClick={() => navigate("/light")}
            className="relative mt-5 h-[38px] overflow-hidden border mr-5 rounded-lg w-40 border-orange-400 justify-self-center bg-white text-orange-400 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-100 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-100 hover:text-white hover:shadow-orange-400 hover:before:w-2/4 hover:before:bg-orange-400 hover:after:w-2/4 hover:after:bg-orange-400"
          >
            <span className="relative z-10">รายละเอียดเพิ่มเติม</span>
          </button>
          <button
            onClick={() => navigate("/acc")}
            className="relative mt-5 h-[38px] overflow-hidden border rounded-lg w-40 border-orange-400 justify-self-center bg-white text-orange-400 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-100 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-100 hover:text-white hover:shadow-orange-400 hover:before:w-2/4 hover:before:bg-orange-400 hover:after:w-2/4 hover:after:bg-orange-400"
          >
            <span className="relative z-10">ชำระเงิน</span>
          </button>
        </div>
      </div>
    </div>
  );
}
