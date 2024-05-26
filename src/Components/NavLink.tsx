'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from '@/app/page.module.css';
import { useRouter } from "next/navigation";

type NavLinkProps = {
    href: string;
    className?: string|React.ReactNode;
    children: React.ReactNode;
}

const NavLink = ({ href, className = '', children }: NavLinkProps) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <li className={`${className} ${pathname == href ? `${styles.active}` : ''}`}>
        <a onClick={() => {router.replace(href)}}>
            {children}
        </a>
    </li>
  );
}

export default NavLink;
