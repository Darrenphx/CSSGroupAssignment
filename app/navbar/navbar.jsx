"use client"; 
import styles from "./navbar.module.css"
import Link from "next/link";


export default function Navbar(){
    return(
    <nav className={styles.navbar}>
    <Link className={styles.navitem} href="/"> Home </Link>
    <Link className={styles.navitem} href="/hauntedplaces"> Haunted Places </Link>
    <Link className={styles.navitem} href="/test1"> Test1 </Link>
    <Link className={styles.navitem} href="/test2"> Test2 </Link>
    </nav>
    )
}