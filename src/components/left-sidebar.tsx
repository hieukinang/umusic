'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Sử dụng icon từ lucide-react (nếu đã cài)

export default function LeftSidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`fixed left-0 top-0 h-screen bg-white text-black border-r-2 border-gray-200 transition-all duration-300 flex flex-col z-20 ${isOpen ? 'w-[260px]' : 'w-[60px]'}`}

    >
      {/* Logo */}
      <div className="py-[17px] px-4 h-[62px] flex gap-2">
        <div className="flex items-center gap-2">
          <div className="relative w-[28px] h-[28px]">
            <Image
              src="/left-sidebar/icon-umusic.png"
              alt="Logo"
              fill
              sizes="28px"
              className="object-contain"
            />
          </div>
          <div className={`relative w-[68.8px] h-[11.7px] ${!isOpen ? 'hidden' : ''}`}>
            <Image
              src="/left-sidebar/text-umusic.png"
              alt="Logo Text"
              fill
              sizes="68.8px"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`flex flex-col gap-6 p-4 ${!isOpen ? 'pl-[15px]' : 'pl-[30px]'}`}>

        <Link
          href="/"
          className={`flex items-center ${isOpen ? 'gap-3 w-full' : 'justify-center'} text-black hover:text-gray-600`}
        >
          <img src="/left-sidebar/icon_trangchu.png" alt="Explore Icon" className="h-6 w-6" />
          <span className={!isOpen ? 'hidden' : ''}>Trang chủ</span>
        </Link>

        <Link
          href="/explore"
          className={`flex items-center ${isOpen ? 'gap-3 w-full' : 'justify-center'} text-black hover:text-gray-600`}
        >
          <img src="/left-sidebar/Iconkhampha.png" alt="Explore Icon" className="h-6 w-6" />
          <span className={!isOpen ? 'hidden' : ''}>Khám phá</span>
        </Link>

        <Link
          href="/explore"
          className={`flex items-center ${isOpen ? 'gap-3 w-full' : 'justify-center'} text-black hover:text-gray-600`}
        >
          <img src="/left-sidebar/Iconthuvien.png.png" alt="Explore Icon" className="h-6 w-6" />
          <span className={!isOpen ? 'hidden' : ''}>Thư viện</span>
        </Link>

        <Link
          href="/explore"
          className={`flex items-center ${isOpen ? 'gap-3 w-full' : 'justify-center'} text-black hover:text-gray-600`}
        >
          <img src="/left-sidebar/Icondoannhac.png" alt="Explore Icon" className="h-6 w-6" />
          <span className={!isOpen ? 'hidden' : ''}>Đoạn nhạc</span>
        </Link>

        <Link
          href="/explore"
          className={`flex items-center ${isOpen ? 'gap-3 w-full' : 'justify-center'} text-black hover:text-gray-600`}
        >
          <img src="/left-sidebar/Iconnangcap.png" alt="Explore Icon" className="h-6 w-6" />
          <span className={!isOpen ? 'hidden' : ''}>Nâng cấp</span>
        </Link>

        <div className={`${isOpen ? 'px-6 w-[212px]' : 'w-[60px] px-[15px] ml-[-15px]'}`}>
          <div className="h-[1px] border-t border-[#E8E8E8] w-full"></div>
        </div>

        <Link
          href="/addplaylist"
          className={`${isOpen
            ? 'w-[228px] h-[40px] rounded-[1000px] text-left py-2 px-3 text-black bg-gray-200 flex items-center justify-center ml-[-15px]'
            : 'flex items-center justify-center w-[40px] h-[40px] ml-[-5px] rounded-full bg-gray-200'
            }`}
        >
          <img src="/left-sidebar/addplaylist.png" alt="Addplaylist Icon" className="h-6 w-6" />
          <span className={!isOpen ? 'hidden' : ''}>Tạo playlist</span>
        </Link>
      </nav>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-[20px] -right-[14px] bg-red-500 border border-gray-300 rounded-full shadow-md p-1  z-30 w-[28px] h-[28px] flex items-center justify-center"
      >
        {isOpen ? <ChevronLeft size={20} className='text-white' /> : <ChevronRight size={20} className='text-white' />}
      </button>

    </div>

  );
}
