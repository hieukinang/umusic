'use client'
import Image from 'next/image';
import { Heart, SkipBack, Play, SkipForward, Repeat, Shuffle, Volume2 } from 'lucide-react';
import { useState } from 'react';

export default function PlayerBar() {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className="fixed bottom-0 left-0 right-0 h-[78px] bg-white flex items-center px-4 z-[9999]">
            <div className="flex items-center justify-between w-full">
                {/* Music Info */}
                <div className="flex items-center gap-3 min-w-[180px] w-[30%]">
                    <div className="w-14 h-14 bg-gray-700 rounded overflow-hidden">
                        <Image
                            src="/player-bar/Img.png"
                            alt="Song thumbnail"
                            width={54}
                            height={54}
                            className="object-cover"
                        />
                    </div>
                    <div className="flex-1">
                        <h4 className="text-black text-sm font-medium">Như Chưa Bao Giờ</h4>
                        <div className='flex'>
                            <p className="text-gray-600 text-xs">Hồ Quang Hiếu</p>
                            <img src="/player-bar/eye.png" alt="view" className="mx-[5px]" />
                            <p className="text-gray-600 text-xs">10 triêu lượt xem</p>
                        </div>
                    </div>

                    <button
                        className={`hover:text-red-500 ${isLiked ? 'text-red-500' : 'text-gray-600'}`}
                        onClick={() => setIsLiked(!isLiked)}
                    >
                        <Heart
                            size={20}
                            fill={isLiked ? 'currentColor' : 'none'}
                        />
                    </button>
                </div>

                {/* Player Controls */}
                <div className="flex flex-col items-center max-w-[722px] w-[40%] gap-2">
                    <div className="flex items-center gap-6">
                        <button className="text-gray-600 hover:text-black">
                            <Shuffle size={20} />
                        </button>
                        <button className="text-gray-600 hover:text-black">
                            <SkipBack size={20} />
                        </button>
                        <button className="bg-black rounded-full p-2 hover:scale-105">
                            <Play size={20} fill="white" />
                        </button>
                        <button className="text-gray-600 hover:text-black">
                            <SkipForward size={20} />
                        </button>
                        <button className="text-gray-600 hover:text-black">
                            <Repeat size={20} />
                        </button>
                    </div>
                    {/* <div className="flex items-center gap-2 w-full">
                        <span className="text-xs text-[#B3B3B3] min-w-[40px]">1:45</span>
                        <div className="h-1 flex-1 bg-[#4D4D4D] rounded-full">
                            <div className="h-1 w-[40%] bg-[#B3B3B3] rounded-full hover:bg-[#1ED760]"></div>
                        </div>
                        <span className="text-xs text-[#B3B3B3] min-w-[40px]">4:42</span>
                    </div> */}
                </div>

                {/* Volume Control */}
                <div className="flex items-center gap-2 min-w-[180px] w-[30%] justify-end">
                    <p className="text-black">1:45/4:42</p>
                    <button className="text-gray-600 hover:text-black">
                        <Volume2 size={20} />
                    </button>
                    <div className="w-24 h-1 bg-gray-200 rounded-full">
                        <div className="h-1 w-[70%] bg-gray-600 rounded-full hover:bg-black"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}