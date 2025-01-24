'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Navigation() {
  const pathname = usePathname();
  
  return (
    <nav className="border-b border-[#20B2AA]/30 bg-[#0F2337]">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center">
          <div className="flex">
            <Link 
              href="/"
              className={cn(
                "text-gray-300 hover:text-[#20B2AA] px-3 py-2 text-sm font-medium transition-colors",
                pathname === "/" && "text-[#20B2AA]"
              )}
            >
              Home
            </Link>
            <Link 
              href="/joinus/intern"
              className={cn(
                "text-gray-300 hover:text-[#20B2AA] px-3 py-2 text-sm font-medium transition-colors",
                pathname === "/joinus/intern" && "text-[#20B2AA]"
              )}
            >
              Join as Intern
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}