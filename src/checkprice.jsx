import React from "react";
import { useNavigate } from "react-router-dom";

export default function CheckpriceTable() {
  const data = [
    {
      room: "101",
      meterPrev: 1000,
      meterNow: 1010,
      waterPrev: 500,
      waterNow: 510,
      rent: 3000,
    },
    {
      room: "102",
      meterPrev: 2000,
      meterNow: 2015,
      waterPrev: 600,
      waterNow: 605,
      rent: 3200,
    },
    {
      room: "102",
      meterPrev: 2000,
      meterNow: 2015,
      waterPrev: 600,
      waterNow: 605,
      rent: 3200,
    }, {
      room: "102",
      meterPrev: 2000,
      meterNow: 2015,
      waterPrev: 600,
      waterNow: 605,
      rent: 3200,
    }, {
      room: "102",
      meterPrev: 2000,
      meterNow: 2015,
      waterPrev: 600,
      waterNow: 605,
      rent: 3200,
    }, {
      room: "102",
      meterPrev: 2000,
      meterNow: 2015,
      waterPrev: 600,
      waterNow: 605,
      rent: 3200,
    }, {
      room: "102",
      meterPrev: 2000,
      meterNow: 2015,
      waterPrev: 600,
      waterNow: 605,
      rent: 3200,
    }, {
      room: "102",
      meterPrev: 2000,
      meterNow: 2015,
      waterPrev: 600,
      waterNow: 605,
      rent: 3200,
    }, {
      room: "102",
      meterPrev: 2000,
      meterNow: 2015,
      waterPrev: 600,
      waterNow: 605,
      rent: 3200,
    }, {
      room: "102",
      meterPrev: 2000,
      meterNow: 2015,
      waterPrev: 600,
      waterNow: 605,
      rent: 3200,
    }, {
      room: "102",
      meterPrev: 2000,
      meterNow: 2015,
      waterPrev: 600,
      waterNow: 605,
      rent: 3200,
    }, {
      room: "102",
      meterPrev: 2000,
      meterNow: 2015,
      waterPrev: 600,
      waterNow: 605,
      rent: 3200,
    }, {
      room: "102",
      meterPrev: 2000,
      meterNow: 2015,
      waterPrev: 600,
      waterNow: 605,
      rent: 3200,
    },
  ];
  const navigate = useNavigate();

  const calcTotal = (item) => {
    const electricUnits = item.meterNow - item.meterPrev;
    const waterUnits = item.waterNow - item.waterPrev;
    const electricPrice = electricUnits * 12;
    const waterPrice = waterUnits * 5;
    return item.rent + electricPrice + waterPrice;
  };

  return (
    <div className="p-6 mt-35">
      <h2 className="text-xl font-bold mb-4">ตารางการเงินและบิล</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="border-0.5 px-4 py-2">เลขห้อง</th>
              <th className="border-0.5 px-4 py-2">มิเตอร์ไฟ เดือนที่แล้ว</th>
              <th className="border-0.5 px-4 py-2">มิเตอร์ไฟ เดือนนี้</th>
              <th className="border-0.5 px-4 py-2">มิเตอร์น้ำ เดือนที่แล้ว</th>
              <th className="border-0.5 px-4 py-2">มิเตอร์น้ำ เดือนนี้</th>
              <th className="border-0.5 px-4 py-2">ค่าเช่า (บาท)</th>
              <th className="border-0.5 px-4 py-2">รวม (บาท)</th>
              <th className="border-0.5 pl-4 py-2">รายละเอียดข้อมูล</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="border-1 border-gray-200 px-4 py-2">{item.room}</td>
                <td className="border-1 border-gray-200 px-4 py-2">{item.meterPrev}</td>
                <td className="border-1 border-gray-200 px-4 py-2">{item.meterNow}</td>
                <td className="border-1 border-gray-200 px-4 py-2">{item.waterPrev}</td>
                <td className="border-1 border-gray-200 px-4 py-2">{item.waterNow}</td>
                <td className="border-1 border-gray-200 px-4 py-2">{item.rent}</td>
                <td className="border-1 border-gray-200 px-4 py-2">{calcTotal(item)}</td>
                <td className="border-1 border-gray-200 px-4 py-2" style={{ textAlignLast: "center" }}>
                  <button
                    onClick={() => navigate("/light")}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 cursor-pointer"
                  >
                    ดูรายละเอียด
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
