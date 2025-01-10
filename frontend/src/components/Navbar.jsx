// eslint-disable-next-line no-unused-vars
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold">STYLEX</div>

        {/* Navigation Links */}
        <div className="space-x-6">
          <a href="/" className="hover:text-gray-300">หน้าหลัก</a>
          <a href="/services" className="hover:text-gray-300">บริการ</a>
          <a href="/about" className="hover:text-gray-300">เกี่ยวกับเรา</a>
          <a href="/booking" className="hover:text-gray-300">จองคิว</a>
          <a href="/contact" className="hover:text-gray-300">ติดต่อเรา</a>
        </div>

        {/* Signup Button */}
        <div>
          <a
            href="/signup"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            สมัครสมาชิก
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
