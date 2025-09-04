import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CheckpriceTable() {
  const [searchRoom, setSearchRoom] = useState("");
  const navigate = useNavigate();

  const data = [
    { room: "101", meterPrev: 1000, meterNow: 1010, waterPrev: 500, waterNow: 510, rent: 3000 },
    { room: "102", meterPrev: 2000, meterNow: 2015, waterPrev: 600, waterNow: 605, rent: 3200 },
    { room: "103", meterPrev: 1500, meterNow: 1510, waterPrev: 550, waterNow: 560, rent: 3100 },
    { room: "104", meterPrev: 1800, meterNow: 1815, waterPrev: 580, waterNow: 590, rent: 3300 },
  ];

  const calcTotal = (item) => {
    const electricUnits = item.meterNow - item.meterPrev;
    const waterUnits = item.waterNow - item.waterPrev;
    const electricPrice = electricUnits * 12;
    const waterPrice = waterUnits * 5;
    return item.rent + electricPrice + waterPrice;
  };

  // กรองข้อมูลตามเลขห้อง
  const filteredData = data.filter((item) =>
    item.room.toLowerCase().includes(searchRoom.toLowerCase())
  );

  return (
    <div
      className="p-6 mt-35"
      data-aos="fade-left"
      data-aos-anchor-placement="center-bottom"
    >
      <h2 className="text-xl font-bold mb-4">ตารางการเงินและบิล</h2>

      {/* ช่องค้นหา */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="ค้นหาเลขห้อง..."
          value={searchRoom}
          onChange={(e) => setSearchRoom(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-200 px-4 py-2">เลขห้อง</th>
              <th className="border border-gray-200 px-4 py-2">มิเตอร์ไฟ เดือนที่แล้ว</th>
              <th className="border border-gray-200 px-4 py-2">มิเตอร์ไฟ เดือนนี้</th>
              <th className="border border-gray-200 px-4 py-2">มิเตอร์น้ำ เดือนที่แล้ว</th>
              <th className="border border-gray-200 px-4 py-2">มิเตอร์น้ำ เดือนนี้</th>
              <th className="border border-gray-200 px-4 py-2">ค่าเช่า (บาท)</th>
              <th className="border border-gray-200 px-4 py-2">รวม (บาท)</th>
              <th className="border border-gray-200 px-4 py-2 text-center">รายละเอียดข้อมูล</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">{item.room}</td>
                  <td className="border border-gray-200 px-4 py-2">{item.meterPrev}</td>
                  <td className="border border-gray-200 px-4 py-2">{item.meterNow}</td>
                  <td className="border border-gray-200 px-4 py-2">{item.waterPrev}</td>
                  <td className="border border-gray-200 px-4 py-2">{item.waterNow}</td>
                  <td className="border border-gray-200 px-4 py-2">{item.rent}</td>
                  <td className="border border-gray-200 px-4 py-2">{calcTotal(item)}</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">
                    <button
                      onClick={() => navigate("/light")}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 cursor-pointer"
                    >
                      ดูรายละเอียด
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-4 text-gray-500">
                  ไม่พบข้อมูล
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
