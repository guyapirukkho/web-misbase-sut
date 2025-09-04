import React, { useState, useMemo } from "react";
import LL from "./assets/picture/LL.png"
import { useNavigate } from "react-router-dom";

export default function ElectricityUsage() {
  const [prevReading, setPrevReading] = useState(12500);
  const [currReading, setCurrReading] = useState(12580);
  const [days, setDays] = useState(30);
  const [rate, setRate] = useState(8.0); // ราคาไฟต่อหน่วย (บาท/kWh)

  const usage = useMemo(() => {
    const u = Math.max(0, currReading - prevReading);
    return isFinite(u) ? u : 0;
  }, [prevReading, currReading]);

  const avgPerDay = useMemo(() => {
    return days > 0 ? usage / days : 0;
  }, [usage, days]);

  const totalCost = useMemo(() => {
    return usage * rate;
  }, [usage, rate]);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-30 bg-gray-300 text-black ">
      <div className="max-w-lg mx-auto bg-white border border-gray-300 rounded-xl p-6 shadow">
        <div className="flex items-center gap-3">
          <img src={LL} className="h-12" />
          <h1 className="text-xl font-bold">ตรวจสอบหน่วยไฟฟ้า</h1>
        </div>

        <div className="space-y-4">
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
            <label className="block text-sm mb-1">จำนวนวันรอบบิล</label>
            <input
              type="number"
              min={1}
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
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

          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <p className="text-lg font-semibold">
              ใช้ไฟแล้ว: {usage.toFixed(2)} kWh
            </p>
            <p className="text-sm text-gray-600">
              เฉลี่ย {avgPerDay.toFixed(2)} kWh/วัน
            </p>
            <p className="text-lg font-semibold mt-2">
              ค่าไฟ: {totalCost.toLocaleString("th-TH", { minimumFractionDigits: 2 })} บาท
            </p>
          </div>
          <div className="justify-self-end">
            <button
              onClick={() => navigate("/payment")}
              type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">ชำระเงิน</button>
          </div>
        </div>
      </div>
    </div>
  );
}