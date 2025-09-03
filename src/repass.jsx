import { useNavigate } from "react-router-dom";
import Sutdorm1 from "./assets/picture/sutdorm1.png";
import bglogin from "./assets/picture/bglogin.png";

export default function ForgotPassword({ onResetRequest }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onResetRequest();
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center px-10"
      style={{ backgroundImage: `url(${bglogin})` }}
    >
      <div className="bg-white rounded-lg shadow-lg w-full h-125 max-w-md p-8 relative">
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 left-4 text-orange-400 hover:text-orange-500 flex items-center gap-1"
        >
          <span className="pi pi-arrow-left"></span>
          <span className="text-sm font-medium">กลับ</span>
        </button>

        <div className="flex flex-col items-center">
          <img
            src={Sutdorm1}
            alt="SUT Dormitory"
            className="h-20 w-auto animate-bounce"
          />
          <h2 className="mt-6 text-2xl font-bold text-gray-900">ลืมรหัสผ่าน</h2>
          <p className="text-gray-500 text-sm text-center">
            กรุณากรอกอีเมลหรือรหัสนักศึกษาเพื่อรับลิงก์รีเซ็ตรหัสผ่าน
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="identifier"
              className="block text-sm font-medium text-gray-700"
            >
              อีเมลหรือรหัสนักศึกษา
            </label>
            <div className="relative mt-2">
              <span className="pi pi-envelope absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></span>
              <input
                id="identifier"
                type="text"
                placeholder="กรอกอีเมลหรือรหัสนักศึกษา"
                className="block w-full focus:outline-orange-300 focus:outline-2 rounded-md pl-10 pr-3 py-2 
               text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-500 
               focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <button
            type="submit"
            className="relative mt-5 h-[38px] overflow-hidden border rounded-lg w-full border-orange-400 justify-self-center bg-white text-orange-400 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-100 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-100 hover:text-white hover:shadow-orange-400 hover:before:w-2/4 hover:before:bg-orange-400 hover:after:w-2/4 hover:after:bg-orange-400"
          >
            <span className="relative z-10">ขอรีเซ็ตรหัสผ่าน</span>
          </button>
        </form>
      </div>
    </div>
  );
}
