import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 p-4">
      {/* Logo */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">LOGO</h1>

        {/* Hamburger Button - แสดงเฉพาะมือถือ */}
        <button
          className="sm:hidden block"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Menu - แสดงบนคอมฯ */}
        <ul className="hidden sm:flex space-x-4">
          <li><a href="#">หน้าหลัก</a></li>
          <li><a href="#">สินค้า/บริการ</a></li>
          <li><a href="#">เกี่ยวกับเรา</a></li>
          <li><a href="#">ติดต่อเรา</a></li>
        </ul>
      </div>

      {/* Menu สำหรับมือถือ - Toggle ด้วย isOpen */}
      {isOpen && (
        <ul className="sm:hidden mt-2 space-y-2">
          <li><a href="#">หน้าหลัก</a></li>
          <li><a href="#">สินค้า/บริการ</a></li>
          <li><a href="#">เกี่ยวกับเรา</a></li>
          <li><a href="#">ติดต่อเรา</a></li>
        </ul>
      )}
    </nav>
  );
}