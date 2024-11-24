"use client"; // Mark this file as a Client Component

import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbars = () => {
    const pathname = usePathname();

    // Links array for dynamic rendering
    const links = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/project", label: "Project" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <nav className="md:mx-auto flex flex-wrap items-center text-base justify-center">
            <ul className="flex space-x-5">
                {links.map((link) => (
                    <li key={link.href} className="relative">
                        <Link
                            href={link.href}
                            className={`hover:text-gray-100 ${
                                pathname === link.href
                                    ? "text-white font-bold"
                                    : "text-gray-900"
                            }`}
                        >
                            {link.label}
                        </Link>
                        {/* Underline for active link */}
                        {pathname === link.href && (
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white" />
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbars;
