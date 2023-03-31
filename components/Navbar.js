import Link from "next/link"
import styles from '@/styles/Navbar.module.css'

export function Navbar() {
    return (<ul className={styles.navbar}>
        <li>
            <Link href='/'>Home</Link>
        </li>
        <li>
            <Link href='/todos'>Todos</Link>
        </li>
        <li>
            <Link href='/products'>Produtos</Link>
        </li>
        <li>
            <Link href='/about'>Sobre nós</Link>
        </li>
        <li>
            <Link href='/contact'>contact</Link>
        </li>
    </ul>)
}