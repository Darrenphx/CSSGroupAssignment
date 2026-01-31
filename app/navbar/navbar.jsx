//test

"use client";

import styles from "./navbar.module.css";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [dropdownvisible, setdropdownvisible] = useState(false);
  return (
    <>
      <div className={styles.header}>
        <Link href="/" className={styles.headerLink}>
          <Image
            src="/photos/ghost-8250317_640.png"
            alt="Logo"
            width={48}
            height={48}
            className={styles.logo}
          />
          <span className={styles.siteName}>The Abandoned Archive</span>
        </Link>
      </div>
      <nav className={styles.navbar}>
    <Link className={styles.navitem} href="/"> Home </Link>
    <Link className={styles.navitem} href="/ghost_equipment"> Ghost Equipment </Link>
    <Link className={styles.navitem} href="/haunted_places"> Haunted Places </Link>
    <Link className={styles.navitem} href="/game"> Games </Link>
    <Link className={styles.navitem} href="/types_of_ghosts"> Supernatural Beings </Link>
    <div className={styles.dropdown}
    onMouseEnter={()=> setdropdownvisible(true)}
    onMouseLeave={()=> setdropdownvisible(false)} >

        <button className={styles.navitem}>
            More ▾
        </button>
        
        {dropdownvisible && (
            <div className={styles.dropdownmenu}> 
                <Link className={styles.dropdownitem} href="/haunted_objects"> Haunted Objects </Link>
                <Link className={styles.dropdownitem} href="/singapore-beliefs">Singapore Beliefs</Link>
                <Link className={styles.dropdownitem} href="/quiz"> Quiz </Link>
                <Link className={styles.dropdownitem} href="/forum">Ghost Evidence Forum</Link>



            </div>

        )}
        
        
    </div>
      </nav>
    </>
  );
}