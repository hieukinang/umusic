export default function PlayerBar() {
    return (
        <div className="fixed bottom-0 left-0 right-0 h-20 bg-white border-t border-gray-200 flex items-center px-4 z-50">
            <div className="flex items-center gap-4 w-full">
                {/* Music Info */}
                <div className="flex items-center gap-3 w-[30%]">
                    <div className="w-14 h-14 bg-gray-100 rounded">
                        {/* Music thumbnail */}
                    </div>
                    <div>
                        <h4 className="text-black font-medium">Song Name</h4>
                        <p className="text-gray-600 text-sm">Artist Name</p>
                    </div>
                </div>

                {/* Player Controls */}
                <div className="flex flex-col items-center w-[40%]">
                    <div className="flex items-center gap-4 mb-2">
                        <button className="text-gray-600 hover:text-black">
                            {/* Previous button */}
                        </button>
                        <button className="text-black p-2 hover:scale-105">
                            {/* Play button */}
                        </button>
                        <button className="text-gray-600 hover:text-black">
                            {/* Next button */}
                        </button>
                    </div>
                    <div className="flex items-center gap-2 w-full">
                        <span className="text-xs text-gray-600">0:00</span>
                        <div className="h-1 flex-1 bg-gray-200 rounded-full">
                            <div className="h-1 w-0 bg-gray-600 rounded-full"></div>
                        </div>
                        <span className="text-xs text-gray-600">3:45</span>
                    </div>
                </div>

                {/* Volume Control */}
                <div className="flex items-center gap-2 w-[30%] justify-end">
                    <button className="text-gray-600 hover:text-black">
                        {/* Volume icon */}
                    </button>
                    <div className="w-24 h-1 bg-gray-200 rounded-full">
                        <div className="h-1 w-1/2 bg-gray-600 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}