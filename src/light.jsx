import React, { useState, useMemo } from "react";
import LL from "./assets/picture/LL.png";
import { useNavigate } from "react-router-dom";

export default function UsageCheck() {
  // ไฟฟ้า
  const [prevReading, setPrevReading] = useState(12500);
  const [currReading, setCurrReading] = useState(12580);
  const [days, setDays] = useState(30);
  const [rate, setRate] = useState(8.0); // บาท/kWh

  // น้ำ
  const [prevWater, setPrevWater] = useState(500);
  const [currWater, setCurrWater] = useState(510);
  const [waterRate, setWaterRate] = useState(5.0); // บาท/หน่วยน้ำ

  // คำนวณไฟฟ้า
  const usageElectric = useMemo(() => Math.max(0, currReading - prevReading), [prevReading, currReading]);
  const avgElectricPerDay = useMemo(() => (days > 0 ? usageElectric / days : 0), [usageElectric, days]);
  const totalElectricCost = useMemo(() => usageElectric * rate, [usageElectric, rate]);

  // คำนวณน้ำ
  const usageWater = useMemo(() => Math.max(0, currWater - prevWater), [prevWater, currWater]);
  const avgWaterPerDay = useMemo(() => (days > 0 ? usageWater / days : 0), [usageWater, days]);
  const totalWaterCost = useMemo(() => usageWater * waterRate, [usageWater, waterRate]);

  // รวมทั้งหมด
  const totalAll = totalElectricCost + totalWaterCost;

  const navigate = useNavigate();

  return (
    <div className="min-h-screen  p-6 bg-gray-300 text-black">
      <div className="w-300 mx-auto bg-white border mt-25 border-gray-300 rounded-xl p-6 shadow">
        <div className="flex items-center gap-3 mb-4">
          <img src={LL} className="h-12" alt="Usage Icon" />
          <h1 className="text-xl font-bold">ตรวจสอบหน่วยไฟฟ้าและน้ำ</h1>
        </div>

        <div className="space-y-4">
          {/* ไฟฟ้า */}
          <h2 className="font-semibold text-lg">⚡ ไฟฟ้า</h2>
          <div>
            <label className="block text-sm mb-1">เลขมิเตอร์ก่อนหน้า</label>
            <input type="number" value={prevReading} onChange={(e) => setPrevReading(Number(e.target.value))} className="w-full rounded border border-gray-300 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm mb-1">เลขมิเตอร์ปัจจุบัน</label>
            <input type="number" value={currReading} onChange={(e) => setCurrReading(Number(e.target.value))} className="w-full rounded border border-gray-300 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm mb-1">จำนวนวันรอบบิล</label>
            <input type="number" min={1} value={days} onChange={(e) => setDays(Number(e.target.value))} className="w-full rounded border border-gray-300 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm mb-1">ราคาไฟต่อหน่วย (บาท/kWh)</label>
            <input type="number" step="0.01" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full rounded border border-gray-300 px-3 py-2" />
          </div>

          {/* น้ำ */}
          <h2 className="font-semibold text-lg mt-6">💧 น้ำประปา</h2>
          <div>
            <label className="block text-sm mb-1">เลขมิเตอร์ก่อนหน้า</label>
            <input type="number" value={prevWater} onChange={(e) => setPrevWater(Number(e.target.value))} className="w-full rounded border border-gray-300 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm mb-1">เลขมิเตอร์ปัจจุบัน</label>
            <input type="number" value={currWater} onChange={(e) => setCurrWater(Number(e.target.value))} className="w-full rounded border border-gray-300 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm mb-1">ราคาน้ำต่อหน่วย (บาท)</label>
            <input type="number" step="0.01" value={waterRate} onChange={(e) => setWaterRate(Number(e.target.value))} className="w-full rounded border border-gray-300 px-3 py-2" />
          </div>

          {/* สรุป */}
          <div className="mt-6 p-4 bg-gray-100 rounded-lg space-y-2">
            <p className="font-semibold">ไฟฟ้า: {usageElectric} หน่วย — {totalElectricCost.toLocaleString("th-TH", { minimumFractionDigits: 2 })} บาท</p>
            <p className="text-sm text-gray-600">เฉลี่ย {avgElectricPerDay.toFixed(2)} หน่วย/วัน</p>
            <p className="font-semibold">น้ำ: {usageWater} หน่วย — {totalWaterCost.toLocaleString("th-TH", { minimumFractionDigits: 2 })} บาท</p>
            <p className="text-sm text-gray-600">เฉลี่ย {avgWaterPerDay.toFixed(2)} หน่วย/วัน</p>
            <hr />
            <p className="text-lg font-bold">รวมทั้งหมด: {totalAll.toLocaleString("th-TH", { minimumFractionDigits: 2 })} บาท</p>
          </div>

          <div className="justify-self-end">
            <button onClick={() => navigate("/payment")} type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">
              ชำระเงิน
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
