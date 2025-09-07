import Profile from "./assets/picture/user.png"
export default function UserPage() {
    const user = {
        firstName: "ธรรมชาติ",
        lastName: "ดี",
        profilePic: { Profile }, // เปลี่ยนเป็น path รูปจริง
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
        post:"30310",
        phonehouse: "082-292-2929",
    };

    return (
        <div className="min-h-screen mt-20 bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 space-y-6">
                <div className="flex items-center gap-6 border-b pb-4">
                    <img
                        src={Profile}
                        alt="Profile"
                        className="w-28 h-28 rounded-full object-cover border"
                    />
                    <div>
                        <h2 className="text-2xl font-bold">
                            {user.firstName} {user.lastName}
                        </h2>
                        <p className="text-gray-600">อายุ: {user.age} ปี</p>
                        <p className="text-gray-600">เพศ: {user.gender}</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-10">
                    <section>
                        <h3 className="text-lg font-semibold mb-2">💁‍♂️  ข้อมูลส่วนตัวนักศึกษา</h3>
                        <p><span className="font-semibold">เบอร์โทร:</span> {user.phone}</p>
                        <p><span className="font-semibold">อีเมล:</span> {user.email}</p>
                        <p><span className="font-semibold">ที่อยู่:</span> {user.address}</p>
                        <p><span className="font-semibold">สัญชาติ:</span> {user.chaat}</p>
                        <p><span className="font-semibold">เชื้อชาติ:</span> {user.chaat}</p>
                        <p><span className="font-semibold">ศาสนา:</span> {user.sassana}</p>
                        <p><span className="font-semibold">กลุ่มเลือด:</span> {user.blood}</p>
                        <p><span className="font-semibold">โรคประจำตัว:</span> {user.myworld}</p>
                        <p><span className="font-semibold">ข้อมูลบัตรประชาชน:</span> {user.infocardcommu}</p>
                        <p><span className="font-semibold">ใบขับขี่:</span> {user.infocardcar}</p>
                        <p><span className="font-semibold">ทะเบียนรถจักรยานยนต์:</span> {user.tabean}</p>                        <p><span className="font-semibold">คณะ/แผนก:</span> {user.faculty}</p>
                        <p><span className="font-semibold">ปีการศึกษา:</span> {user.year}</p>
                        <p><span className="font-semibold">สถานะสมาชิก:</span> {user.status}</p>
                    </section>

                    {/* ข้อมูลการใช้งาน */}
                    <section>
                        <h3 className="text-lg font-semibold mb-2">📚 ที่อยู่ปัจจุบันของนักศึกษา(ตามทะเบียนบ้าน)</h3>
                        <p><span className="font-semibold">บ้านเลขที่:</span> {user.namehouse}</p>
                        <p><span className="font-semibold">ชื่อหมู่บ้าน:</span> {user.namemoohouse}</p>
                        <p><span className="font-semibold">ถนน:</span> {user.tnon}</p>
                        <p><span className="font-semibold">หมู่ที่:</span> {user.moot}</p>
                        <p><span className="font-semibold">ซอย:</span> {user.soy}</p>
                        <p><span className="font-semibold">ตำบล/แขวง:</span> {user.tumbon}</p>
                        <p><span className="font-semibold">อำเภอ/เขต:</span> {user.mueang}</p>
                        <p><span className="font-semibold">จังหวัด:</span> {user.city}</p>
                        <p><span className="font-semibold">รหัสไปรษณีย์:</span> {user.post}</p>
                        <p><span className="font-semibold">เบอร์โทรศัพท์บ้าน:</span> {user.phonehouse}</p>

                    </section>
                </div>
                {/* <section>
                    <h3 className="text-lg font-semibold mb-2">⚙️ การตั้งค่า</h3>
                    <div className="flex flex-col gap-2">
                        <button className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-500">
                            เปลี่ยนรหัสผ่าน
                        </button>
                        <button className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-500">
                            ปรับธีม
                        </button>
                        <button className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-500">
                            จัดการการแจ้งเตือน
                        </button>
                    </div>
                </section>

                <section>
                    <h3 className="text-lg font-semibold mb-2">📄 ข้อมูลอื่น ๆ</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>ประวัติการใช้งาน</li>
                        <li>การชำระเงิน</li>
                        <li>ใบแจ้งหนี้</li>
                    </ul>
                </section> */}
            </div>
        </div>
    );
}
