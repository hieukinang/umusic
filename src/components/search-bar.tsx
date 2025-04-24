export default function SearchBar() {
    return (
        <div className="flex justify-center">
            <div className="flex items-center bg-white rounded-full px-4 py-2 w-full max-w-2xl shadow-sm">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                    type="text"
                    placeholder="Search (Ctrl+/)"
                    className="bg-transparent border-none outline-none text-black px-3 w-full"
                />
            </div>
        </div>
    );
}
