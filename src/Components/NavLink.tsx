'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from '@/app/page.module.css';

type NavLinkProps = {
    href: string;
    className?: string;
    children: React.ReactNode;
}

const NavLink = ({ href, className = '', children }: NavLinkProps) => {
  const pathname = usePathname();
  return (
    <li className={`${className} ${pathname == href ? `${styles.active}` : ''}`}>
        <Link href={href}>
            {children}
        </Link>
    </li>
  );
}

export default NavLink;
