"use client"; 
import styles from "./navbar.module.css"
import {useState} from "react";
import Link from "next/link";


export default function Navbar(){
    const [dropdownvisible, setdropdownvisible] = useState(false);
    return(
    <nav className={styles.navbar}>
    <Link className={styles.navitem} href="/"> Home </Link>
    <Link className={styles.navitem} href="/haunted_places"> Haunted Places </Link>
    <Link className={styles.navitem} href="/game"> Games </Link>
    <div className={styles.dropdown}
    onMouseEnter={()=> setdropdownvisible(true)}
    onMouseLeave={()=> setdropdownvisible(false)} >

        <button className={styles.navitem}>
            More ▾
        </button>
        
        {dropdownvisible && (
            <div className={styles.dropdownmenu}>
                <Link className={styles.dropdownitem} href="Page1"> Page 1 </Link>
                <Link className={styles.dropdownitem} href="Page2"> Page 2 </Link>
                <Link className={styles.dropdownitem} href="Page3"> Page 3 </Link>
                <Link className={styles.dropdownitem} href="Page4"> Page 4 </Link>
                <Link className={styles.dropdownitem} href="Page5"> Page 5 </Link>



            </div>

        )}
        
        
    </div>

    </nav>
    )
}