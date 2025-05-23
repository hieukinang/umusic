import axios from "axios";
import { useEffect, useState } from "react";

export default function Body() {
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
    };

    type ApiResponse = {
        data: { id: string; items: ItemDetail[] }[];
    };

    const [items, setItems] = useState<ItemDetail[]>([]);
    const[isOpenHome, setIsOpenHome] = useState(Boolean);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const timestamp = Date.now();
                const response = await axios.get<ApiResponse>(
                    'http://api.umusic.la/umusic-service/v1/new/cate-list',
                    {
                        params: { timestamp, page: 0, size: 10 },
                        headers: {
                            'Accept-language': 'vn',
                            'userId': '1645159935521',
                            'token': '123421534',
                            'Client-Type': 'iOS',
                            'Revision': '1',
                        }
                    }
                );

                console.log('API data:', response.data);

                if (response.data?.data && Array.isArray(response.data.data)) {
                    const fetchedItems = response.data.data.flatMap((data) => data.items || []);
                    setItems(fetchedItems);
                }
            } catch (error) {
                console.error('API Error:', (error as any).response?.data || (error as Error).message);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="max-w-full mx-auto px-6">
            {/* Hot New Section */}
            <section className="mb-4 flex justify-center">
                <div className="relative w-full max-w-full h-[260px] rounded-[16px] overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: 'url("/hotnew/bg_hotnew.jpeg")' }}
                    >
                        <div className="absolute right-0 top-[-15px]">
                            <img
                                src="/hotnew/img_hotnew.png"
                                alt="Promotion"
                                className="w-[302px] h-[276px] object-cover rounded-lg"
                            />
                        </div>
                        <div className="absolute top-[29.44px] left-[58px] w-[347px] h-[201px] flex flex-col">
                            <div className="w-[347px] h-[117px]">
                                <h2 className="font-inter text-[30px] font-normal leading-[150%] tracking-[-0.32px] text-white">Hot new</h2>
                                <h3 className="font-inter text-[48px] font-semibold leading-[150%] tracking-[-0.32px] text-white">Sale promotion</h3>
                            </div>
                            <div className="mt-[24px]">
                                <button className="bg-white text-black w-[202px] h-[60px] rounded-[15.72px] font-inter font-bold text-[28px] leading-[100%] tracking-[-0.32px] text-center">
                                    See more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <div className="flex gap-[10px] mb-4 flex-wrap justify-left">
                {['R&B', 'LAMVONG', 'DRIVING', 'COFFE', 'SPORT', 'TẾT'].map((category) => (
                    <button
                        key={category}
                        className="w-[98px] h-[36px] rounded-[8px] border border-solid border-gray-200 px-[20px] py-[8px] bg-gray-200 text-black focus:bg-[#002868] focus:text-white font-inter font-medium text-[14px] leading-[21px] tracking-[0%] text-center flex items-center justify-center"
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* New Music Section */}
            <section className="mb-4">
                <div className="space-y-8">
                    {/* New Music List */}
                    <section>
                        <div className="flex justify-between items-center mb-2  ">
                            <h2 className="text-2xl font-bold text-black">Nhạc mới</h2>
                            <button className="text-red-500 hover:underline">Xem tất cả</button>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {items.slice(0, 5).map((item, index) => (
                                <div
                                    key={item.id || index}
                                    className="flex flex-col gap-2"
                                >
                                    <div className="w-[135px] h-[135px] bg-gray-200 rounded-lg overflow-hidden">
                                        {item.avatar ? (
                                            <img
                                                src={item.avatar}
                                                alt={item.songName}
                                                className="w-[135px] h-[135px] object-cover"
                                                loading="lazy"
                                            />
                                        ) : (
                                            <div className="w-[135px] h-[135px] flex items-center justify-center">
                                                <span>No Image</span>
                                            </div>
                                        )}
                                    </div>
                                    <p className="font-inter text-sm text-black truncate">
                                        {item.songName || 'Untitled'}
                                    </p>
                                    <p className="font-inter text-xs text-gray-500 truncate">
                                        {item.artists?.[0]?.aliasName || 'Unknown Artist'}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section>
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold text-black">Những bản nhạc yêu thích dần trôi vào quên lãng</h2>
                            {/* không tìm thấy api */}
                            <button className="text-red-500 hover:underline">Xem tất cả</button>
                        </div>
                        {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {items.slice(0, 5).map((item, index) => (
                                <div
                                    key={item.id || index}
                                    className="flex flex-col gap-2"
                                >
                                    <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden">
                                        {item.avatar ? (
                                            <img
                                                src={item.avatar}
                                                alt={item.songName}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <span>No Image</span>
                                            </div>
                                        )}
                                    </div>
                                    <p className="font-inter text-sm text-black truncate">
                                        {item.songName || 'Untitled'}
                                    </p>
                                    <p className="font-inter text-xs text-gray-500 truncate">
                                        {item.artists?.[0]?.aliasName || 'Unknown Artist'}
                                    </p>
                                </div>
                            ))}
                        </div> */}
                    </section>

                    {/* Add new section here */}
                    {/* <section>
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold text-black">Đề xuất cho bạn</h2>
                            <button className="text-red-500 hover:underline">Xem tất cả</button>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            {[0, 1, 2].map((colIndex) => (
                                <div key={colIndex} className="space-y-2">
                                    {items.slice(colIndex * 3, (colIndex * 3) + 3).map((item, index) => (
                                        <div
                                            key={item.id || index}
                                            className="flex items-center gap-3 bg-white rounded-lg p-2 hover:bg-gray-50"
                                        >
                                            <div className="w-[50px] h-[50px] flex-shrink-0 bg-gray-200 rounded-lg overflow-hidden">
                                                {item.avatar ? (
                                                    <img
                                                        src={item.avatar}
                                                        alt={item.songName}
                                                        className="w-full h-full object-cover"
                                                        loading="lazy"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center">
                                                        <span>No Image</span>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-inter text-sm font-medium text-black truncate">
                                                    {item.songName || 'Untitled'}
                                                </p>
                                                <p className="text-xs text-gray-500 truncate">
                                                    {item.artists?.[0]?.aliasName || 'Unknown Artist'}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <button className="p-2 hover:bg-gray-100 rounded-full">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                    </svg>
                                                </button>
                                                <button className="p-2 hover:bg-gray-100 rounded-full">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </section> */}
                    {/* Bảng xếp hạng section */}
                    {/* <section>
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold text-black">Bảng xếp hạng</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[1, 2].map((chartIndex) => (
                                <div key={chartIndex} className="rounded-xl p-4" style={{ backgroundImage: 'url("/hotnew/bg_hotnew.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <span className="text-white font-medium">Nhạc Lào</span>
                                            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        {items.slice(0, 5).map((item, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <span className="text-white font-bold w-6">{index + 1}</span>
                                                <div className="w-[40px] h-[40px] bg-gray-200 rounded-lg overflow-hidden">
                                                    <img
                                                        src={item.avatar || '/placeholder.png'}
                                                        alt={item.songName}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-white text-sm font-medium truncate">
                                                        {item.songName || 'Beautiful in white'}
                                                    </p>
                                                    <p className="text-gray-300 text-xs truncate">
                                                        {item.artists?.[0]?.aliasName || 'Unknown Artist'}
                                                    </p>
                                                </div>
                                                <button className="text-white p-2">
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section> */}
                </div>
            </section>
        </div>
    );
}
