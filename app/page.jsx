 
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
      <h2>Homepage:</h2>
      <p>Jumpscare audio: https://tuna.voicemod.net/sound/e7c358b2-70fe-41d3-ad1f-fee1f12bc7e8</p>
      <p>Jumpscare: https://giphy.com/gifs/five-nights-withered-foxy-jump-QsgJi30B9ByH7tRhGV</p>
      <p>creepy audio: https://pixabay.com/sound-effects/search/horror/</p>
    </div>

    <div>
      <h2>Haunted objects:</h2>
      <p>Annabelle: https://share.google/Reeq5olh8JcF3Aqk4</p>
      <p>Annabelle: https://share.google/v8Ab1iYWpVaN46oDw</p>
      <p>Annabelle: https://hips.hearstapps.com/hmg-prod/images/esq110125anpannabelledig-003-6902335746892.jpg?crop=1.00xw:0.805xh;0,0.0822xh&resize=640:*</p>

      <p>The Dybbuk Box: https://share.google/SFj2jPmOEmd4Hwpmk</p>
      <p>The Dybbuk Box: https://share.google/Z9dRmHUGaqRvs1TJz</p>

      <p>The Hope Diamond: https://assets.iflscience.com/assets/articleNo/69020/aImg/68047/hopediamond-meta.jpg</p>
      <p>The Hope Diamond: https://share.google/XlZMel16sTJ0xlkdX</p>
      <p>The Hope Diamond: https://share.google/V06zz4npDdEwYAHPA</p>
      <p>The Hope Diamond: https://share.google/k45gZZ3Ok3lnzS8Gz</p>

      <p>Robert the Doll: https://share.google/b7IMaKzEPJ9A7k1Lx</p>
      <p>Robert the Doll: https://share.google/oNsL9WVz6YGheM12u</p>
      <p>Robert the Doll: https://share.google/k7PtFh0XGUrzCrFQe</p>
      <p>Robert the Doll: https://robertthedoll.org/</p>

      <p>The Terracotta Army: https://share.google/EQIj4omACo9u03FVx</p>
      <p>The Terracotta Army: https://share.google/DgHomgvIaiIN8LFIY</p>
      <p>The Terracotta Army: https://th-thumbnailer.cdn-si-edu.com/0BZOOxQYppKNiRaeDAjHEZtD-tk=/fit-in/1600x0/filters:focal(3072x2048:3073x2049)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/eb/07/eb072ca5-f39d-4932-9e8c-8a837218c2e0/gettyimages-522660430.jpg</p>

      <p>Tomb of Tutankhamun: https://share.google/AOXGoUpCJQaEQYFhx</p>
      <p>Tomb of Tutankhamun: https://share.google/r6Q1pls7BbW6x7Wz8</p>
      <p>Tomb of Tutankhamun: https://ychef.files.bbci.co.uk/1280x720/p07sdnkd.jpg</p>

      <p>https://share.google/yNynaa7Td9lc8cm3y</p>

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
      <p>Yokai: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Kyosai%2C_Yokai_image.jpg/500px-Kyosai%2C_Yokai_image.jpg</p>
      <p>Yokai: https://en.wikipedia.org/wiki/Y%C5%8Dkai</p>
      <p>Yokai: https://share.google/nEzQUaWBsBz4kAIIz</p>
      <p>Yokai: https://share.google/6x7LMoen21zbWffmO</p>
      <p>Yokai: https://share.google/aByu5WK7050mlbXOm</p>
      <p>Yokai: https://share.google/JiTy0BFPeT6vsPZMY</p>

      <p>Babi Ngepet: https://share.google/4m4Fz2gaAerTSeOlb</p>
      <p>Babi Ngepet: https://share.google/BlFWMdLKO1qmKCQ3v</p>

      <p>Toyol: https://confirmgood.com/wp-content/uploads/2023/10/toyol-2-supernaturalconfessions.jpg</p>
      <p>Toyol: https://share.google/j44CtR7MrWZfQ9uqo</p>
      <p>Toyol: https://share.google/0jvXMK9sufV63NY9d</p>

      <p>Poltergeist: https://share.google/Sia4bh8trP20icWvK</p>
      <p>Poltergeist: https://share.google/tZ1H4pHB4fArxyAC9</p>

      <p>La Llorona: https://share.google/OtqQdSZG4DolxYS5N</p>
      <p>La Llorona: https://share.google/Oayor0yahBmhTLFa1</p>
      <p>La Llorona: https://share.google/qSnEPl7o4YOlq0Ln9</p>

      <p>Bloody Mary: https://share.google/ATpx1mYznEd6nuPne</p>
      <p>Bloody Mary: https://allthatsinteresting.com/bloody-mary</p>
      <p>Bloody Mary: https://share.google/1Jij5cj7GXiZ6hBiK</p>
      <p>Bloody Mary: https://share.google/zWfKEzV7rGNDlJDhf</p>

      <p>https://share.google/t3TgevXHyCsQ5eJtO</p>
      <p>https://share.google/5T424MqfYHAmJwjco</p>
      <p>https://share.google/6SkvKG4TgSEfDFx0l</p>
      <p>https://share.google/RmNHIsl78f99q5MmB</p>

    </div>

    <div>
      <h2>Games:</h2>
      <p></p>
    </div>

    <div>
      <h2>Ghost equipment:</h2>
      <p>https://www.amazon.sg/Jahyshow-Magnetic-Detector-Paranormal-Equipment/dp/B07WJ46Y1P</p>



<p>//https://www.ebay.com.sg/itm/193786606679</p>



<p>https://www.norielgrove.com/product-p-750912.html</p>



<p>https://www.vice.com/en/article/the-7-most-haunted-places-on-earth-and-why-we-keep-visiting-them/</p>
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





















