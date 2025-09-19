import React, { useState, useMemo, useEffect } from "react";
import LL from "./assets/picture/LL.png";
import { useNavigate } from "react-router-dom";
import Bgblack from "./assets/picture/bg_black.png";
import AOS from "aos";
import "aos/dist/aos.css";
export default function UsageCheck() {
  const [prevReading, setPrevReading] = useState(12500);
  const [currReading, setCurrReading] = useState(12580);
  const [days, setDays] = useState(80);
  const [fireyer, setFireyer] = useState(30);
  const [rate, setRate] = useState(8.0);
  const [prevWater, setPrevWater] = useState(500);
  const [currWater, setCurrWater] = useState(510);
  const [valuewater, setValuewater] = useState(10);
  const [waterRate, setWaterRate] = useState(5.0);
  const usageElectric = useMemo(() => Math.max(0, currReading - prevReading), [prevReading, currReading]);
  const avgElectricPerDay = useMemo(() => (days > 0 ? usageElectric / days : 0), [usageElectric, days]);
  const totalElectricCost = useMemo(() => usageElectric * rate, [usageElectric, rate]);
  const usageWater = useMemo(() => Math.max(0, currWater - prevWater), [prevWater, currWater]);
  const avgWaterPerDay = useMemo(() => (days > 0 ? usageWater / days : 0), [usageWater, days]);
  const totalWaterCost = useMemo(() => usageWater * waterRate, [usageWater, waterRate]);
  const totalAll = totalElectricCost + totalWaterCost;
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div
      className="relative min-h-screen p-6 text-black bg-cover bg-center"
      style={{ backgroundImage: `url(${Bgblack})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div data-aos="fade-up" className="relative z-10 w-200 mx-auto bg-white border mt-20 border-gray-300 rounded-xl p-6 shadow">
        <div className="flex items-center gap-3 mb-4">
          <img src={LL} className="h-12" alt="Usage Icon" />
          <h1 className="text-xl font-bold">ตรวจสอบหน่วยไฟฟ้าและน้ำ</h1>
        </div>
        <div className="space-y-6">
          {/* ⚡ ไฟฟ้า */}
          <h2 className="font-semibold text-lg">⚡ ไฟฟ้า</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">เลขมิเตอร์ก่อนหน้า</label>
              <input
                type="number"
                value={prevReading}
                onChange={(e) => setPrevReading(Number(e.target.value))}
                className="w-full rounded border border-gray-300 px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">เลขมิเตอร์ปัจจุบัน</label>
              <input
                type="number"
                value={currReading}
                onChange={(e) => setCurrReading(Number(e.target.value))}
                className="w-full rounded border border-gray-300 px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">เดือนนี้ใช้ไฟฟ้าไป(หน่วย)</label>
              <input
                type="number"
                min={1}
                value={days}
                onChange={(e) => setFireyer(Number(e.target.value))}
                className="w-full rounded border border-gray-300 px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">ราคาไฟต่อหน่วย (บาท/kWh)</label>
              <input
                type="number"
                step="0.01"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full rounded border border-gray-300 px-3 py-2"
              />
            </div>
          </div>

          {/* 💧 น้ำประปา */}
          <h2 className="font-semibold text-lg mt-6">💧 น้ำประปา</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">เลขมิเตอร์ก่อนหน้า</label>
              <input
                type="number"
                value={prevWater}
                onChange={(e) => setPrevWater(Number(e.target.value))}
                className="w-full rounded border border-gray-300 px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">เลขมิเตอร์ปัจจุบัน</label>
              <input
                type="number"
                value={currWater}
                onChange={(e) => setCurrWater(Number(e.target.value))}
                className="w-full rounded border border-gray-300 px-3 py-2"
              />
            </div><div>
              <label className="block text-sm mb-1">เดือนนี้ใช้น้ำไป(หน่วย)</label>
              <input
                type="number"
                value={currWater}
                onChange={(e) => setValuewater(Number(e.target.value))}
                className="w-full rounded border border-gray-300 px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">ราคาน้ำต่อหน่วย (บาท)</label>
              <input
                type="number"
                step="0.01"
                value={waterRate}
                onChange={(e) => setWaterRate(Number(e.target.value))}
                className="w-full rounded border border-gray-300 px-3 py-2"
              />
            </div>
          </div>
          <div className="mt-6 p-4 bg-gray-100 rounded-lg space-y-2">
            <p className="font-semibold">ไฟฟ้า: {usageElectric} หน่วย — {totalElectricCost.toLocaleString("th-TH", { minimumFractionDigits: 2 })} บาท</p>
            <p className="text-sm text-gray-600">เฉลี่ย 2.67 หน่วย/วัน</p>
            <p className="font-semibold">น้ำ: {usageWater} หน่วย — {totalWaterCost.toLocaleString("th-TH", { minimumFractionDigits: 2 })} บาท</p>
            <p className="text-sm text-gray-600">เฉลี่ย 0.33 หน่วย/วัน</p>
            <hr />
            <p className="text-lg font-bold">รวมทั้งหมด: {totalAll.toLocaleString("th-TH", { minimumFractionDigits: 2 })} บาท</p>
          </div>
          <div className="justify-self-end">
            <button
              onClick={() => navigate("/acc")}
              type="button"
              className="relative h-[38px] overflow-hidden border rounded-lg w-30 border-orange-400 justify-self-center bg-white text-orange-400 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-100 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-100 hover:text-white hover:shadow-orange-400 hover:before:w-2/4 hover:before:bg-orange-400 hover:after:w-2/4 hover:after:bg-orange-400"
            >
              <span className="relative z-10">ชำระเงิน</span>
            </button>
          </div>
        </div>
      </div>
    </div >
  );
}