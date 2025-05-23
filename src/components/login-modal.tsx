'use client';

export default function LoginModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-100" style={{ backgroundColor: 'rgba(18, 18, 18, 0.7)' }}>
            <div className="bg-white rounded-lg p-6 w-[498px] relative">
                <button
                    onClick={onClose}
                    className="absolute right-6 top-6 text-gray-500 hover:text-gray-700"
                >
                    ×
                </button>
                <div className="flex flex-col items-center gap-4 pt-6">
                    <div className="flex flex-col items-center gap-4">
                        <h2 className="text-xl font-semibold text-black">Login</h2>
                        <img
                            src="/right-sidebar/login.png"
                            alt="login Logo"
                            className="w-16 h-16"
                        />
                        <p className="text-center text-gray-600">You are not logged in</p>
                        <p className="text-center text-sm text-gray-500">Please login with LaoID for the best experience</p>
                        <button
                            className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors"
                            onClick={() => {/* Add login logic */ }}
                        >
                            Login with LaoID
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}