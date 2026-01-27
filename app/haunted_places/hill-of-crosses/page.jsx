"use client";

import Link from "next/link";
import "./indivpage.css";


export default function Hill() {
  return (
    <div className="Page">
      <div className="backWrapper">
        <Link
          href="/haunted_places"
          className="backLink">
        
          ← Back to all haunted places
        </Link>
      </div>

      <h1 className="title">
        Hill of Crosses, Lithuania
      </h1>

      <img
        src="/photos/hill.jpg"
        alt="Hill of Crosses"
        className="Image"
      />

      <p className="description">
        The Hill of Crosses in Lithuania holds over 200,000 crosses left by pilgrims. Locals report
        strange lights and eerie voices at night. The sacred yet unsettling atmosphere makes it
        one of the most mysterious and haunted sites in Europe.
      </p>
      {/* Origins Section */}
      <h2 className="sectionTitle">
        Origins
      </h2>
      <p className="sectionText" >
        the most renowned story of the hill’s creation is the tale of a desperate father
         whose daughter suddenly fell gravely ill. As the girl lay on her death bed, the 
         father had a vision of a woman who told him to make a wooden cross and place it
          on a nearby hill; if he did so, she said, his daughter would recover. In the 
          morning, the despairing man hurriedly carved a wooden cross and rushed to the 
          hill. When he returned home, his daughter greeted him at the doorway, perfectly 
          well again. Ever since, people have been leaving crosses in hope their prayers 
          will be answered. Yet not every cross has been left by an optimistic pilgrim 
          – some are instead reminders of quiet rebellion. After surviving medieval 
          sieges by the invading German crusaders and 19th-Century uprisings by 
          Lithuanians against Russian Tsar Alexander II, the Hill of Crosses faced
          its most aggressive threat: the Soviet Union. In an effort to stamp out 
          Christianity in the Eastern bloc, the Soviet government attempted to level 
          the hill numerous times during the 1960s and ‘70s: they bulldozed it, 
          burned the wooden crosses and removed the metal and stone ones for scrap 
          and construction. People who brought crosses to the hill were fined and 
          incarcerated. But the crosses on the mound just kept multiplying, left 
          in the dead of night as an act of defiance against religious oppression. 
          Now, more than a quarter of a century after the fall of the Soviet Union, 
          the crosses still stand.
      </p>

      {/* Sightings Section */}
      <h2 className="sectionTitle">
        Sightings
      </h2>
      <div className="imageRow">
      <img
        src="/photos/crosses.webp"
        alt="Man standing in full of crosses and looking at eerie statue"
        className="visual"
        //https://allthatsinteresting.com/hill-of-crosses
      />

      <img
        src="/photos/monk.webp"
        alt="a tall 6ft monk holding crucifix shadow looming behind person"
        className="visual"
        //https://www.thesun.co.uk/news/7116742/ghost-hunter-paranormal-activity-roche-abbey-yorkshire/
      />

      <img
        src="/photos/graveyard.jpeg"
        alt="sunset with many eerie crosses"
        className="visual"
        //https://deepbaltic.com/2016/05/21/the-hill-of-crosses-a-monument-to-the-defiant-spirit-of-lithuania/
      />
      </div>
      <p className="sectionText" >
        Locals say that you can glimpse a ghost procession of monks at the foot of the 
        hill at sunrise. Throughout the ages, magical appearances, visions of saints 
        and sightings of ghosts have been a part of the hill’s history
      </p>


      {/* Additional Notes (optional) */}
      <h2 className="sectionTitle">
        Fun Fact
      </h2>
      <p className="sectionText" >
        The Hill of Crosses, minimally maintained by the municipality of Siauliai 
        and local Franciscan monks, is now covered in more than 100,000 crucifixes 
        and other religious icons – and the number is constantly increasing.
      </p>
    </div>
  );
}
