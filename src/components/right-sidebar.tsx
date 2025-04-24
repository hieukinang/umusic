'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function RightSidebar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Giả lập trạng thái đăng nhập

    return (
        <div className="fixed right-0 top-0 w-[292px] h-screen bg-white text-black p-4 z-20 hidden lg:block">
            {/* Hiển thị phần đăng nhập hoặc không ở màn hình nhỏ */}
            <div className="sm:hidden md:block p-4">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <img
                            src="/right-sidebar/avtdefault.png"
                            alt="User Avatar"
                            className="w-6 h-6"
                        />
                    </div>
                    <div className="flex flex-col">
                        {isLoggedIn ? (
                            <>
                                <span className="text-sm text-gray-700">Chào, User</span>
                                <a href="/profile" className="text-sm text-blue-500 hover:underline">
                                    Xem hồ sơ
                                </a>
                            </>
                        ) : (
                            <>
                                <span className="text-sm text-gray-700">Bạn chưa đăng nhập</span>
                                <a href="/login" className="text-sm text-red-500 hover:underline">
                                    Đăng nhập ngay
                                </a>
                            </>
                        )}
                    </div>
                    <div>
                        <img
                            src="/right-sidebar/moreoption.png"
                            alt="moreoption"
                            className="w-6 h-6"
                        />
                    </div>
                </div>
            </div>

            {/* Hiển thị các icon điều hướng chỉ trên màn hình sm */}
            <nav className="space-y-2  hidden lg:block">

                <Link href="/" className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span>Trang chủ</span>
                </Link>

                <Link href="/library" className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span>Thư viện</span>
                </Link>

                <Link href="/playlist" className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                    <span>Playlist</span>
                </Link>
            </nav>
        </div>
    );
}
