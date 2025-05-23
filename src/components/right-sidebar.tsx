'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import LoginModal from './login-modal';
type Artist = {
    id: string;
    aliasName: string;
    realName: string;
};

type ItemDetail = {
    id: string;
    songName: string;
    avatar: string;
    artists: Artist[];
    totalListens: number;
};

type ApiResponse = {
    data: { id: string; items: ItemDetail[] }[];
};

const rankHeaders = {
    'Accept-language': 'vn',
    'userId': '1645159935521',
    'token': '123421534',
    'Client-Type': 'iOS',
    'Revision': '1',
};

export default function RightSidebar() {
    const [rankings, setRankings] = useState<ItemDetail[]>([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isOpen, setIsOpen] = useState(true);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    useEffect(() => {
        const fetchRankings = async () => {
            try {
                const timestamp = 1234;
                const response = await axios.get<ApiResponse>(
                    'http://api.umusic.la/umusic-service/v1/ranking/cate-list',
                    { params: { timestamp }, headers: rankHeaders }
                );

                if (response.data?.data) {
                    const fetchedItems = response.data.data.flatMap((d) => d.items || []);
                    setRankings(fetchedItems);
                }
            } catch (error: any) {
                console.error("Không thể lấy dữ liệu BXH:");
                if (axios.isAxiosError(error)) {
                    console.error("Chi tiết lỗi từ server:", error.response?.data || error.message);
                } else {
                    console.error("Lỗi không xác định:", error);
                }
            }
        };

        fetchRankings();
    }, []);

    return (
        <>
            <div className="fixed right-0 top-0 w-[292px] h-screen bg-white text-black p-4 hidden lg:block">
                {/* Phần trạng thái người dùng */}
                <div className="sm:hidden md:block p-4">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                            <img
                                src="/right-sidebar/avtdefault.png"
                                alt="Avatar"
                                className="w-6 h-6 object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            {isLoggedIn ? (
                                <>
                                    <span className="text-sm text-gray-700">Chào, User</span>
                                    <Link href="/profile" className="text-sm text-blue-500 hover:underline">
                                        Xem hồ sơ
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <span className="text-sm text-gray-700">Bạn chưa đăng nhập</span>
                                    <button
                                        onClick={() => setIsLoginModalOpen(true)}
                                        className="text-sm text-red-500 hover:underline text-left"
                                    >
                                        Đăng nhập ngay
                                    </button>
                                </>
                            )}
                        </div>
                        <div>
                            <img
                                src="/right-sidebar/moreoption.png"
                                alt="Tùy chọn"
                                className="w-6 h-6"
                            />
                        </div>
                    </div>
                </div>
                <section className='mb-10 mt-5'>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-[18px] font-bold text-black">Gần đây</h2>
                    </div>
                    <div>
                        {rankings.slice(0, 3).map((item, index) => (
                            <div
                                key={item.id || index}
                                className="flex items-center gap-3 bg-white rounded-lg p-1 hover:bg-gray-50 h-[40px] mb-2"
                            >
                                <div className="w-[40px] h-[40px] bg-gray-200 rounded-lg overflow-hidden">
                                    {item.avatar ? (
                                        <img
                                            src={item.avatar}
                                            alt={item.songName}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-xs text-gray-500">
                                            No Image
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-medium text-sm text-black truncate">
                                        {item.songName || 'Untitled'}
                                    </p>
                                    <p className="text-xs text-gray-500 truncate">
                                        {item.artists?.[0]?.aliasName || 'Unknown Artist'}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <p className="text-[12px] font-inter text-black">20min ago</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                {/* BXH - Gần đây */}
                <section>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-[18px] font-bold text-black">BXH nhạc mới</h2>
                    </div>
                    <div>
                        {rankings.slice(0, 5).map((item, index) => (
                            <div
                                key={item.id || index}
                                className="flex items-center gap-3 bg-white rounded-lg p-1 hover:bg-gray-50 h-[40px] mb-2"
                            >
                                <div className="w-[40px] h-[40px] bg-gray-200 rounded-lg overflow-hidden">
                                    {item.avatar ? (
                                        <img
                                            src={item.avatar}
                                            alt={item.songName}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-xs text-gray-500">
                                            No Image
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-semibold text-sm text-black truncate">
                                        <span className="mr-2 text-sm font-bold text-gray-800">
                                            {index + 1}.
                                        </span>
                                        {item.songName || 'Untitled'}
                                    </p>
                                    <p className="text-xs text-gray-500 truncate">
                                        {item.totalListens.toLocaleString()} lượt xem
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="p-1 hover:bg-gray-100 rounded-full">
                                        <img
                                            src="/right-sidebar/chevron-right.png"
                                            alt="chevron-right"
                                            className="w-4 h-4"
                                        />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            {/* Updated Login Modal container */}
            <div className={`fixed inset-0 bg-[rgba(18,18,18,0.7)] z-100 ${isLoginModalOpen ? '' : 'hidden'}`}>
                <LoginModal
                    isOpen={isLoginModalOpen}
                    onClose={() => setIsLoginModalOpen(false)}
                />
            </div>
        </>
    );
}
