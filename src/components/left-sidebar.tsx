'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function LeftSidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      {/* Sidebar cho màn hình lớn trở lên */}
      <div
        className={`fixed left-0 top-0 h-screen bg-white text-black transition-all duration-300 flex flex-col z-20 
        ${isOpen ? 'w-[260px]' : 'w-[60px]'} hidden lg:flex`}
      >
        {/* Logo */}
        <div className="py-[17px] px-4 h-[62px] flex gap-2 items-center">
          <div className="relative w-[28px] h-[28px]">
            <Image
              src="/left-sidebar/icon-umusic.png"
              alt="Logo"
              fill
              sizes="28px"
              className="object-contain"
            />
          </div>
          {isOpen && (
            <div className="relative w-[68.8px] h-[11.7px]">
              <Image
                src="/left-sidebar/text-umusic.png"
                alt="Logo Text"
                fill
                sizes="68.8px"
                className="object-contain"
              />
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className={`flex flex-col gap-6 p-4 ${isOpen ? 'pl-[30px]' : 'pl-[15px]'}`}>
          {[
            { href: '/', icon: 'icon_trangchu.png', label: 'Trang chủ' },
            { href: '/explore', icon: 'Iconkhampha.png', label: 'Khám phá' },
            { href: '/explore', icon: 'Iconthuvien.png.png', label: 'Thư viện' },
            { href: '/explore', icon: 'Icondoannhac.png', label: 'Đoạn nhạc' },
            { href: '/explore', icon: 'Iconnangcap.png', label: 'Nâng cấp' },
          ].map(({ href, icon, label }, i) => (
            <Link
              key={i}
              href={href}
              className={`flex items-center ${isOpen ? 'gap-3 w-full' : 'justify-center'} text-black hover:text-gray-600`}
            >
              <img src={`/left-sidebar/${icon}`} alt={label} className="h-6 w-6" />
              {isOpen && <span>{label}</span>}
            </Link>
          ))}

          {/* Divider */}
          <div className={`w-full ${isOpen ? 'px-6' : 'px-[15px] ml-[-15px]'}`}>
            <div className="h-[1px] border-t border-[#E8E8E8]"></div>
          </div>

          {/* Add Playlist */}
          <Link
            href="/addplaylist"
            className={`text-black bg-gray-200 ${isOpen
              ? 'w-[228px] h-[40px] rounded-[1000px] text-left py-2 px-3 flex items-center justify-center ml-[-15px]'
              : 'flex items-center justify-center w-[40px] h-[40px] ml-[-5px] rounded-full'
              }`}
          >
            <img src="/left-sidebar/addplaylist.png" alt="Addplaylist Icon" className="h-6 w-6" />
            {isOpen && <span className="ml-2">Tạo playlist</span>}
          </Link>
        </nav>

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-[20px] -right-[14px] bg-red-500 border border-gray-300 rounded-full shadow-md p-1 z-30 w-[28px] h-[28px] flex items-center justify-center"
        >
          {isOpen ? <ChevronLeft size={20} className="text-white" /> : <ChevronRight size={20} className="text-white" />}
        </button>
      </div>

      {/* Footer navigation cho màn hình nhỏ (sm) */}
      <div className="lg:hidden flex fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-20">
        <nav className="flex justify-between items-center w-full p-4">
          {['Trang chủ', 'Khám phá', 'Thư viện', 'Đoạn nhạc', 'Nâng cấp'].map((label, i) => (
            <Link key={i} href="/explore" className="text-black text-sm">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
