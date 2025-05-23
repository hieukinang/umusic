import "./globals.css";
import { Bounce, ToastContainer } from "react-toastify";
import RightSidebar from "@/components/right-sidebar";
import LeftSidebar from "@/components/left-sidebar";
import SearchBar from "@/components/search-bar";
import PlayerBar from "@/components/player-bar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen">
      <body className="h-full overflow-auto"> {/* Thêm overflow-auto vào body để sử dụng thanh cuộn mặc định */}
        <div className="flex h-full justify-center">
          {/* Main Content Area */}
          <div className="flex flex-col w-full 
                          sm:max-w-full 
                          md:max-w-[calc(1536px-480px)] 
                          lg:max-w-[calc(1536px-540px)] 
                          xl:max-w-[calc(1536px-600px)]">
            {/* Left Sidebar */}
            <aside className="w-[240px] border-b">
              <LeftSidebar />
            </aside>

            {/* Main Content */}
            <main className="flex-1 px-4 py-0">
              {/* SearchBar Container */}
              <div className="sticky top-0 z-1 bg-[#F5F5F5] border-b px-4 py-2">
                <SearchBar />
              </div>

              {children}
              <PlayerBar />
            </main>
            <aside className="w-[300px] border-l h-full fixed right-0 z-1">
              <RightSidebar />
            </aside>
          </div>

        </div>
      </body>
    </html>
  );
}
