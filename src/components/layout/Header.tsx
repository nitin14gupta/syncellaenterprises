'use client';
import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
];

export default function Header() {
    const pathname = usePathname();
    const logoRef = useRef<HTMLDivElement>(null);

    return (
        <header className="fixed top-0 left-0 w-full z-50 py-4 bg-black/10 backdrop-blur-md">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div ref={logoRef} className="flex items-center">
                    <Link href="/" className="text-xl font-bold">
                        Syncella<span className="text-blue-500">Enterprises</span>
                    </Link>
                </div>

                <nav>
                    <ul className="flex space-x-8">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    href={item.path}
                                    className={`relative px-1 py-2 transition-colors duration-300 hover:text-blue-400 ${pathname === item.path ? 'text-blue-500' : 'text-white'
                                        }`}
                                >
                                    {item.name}
                                    {pathname === item.path && (
                                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 transform" />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
