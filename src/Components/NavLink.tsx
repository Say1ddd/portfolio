import Link from "next/link"
import styles from "@/app/Components.module.css"

type NavLinkProps = {
    href: string,
    children: React.ReactNode,
}

const NavLink = ({href, children}: NavLinkProps) => {
  return (
    <li className={styles.navlinkList}>
        <Link href={href} className={styles.navlinkLink}>
            {children}
        </Link>
    </li>
  )
}

export default NavLink