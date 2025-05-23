'use client';

import { useState, useEffect, useRef } from 'react';

export default function SearchBar() {
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const menuRef = useRef<HTMLDivElement>(null);

    const languages = [
        { name: 'English', img: '/search-bar/flagengland.png' },
        { name: 'Việt Nam', img: '/search-bar/flagVietNam.png' },
        { name: 'Lào', img: '/search-bar/flagLao.png' },
    ];

    const handleLanguageSelect = (langName: string) => {
        setSelectedLanguage(langName);
        // Không đóng dropdown ở đây
    };

    // Đóng menu khi click bên ngoài
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsLanguageOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="flex justify-between items-center px-4" ref={menuRef}>
            {/* Search Box */}
            <div className="flex items-center bg-white rounded-[8px] px-4 py-2 w-[555px] shadow-sm">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                    type="text"
                    placeholder="Search (Ctrl+/)"
                    className="bg-transparent border-none outline-none text-black px-3 w-full"
                />
            </div>

            {/* Icon Section */}
            <div className="flex items-center gap-4 ml-4">
                {/* Language Selector */}
                <div className="relative">
                    <button
                        className="p-2 rounded-full hover:bg-gray-100"
                        onClick={() => setIsLanguageOpen((prev) => !prev)}
                    >
                        <img
                            src="/search-bar/Language.png"
                            alt="Language"
                            className="w-4 h-4"
                        />
                    </button>

                    {isLanguageOpen && (
                        <div className="absolute right-0 mt-2 w-[160px] bg-white rounded-lg shadow-lg z-50">
                            <div className="py-2">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.name}
                                        onClick={() => handleLanguageSelect(lang.name)}
                                        className="w-full px-4 py-2 text-left text-black flex items-center gap-2 hover:bg-gray-50"
                                    >
                                        <img src={lang.img} alt={lang.name} className="w-5 h-5" />
                                        <span>{lang.name}</span>
                                        <span className="ml-auto">
                                            {selectedLanguage === lang.name ? (
                                                <div className="w-4 h-4 rounded-full border-2 border-red-500 flex items-center justify-center">
                                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                                </div>
                                            ) : (
                                                <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
                                            )}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Bell Icon */}
                <button className="p-2 rounded-full hover:bg-gray-100">
                    <img src="/search-bar/bell.png" alt="Bell" className="w-4 h-4" />
                </button>

                {/* Settings Icon */}
                <button className="p-2 rounded-full hover:bg-gray-100">
                    <img src="/search-bar/Setting.png" alt="Settings" className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
