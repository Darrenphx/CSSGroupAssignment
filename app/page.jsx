import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

function Intro() {
  return (
    <main className={styles.body}>
      <div className={styles.headerimage}>
        <Image
          src="/photos/103125-lifestance-fear.webp"
          alt="header photo"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <h1 className={styles.headertitle}>Paranormal</h1>
        <div className={styles.scrolldown}>Scroll down</div>
      </div>
    </main>
  );
}

function Heading(){
  return(
    <div>
      <h1 className={styles.heading}> Welcome to the Unknown </h1>
      <div className={styles.subheading}>
        
        <p> From abandoned places to unsettling encounters, this site explores stories that exist between myth and reality. </p>
        <p> Not everything can be explained. </p>
        <p className={styles.scrollcaution}> Scroll with caution </p>
      </div>
      

    </div>

  );
}

function Navbar(){
  return(
    <nav className={styles.navbar}>
      <a href="overview"> OverView </a>
      <a href="overview"> Objects and Equipment </a>
      <a href="overview"> Places </a>
      <a href="overview"> Games </a>
      <a href="overview"> Ghosts </a>
      <a href="overview"> Evidence and Beliefs </a>
    </nav>
  );
}






function Test(){
  return(
    <div> hello </div>

  );
}


export default function Page(){
  return(
    <div className={styles.background}>
      <Intro/>
      <Heading/>
      <Navbar/>
     

    </div>
    
  );
}















