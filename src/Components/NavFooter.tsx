'use client';

import { useState } from "react";
import { usePathname } from "next/navigation";
import styles from '@/app/page.module.css';
import Link from "next/link";

type NavFooterProps = {
  href: string;
  scroll?: boolean;
  className?: string | React.ReactNode;
  children: React.ReactNode;
};

const NavFooter = ({ href, scroll, className = '', children }: NavFooterProps) => {
  const pathname = usePathname();
  const [subNav, setSubNav] = useState(false);

  return (
    <li className={`${className} ${pathname === href ? `${styles.navActive}` : ``}`}>
      <Link href={href} scroll={scroll}>
        {children}
      </Link>
    </li>
  );
};

export default NavFooter;
