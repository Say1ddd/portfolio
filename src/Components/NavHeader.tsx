'use client';

import { useState } from "react";
import { usePathname } from "next/navigation";
import styles from '@/app/page.module.css';
import Link from "next/link";

type NavHeaderProps = {
  href: string;
  scroll?: boolean;
  replace?: boolean;
  className?: string | React.ReactNode;
  children: React.ReactNode;
};

const NavHeader = ({ href, scroll, replace, className = '', children }: NavHeaderProps) => {
  const pathname = usePathname();
  const [subNav, setSubNav] = useState(false);

  return (
    <li className={`${className} ${pathname === href ? `${styles.navActive}` : ``}`}>
      <Link href={href} scroll={scroll} replace={replace}>
        {children}
      </Link>
    </li>
  );
};

export default NavHeader;
