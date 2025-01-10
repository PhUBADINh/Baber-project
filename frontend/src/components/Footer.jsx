// eslint-disable-next-line no-unused-vars
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* แบรนด์ STYLEX */}
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">STYLEX</div>
          
          {/* ข้อมูลร้าน */}
          <div className="text-sm">
            <p>ตอบโจทย์ทุกสไตล์ เสริมลุคให้คุณมั่นใจในทุกวัน</p>
            <p>เวลาเปิด-ปิด: 10:00 - 20:00 น.</p>
            <p>เมืองพะเยา</p>
            <p>เบอร์โทร: 012-345-6789</p>
          </div>
        </div>

        {/* ลิงก์เพิ่มเติม */}
        <div className="mt-6 text-center">
          <p className="text-sm">© 2025 STYLEX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
