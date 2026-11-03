import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import MobileNav from "@/components/MobileNav";

export const metadata: Metadata = {
  title: "Talk2Track",
  description: "Intelligent Meeting Operations & AI Action Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased text-text-main bg-background flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <TopNav />
          <main className="flex-1 overflow-y-auto p-4 md:p-8 pb-24 md:pb-8">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </main>
        </div>
        <MobileNav />
      </body>
    </html>
  );
}
