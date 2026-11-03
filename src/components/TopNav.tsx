"use client";

import { Bell, Search, Settings } from "lucide-react";
import Link from "next/link";

export default function TopNav() {
  return (
    <header className="bg-card border-b border-border h-16 flex items-center justify-between px-6 sticky top-0 z-10 hidden md:flex">
      <div className="flex-1 flex">
        <div className="w-full max-w-lg lg:max-w-xs relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-text-light" />
          </div>
          <input
            className="block w-full pl-10 pr-3 py-2 border border-border rounded-md leading-5 bg-gray-50 text-text-main placeholder-text-light focus:outline-none focus:bg-white focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-colors"
            placeholder="Search meetings, tasks..."
            type="search"
          />
        </div>
      </div>
      <div className="ml-4 flex items-center space-x-4">
        <button className="p-1 text-text-muted hover:text-text-main relative">
          <Bell className="h-6 w-6" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-error"></span>
        </button>
        <button className="p-1 text-text-muted hover:text-text-main">
          <Settings className="h-6 w-6" />
        </button>
        <Link href="/meetings/create" className="btn-primary ml-2">
          + Create Meeting
        </Link>
      </div>
    </header>
  );
}
