"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Video, CheckSquare, Calendar, MoreHorizontal } from "lucide-react";

const mobileItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Meetings", href: "/meetings", icon: Video },
  { name: "Tasks", href: "/tasks", icon: CheckSquare },
  { name: "Calendar", href: "/calendar", icon: Calendar },
  { name: "More", href: "/more", icon: MoreHorizontal },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border pb-safe z-50">
      <nav className="flex justify-around">
        {mobileItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center py-3 px-2 flex-1 ${
                isActive ? "text-primary" : "text-text-muted"
              }`}
            >
              <item.icon className="h-6 w-6 mb-1" />
              <span className="text-[10px] font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
