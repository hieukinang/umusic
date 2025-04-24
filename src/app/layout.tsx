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
      <body className="">
        <div className="flex h-full justify-center">
          {/* Main Content Area */}
          <div className="flex flex-col w-full max-w-[calc(1536px-540px)]">
            {/* Left Sidebar */}
            <aside className="w-[240px] border-b">
              <LeftSidebar />
            </aside>
            <main className="flex-1 overflow-y-auto px-10 py-0">
              {/* SearchBar Container */}
              <div className="sticky top-0 z-10 bg-[#F5F5F5] border-b px-4 py-2">
                <SearchBar />
              </div>

              {children}
            </main>
          </div>

          {/* Right Sidebar */}
          <aside className="w-[300px] border-l h-full fixed right-0">
            <RightSidebar />
          </aside>
        </div>
      </body>
    </html>
  );
}
