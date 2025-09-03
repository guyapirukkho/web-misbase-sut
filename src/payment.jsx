import React, { useState, useRef } from "react";
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // 🎨 Theme
import 'primereact/resources/primereact.min.css'; // Core styles
import 'primeicons/primeicons.css'; // Icons
import PP from "./assets/picture/pp.jpg"
export default function PaymentPage() {
  const [activeTab, setActiveTab] = useState("card");
  const toast = useRef(null);

  // ฟังก์ชันคัดลอกข้อความ
  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.current.show({
        severity: 'success',
        summary: 'คัดลอกสำเร็จ',
        detail: text,
        life: 2000
      });
    } catch {
      toast.current.show({
        severity: 'error',
        summary: 'คัดลอกไม่สำเร็จ',
        life: 2000
      });
    }
  };
  const formatCardNumber = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 16);
    return digits.match(/.{1,4}/g)?.join(" ") ?? "";
  };

  const formatExp = (value) => {
    let v = value.replace(/\D/g, "").slice(0, 4);
    if (v.length >= 3) v = v.slice(0, 2) + "/" + v.slice(2);
    return v;
  };

  return (
    <div className="bg-white p-30 text-slate-800 min-h-screen">
      <Toast ref={toast} position="top-right" />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          
          {/* Summary */}
          <section className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">สรุปรายการชำระเงิน</h2>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span>ค่าหอพัก เดือนกันยายน</span>
                <span>4,500</span>
              </li>
              <li className="flex justify-between">
                <span>ค่าน้ำ-ค่าไฟ</span>
                <span>320</span>
              </li>
              <li className="flex justify-between">
                <span>ค่าบำรุงรักษา</span>
                <span>180</span>
              </li>
            </ul>
            <div className="my-5 border-t border-slate-200"></div>
            <div className="flex justify-between font-semibold text-xl">
              <span>ยอดรวม</span>
              <span>5,000</span>
            </div>
          </section>

          <section className="lg:col-span-3 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">เลือกวิธีชำระเงิน</h2>
            <div className="mb-4 flex gap-2 " style={{justifyContent:"space-between"}}>
              {["card", "promptpay", "bank"].map((tab) => (
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 `}
                >
                  {tab === "card"
                    ? "บัตรเครดิต/เดบิต"                       
                    : tab === "promptpay"
                    ? "PromptPay (QR)"
                    : "โอนผ่านธนาคาร"}
                </button>
              ))}
            </div>
            {activeTab === "card" && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  toast.current.show({
                    severity: 'info',
                    summary: 'Demo Mode',
                    detail: 'อยู่ระหว่างการตรวจสอบ',
                    life: 2000
                  });
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm mb-1">ชื่อบนบัตร</label>
                  <input
                    type="text"
                    required
                    className="w-full rounded border border-slate-300 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">หมายเลขบัตร</label>
                  <input
                    type="text"
                    required
                    maxLength="19"
                    onChange={(e) =>
                      (e.target.value = formatCardNumber(e.target.value))
                    }
                    className="w-full rounded border border-slate-300 px-3 py-2"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    placeholder="MM/YY"
                    maxLength="5"
                    onChange={(e) =>
                      (e.target.value = formatExp(e.target.value))
                    }
                    className="rounded border border-slate-300 px-3 py-2"
                  />
                  <input
                    placeholder="CVC"
                    maxLength="4"
                    className="rounded border border-slate-300 px-3 py-2"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white rounded-lg py-2.5 font-medium hover:bg-gray-800"
                >
                  ชำระเงิน 5,000 บาท
                </button>
              </form>
            )}

            {/* PromptPay */}
            {activeTab === "promptpay" && (
              <div className="space-y-4">
                <div className="border border-dashed p-6 text-center rounded-lg">
                  <img src={PP} className="h-70 justify-self-center"/>
                  <p className="text-xs text-slate-500">
                    รหัสอ้างอิง: SUT-INV-402-0925
                  </p>
                </div>
                <div className="flex justify-between">
                  <span>หมายเลขพร้อมเพย์: 080-123-4567</span>
                  <button
                    onClick={() => copyText("080-123-4567")}
                    className="text-xs border px-2 py-1 rounded"
                  >
                    คัดลอก
                  </button>
                </div>
              </div>
            )}

            {/* Bank Transfer */}
            {activeTab === "bank" && (
              <div className="space-y-4">
                <div className="border p-4 rounded-lg">
                  <p>ชื่อบัญชี: หอพัก SUT</p>
                  <p>ธนาคาร: Kasikornbank</p>
                  <p>
                    เลขบัญชี: 123-4-56789-0{" "}
                    <button
                      onClick={() => copyText("123-4-56789-0")}
                      className="text-xs border px-2 py-1 rounded"
                    >
                      คัดลอก
                    </button>
                  </p>
                </div>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
