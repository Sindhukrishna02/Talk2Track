"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Calendar as CalendarIcon,
  Video,
  CheckSquare,
  BarChart2,
  Map,
  Users,
  Bot
} from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Meetings", href: "/meetings", icon: Video },
  { name: "Calendar", href: "/calendar", icon: CalendarIcon },
  { name: "My Tasks", href: "/tasks", icon: CheckSquare },
  { name: "Reports", href: "/reports", icon: BarChart2 },
  { name: "Rooms & Resources", href: "/resources", icon: Map },
  { name: "Visitors", href: "/visitors", icon: Users },
  { name: "AI Assistant", href: "/ai", icon: Bot },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-64 bg-card border-r border-border h-screen sticky top-0">
      <div className="p-6">
        <Link href="/">
          <span className="text-xl font-bold text-primary tracking-tight">TALK2TRACK</span>
        </Link>
      </div>
      <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                isActive
                  ? "bg-primary-light text-primary"
                  : "text-text-muted hover:bg-gray-50 hover:text-text-main"
              }`}
            >
              <item.icon className={`mr-3 h-5 w-5 ${isActive ? "text-primary" : "text-text-light"}`} />
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-border">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
            S
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-text-main">Sindhu</p>
            <p className="text-xs text-text-muted">Pro Plan</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
