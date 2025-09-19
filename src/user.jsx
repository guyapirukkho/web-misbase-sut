import React, { useEffect, useRef, useState } from 'react'; 
import Bgblack from "./assets/picture/bg_black.png";
import Profile from "./assets/picture/user.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useMountEffect } from 'primereact/hooks';
import { Messages } from 'primereact/messages';
export default function UserPage() {
  const [showDialog, setShowDialog] = useState(false);
  const [user, setUser] = useState({
    firstName: "ธรรมชาติ",
    lastName: "ดี",
    age: 19,
    gender: "ชาย",
    phone: "080-123-4567",
    email: "tammachat@gmail.com",
    address: "123 หมู่ 4 ต.ในเมือง อ.เมือง จ.นครราชสีมา",
    faculty: "คณะเทคโนโลยีดิจิทัล",
    year: "ปีที่ 1",
    status: "นักศึกษา",
    sassana: "พุทธ",
    chaat: "ไทย",
    blood: "O",
    myworld: "ไม่มี",
    infocardcommu: "13099034382905",
    infocardcar: "600002920",
    tabean: "ฟหกด.2202",
    numhouse: "32",
    namemoohouse: "หนวน",
    namehouse: "32",
    tnon: "-",
    moot: "4",
    soy: "-",
    tumbon: "หนองไข่น้ำ",
    mueang: "เมือง",
    city: "นครราชสีมา",
    post: "30310",
    phonehouse: "082-292-2929",
  });

  const [editData, setEditData] = useState({});

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const inputClass =
    "border border-gray-300 rounded px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-orange-400";

  return (
    <div
      className="relative min-h-screen p-8 text-slate-800 bg-cover bg-center"
      style={{ backgroundImage: `url(${Bgblack})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div
        data-aos="fade-right"
        className="max-w-1000 w-300 mx-auto mt-25 bg-white relative rounded-lg shadow-lg p-6 space-y-6"
      >
        {/* ส่วนหัว */}
        <div className="flex items-center gap-6 border-b pb-4">
          <img
            src={Profile}
            alt="Profile"
            className="w-28  h-28 rounded-full object-cover border"
          />
          <div>
            <h2 className="text-2xl font-bold">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-gray-600">อายุ: {user.age} ปี</p>
            <p className="text-gray-600">เพศ: {user.gender}</p>
          </div>
        </div>

        {/* ข้อมูลส่วนตัว */}
        <div className="grid grid-cols-2 gap-10">
          <section>
            <h3 className="text-lg font-semibold mb-2">💁‍♂️ ข้อมูลส่วนตัวนักศึกษา</h3>
            <p><span className="font-semibold">เบอร์โทร:</span> {user.phone}</p>
            <p><span className="font-semibold">อีเมล:</span> {user.email}</p>
            <p><span className="font-semibold">ที่อยู่:</span> {user.address}</p>
            <p><span className="font-semibold">สัญชาติ:</span> {user.chaat}</p>
            <p><span className="font-semibold">เชื้อชาติ:</span> {user.chaat}</p>
            <p><span className="font-semibold">ศาสนา:</span> {user.sassana}</p>
            <p><span className="font-semibold">กลุ่มเลือด:</span> {user.blood}</p>
            <p><span className="font-semibold">โรคประจำตัว:</span> {user.myworld}</p>
            <p><span className="font-semibold">บัตรประชาชน:</span> {user.infocardcommu}</p>
            <p><span className="font-semibold">ใบขับขี่:</span> {user.infocardcar}</p>
            <p><span className="font-semibold">ทะเบียนรถ:</span> {user.tabean}</p>
            <p><span className="font-semibold">คณะ:</span> {user.faculty}</p>
            <p><span className="font-semibold">ปีการศึกษา:</span> {user.year}</p>
            <p><span className="font-semibold">สถานะ:</span> {user.status}</p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">📚 ที่อยู่ตามทะเบียนบ้าน</h3>
            <p><span className="font-semibold">บ้านเลขที่:</span> {user.namehouse}</p>
            <p><span className="font-semibold">หมู่บ้าน:</span> {user.namemoohouse}</p>
            <p><span className="font-semibold">ถนน:</span> {user.tnon}</p>
            <p><span className="font-semibold">หมู่ที่:</span> {user.moot}</p>
            <p><span className="font-semibold">ซอย:</span> {user.soy}</p>
            <p><span className="font-semibold">ตำบล:</span> {user.tumbon}</p>
            <p><span className="font-semibold">อำเภอ:</span> {user.mueang}</p>
            <p><span className="font-semibold">จังหวัด:</span> {user.city}</p>
            <p><span className="font-semibold">รหัสไปรษณีย์:</span> {user.post}</p>
            <p><span className="font-semibold">โทรศัพท์บ้าน:</span> {user.phonehouse}</p>
          </section>
        </div>

        {/* ปุ่มเปิด Dialog */}
        <div className="justify-self-end">
          <button
            onClick={() => {
              setEditData(user);
              setShowDialog(true);
            }}
            className="relative cursor-pointer mt-5 h-[38px] overflow-hidden border mr-5 rounded-lg w-40 border-orange-400 bg-white text-orange-400 shadow-2xl hover:text-white hover:bg-orange-400 transition-all"
          >
            <span className="relative z-10">เปลี่ยนแปลงข้อมูล</span>
          </button>
        </div>
      </div>

      {/* Dialog */}
      {showDialog && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 overflow-y-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-lg font-bold mb-4">แก้ไขข้อมูล</h2>

            {Object.keys(editData).map((key) => (
              <div key={key} className="mb-3">
                <label className="block mb-1 font-semibold">{key}:</label>
                <input
                  type="text"
                  name={key}
                  value={editData[key] || ""}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            ))}

            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => setShowDialog(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                ยกเลิก
              </button>
              <button
                onClick={() => {
                  setUser(editData);
                  setShowDialog(false);
                }}
                className="px-4 py-2 bg-orange-400 text-white rounded"
              >
                บันทึก
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
