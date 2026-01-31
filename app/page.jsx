 
 "use client";
 import React from "react";
  import Image from "next/image";
  import styles from "./page.module.css";
  import Link from "next/link";
  import { useState, useEffect } from "react";


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
        <a href="#overview"> Overview </a>
        <a href="#objects"> Objects and Equipment </a>
        <a href="#places"> Haunted Places </a>
        <a href="#games"> Games </a>
        <a href="#ghosts"> Supernatural Beings </a>
        <a href="#beliefs"> Paranormal's Beliefs </a>
        <a href="#forum/quiz"> Forum/Quiz </a>

      </nav>
    );
  }

  function Overview(){
    return(
      <section id="overview" className={styles.overview}>
        <div>
          <h2 className={styles.heading}> Overview </h2>
          <p className={styles.para}> This website explores paranormal phenomena through haunted objects, infamous locations, interactive experiences, and reported evidence. From tools used by investigators to stories shared by believers, each section offers a different perspective on the unexplained. </p>
          <p className={styles.paras}> Please don't get a heart attack </p>
        </div>
        
      </section>

    );
  }

  function Objects(){
    return(
      <section id="objects" className={styles.section}>
        <Image
          src="/photos/618mjYm6phL._AC_SL1000_.jpg"
          alt="Objects"
          width={100}
          height={100}
          className={[styles.sectionImage, styles.tiltleft].join(" ")}


        />

        <div>
          <h2 className={styles.heading}>Ghost Objects & Equipment</h2>
          <p>
            Objects and Equipments can carry memories — and some are said to carry far more than that especially haunted ones.
            View some objects and equipment that are believed to be linked to paranormal activity.
          </p>
          <Link href="/haunted_objects" className={styles.link}>Explore Objects →</Link>
          <Link href="/ghost_equipment" className={styles.link}>Explore Equipment →</Link>
        </div>
      </section>
    );

  }

  function Places(){
    return(
      <section id="places" className={styles.section}>
        <Image
          src="/photos/hauntedhouse.avif"
          alt="Objects"
          width={100}
          height={100}
          className={[styles.sectionImage, styles.tiltmoreright].join(" ")}
        />

        <div>
          <h2 className={styles.heading}>Haunted Places</h2>
          <p> 
            This section introduces locations that are commonly associated with paranormal activity. 
            It explores the history of these places, the types of hauntings reported, and why they are believed to be connected to ghostly encounters.
          </p>
          <Link href="/haunted_places" className={styles.link}>Explore Places →</Link>

        </div>
      </section>
    );

  }

  function Games(){
    return(
      <section id="games" className={styles.section}>
        <Image
          src="/photos/top-view-vodoo-doll-pins-arrangement.jpg"
          alt="Games"
          width={100}
          height={100}
          className={[styles.sectionImage, styles.tiltmoreleft].join(" ")}
        />

        <div>
          <h2 className={styles.heading}>Paranormal Games</h2>
          <p> 
            Interactive experiences designed to test your nerves and curiosity.
              Explore haunted environments, uncover hidden clues, and make choices that shape your encounter with the unknown. 
              Each game offers a different perspective on paranormal fear, blending tension with exploration.
          </p>
          <Link href="/game" className={styles.link}>Play Games →</Link>

        </div>
      </section>
    );

  }

  function Ghosts(){
    return(
      <section id="ghosts" className={styles.section}>
        <Image
          src="/photos/scary-ghost-on-dark-background-generative-ai-photo.jpg"
          alt="Ghosts"
          width={100}
          height={100}
          className={[styles.sectionImage, styles.tiltleft].join(" ")}
        />

        <div>
          <h2 className={styles.heading}> Supernatural Beings </h2>
          <p> 
            Not all supernatural beings behave the same way. Some are believed to linger in one place, while others interact with their surroundings or people.
            Sightings and encounters are often described differently depending on the entity and the location.
            Discover the different types of supernatural beings that have been reported.
          </p>
          <Link href="/types_of_ghosts" className={styles.link}>Discover Supernatural Beings →</Link>

        </div>
      </section>
    );

  }

  function Beliefs(){
    return(
      <section id="beliefs" className={styles.section}>
        <Image
          src="/photos/paranormal-belief-stress-neurosicence.jpg"
          alt="Beliefs"
          width={100}
          height={100}
          className={[styles.sectionImage, styles.tiltmoreright].join(" ")}
        />

        <div>
          <h2 className={styles.heading}> Paranormal Beliefs </h2>
          <p> 
            Beliefs about the paranormal differ across cultures and individuals.
            Some people are convinced that spirits and unexplained phenomena are real, while others view them as psychological or cultural interpretations. 
            Personal experiences, folklore, and tradition often shape how people understand and explain paranormal encounters.
          </p>
          <Link href="/singapore-beliefs" className={styles.link}>Read Beliefs →</Link>

        </div>
      </section>
    );

  }

  function Forum_Quiz(){
    return(
      <section id="forum/quiz" className={styles.forum_quiz}>
        <div className={styles.forumquizgrid}>
          <h2 className={styles.heading}> Think You Know the Paranormal? </h2>
          <div className={styles.forum}>
            <p className={styles.forumtext}> 
              A space for sharing experiences, theories, and questions about the paranormal.
              Discuss sightings, strange encounters, and unexplained events with others who are curious about the unknown. Whether you’re a skeptic or a believer, every perspective adds to the mystery.
            </p>
            <Link href="/forum" className={styles.forumlink}> Join the Forum → </Link>
          </div>
          <div className={styles.quiz}>
            <p className={styles.quiztext}> 
              How well do you really understand the paranormal?
              Test your knowledge with questions about haunted locations, ghost encounters, urban legends, and unexplained events. Some answers may surprise you.
            </p>
            <Link href="/quiz" className={styles.quizlink}> Take the Quiz → </Link>
          </div>
          
        
        </div>
        
      </section>

    );
  }

function Jumpscare() {
  const [show, setShow] = useState(false);
  const soundRef = React.useRef(null);

  useEffect(() => {
    if (show) {
      const sound = new Audio("/audio/jumpscare2.mp3");
      //https://tuna.voicemod.net/sound/e7c358b2-70fe-41d3-ad1f-fee1f12bc7e8
      sound.volume = 1;
      sound.play();
    }
  }, [show]);

  useEffect(() => {
    if (show && soundRef.current) {
      soundRef.current.currentTime = 0; // rewind
      soundRef.current.play();
    }
  }, [show]);

  return (
    <div className={styles.clickme}>
      <button
        className={styles.jumpscareBtn}
        onClick={() => setShow(true)}
      >
        Click Me
      </button>

      {show && (
        <div
          className={styles.jumpscare}
          onClick={() => setShow(false)}
        >
         <Image
            src="/photos/fnaf.gif"
            //https://giphy.com/gifs/five-nights-withered-foxy-jump-QsgJi30B9ByH7tRhGV
            alt="Jumpscare"
            width={600}
            height={600}
            unoptimized
          />
        </div>
      )}
    </div>
  );
}
  export default function Page(){
    return(
      <div className={styles.background}>
        <Intro/>
        <Heading/>
        <Navbar/>
        <Overview/>
        <Objects/>
        <Places/>
        <Games/>
        <Ghosts/>
        <Beliefs/>
        <Forum_Quiz/>
        <Jumpscare/>
        <Credits/>
        
      

      </div>
      
    );
  }

function Credits() {
return(
  <>
    <h3 className={styles.credits}> Website made by Chuansenn, Darren, Mahima and Yu Yao </h3>
    <div className={styles.ref}>
      <h2>References</h2>

    <div>
      <h2>Haunted objects:</h2>
      <p></p>
    </div>

    <div>
      <h2>Haunted Places:</h2>
      <p>https://salemghosts.com/the-most-haunted-places-in-salem/</p>
 
<p>https://thelittlehouseofhorrors.com/corvin-castle/</p>
 
<p>https://usghostadventures.com/haunted-houses/lizzie-borden-house/</p>
 
<p>https://www.visitphilly.com/things-to-do/attractions/eastern-state-penitentiary/</p>
 
<p>https://matadornetwork.com/read/lithuania-hill-of-crosses/</p>
 
<p>https://www.hauntedrooms.co.uk/the-tower-of-london-ghosts</p>
 
<p>https://www.vice.com/en/article/the-7-most-haunted-places-on-earth-and-why-we-keep-visiting-them/</p>
 
<p>Corvin</p>
 
<p>https://amyscrypt.com/corvin-castle-legends-romania/</p>
 
<p>https://becomingthemuse.net/2015/11/03/of-footsteps-in-the-dark/</p>
 
<p>https://www.freepik.com/premium-ai-image/haunted-house-scene-with-ghostly-apparition-appearing-top-grand-staircase-shrouded-mist_354961458.htm</p>
 
<p>hill of crosses</p>
 
<p>https://allthatsinteresting.com/hill-of-crosses</p>
 
<p>https://www.thesun.co.uk/news/7116742/ghost-hunter-paranormal-activity-roche-abbey-yorkshire/</p>
 
<p>https://deepbaltic.com/2016/05/21/the-hill-of-crosses-a-monument-to-the-defiant-spirit-of-lithuania/</p>
 
<p>lizzie borden</p>
 
<p>https://www.facebook.com/UEPerimeters/photos/a.382279002336409/389196508311325/?id=359014327996210</p>
 
<p>https://lizzie-borden.com/</p>
 
<p>https://www.darkwhimsicalart.com/blogs/news/a-night-in-the-infamous-lizzie-borden-house-ghost-investigation-and-haunting-history?srsltid=AfmBOoppqZeT2F06AeG9BXpUVKqAlSb3UrpYUCnXhDs8FM3JvTBqHHV9</p>
 
<p>penitientiary</p>
 
<p>//https://adventure.com/eastern-state-penitentiary/</p>
 
<p>https://imgur.com/a/yWSBCJ2</p>
 
<p>https://www.sheptonmalletprison.com/paranormal-news/ghost-stories-from-behind-bars-the-white-lady/</p>
 
<p>Salem</p>
 
<p>https://949whom.com/witch-house-cowin-salem-haunted/</p>
 
<p>https://redskiesmagazinessu.wordpress.com/2015/01/18/salem-ghost-tour/</p>
 
<p>https://oddencounters.com/ghosts/Real-Ghost-Photos_Salem-Cemetery.html</p>
 
<p>tower</p>
 
<p>https://salemghosts.com/the-most-haunted-places-in-salem/</p>
 
<p>https://thelittlehouseofhorrors.com/corvin-castle/</p>
 
<p>https://usghostadventures.com/haunted-houses/lizzie-borden-house/</p>
 
    </div>

    <div>
      <h2>Supernatural beings:</h2>
      <p></p>
    </div>

    <div>
      <h2>Games:</h2>
      <p></p>
    </div>

    <div>
      <h2>Ghost equipment:</h2>
      <p></p>
    </div>

    <div>
      <h2>Singapore beliefs:</h2>
      <p></p>
    </div>

    <div>
      <h2>Ghost evidence forum:</h2>
      <p></p>
    </div>
    </div>
    
  </>
);
}





















