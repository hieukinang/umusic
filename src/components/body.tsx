import axios from "axios";
import { useEffect, useState } from "react";

export default function Body() {
    type ItemDetail = {
        id: string;
        songName: string;
        avatar: string;
    };

    type ApiResponse = {
        data: { id: string; items: ItemDetail[] }[];
    };

    const [items, setItems] = useState<ItemDetail[]>([]);

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
            <section className="mb-8 flex justify-center">
                <div className="relative w-full max-w-full h-[260px] rounded-[16px] overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: 'url("/hotnew/bg_hotnew.jpeg")' }}
                    >
                        <div className="absolute left-[50%] transform -translate-x-1/2 top-[-15px]">
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
            <div className="flex gap-[10px] mb-8 flex-wrap justify-center">
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
            <section className="mb-20">
                <div className="space-y-8">
                    {/* New Music List */}
                    <section>
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold text-black">Nhạc mới</h2>
                            <button className="text-red-500 hover:underline">Xem tất cả</button>
                        </div>
                        <div className="overflow-x-auto touch-pan-x">
                            <div className="flex gap-4 sm:touch-pan-x sm:overflow-x-auto" style={{ minWidth: 'max-content' }}>
                                {items.length > 0 ? (
                                    items.map((item, index) => (
                                        <div
                                            key={item.id || index}
                                            className="flex flex-col gap-2 sm:snap-start"
                                        >
                                            <div className="w-[169px] h-[169px] flex-shrink-0 bg-gray-200 rounded-lg overflow-hidden">
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
                                            <p className="font-inter text-sm text-black truncate w-[169px]">
                                                {item.songName || 'Untitled'}
                                            </p>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-500">Không có dữ liệu.</p>
                                )}
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
}
