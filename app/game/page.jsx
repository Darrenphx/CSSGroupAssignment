import React from "react";
import Image from "next/image";
import styles from "./page.module.css";


function Title() {
    return(
        <div className={styles.titleheader}>
                <h1 className={styles.title}> Paranomal Games </h1>
                
        </div>
    );

}

function Header(){
    return(
        <div className={styles.header}>
            <h2 className={styles.titleheader1}>Step Into the Paranormal</h2>
             <div className={styles.headerpic}>
                <Image 
                    src = "/photos/top-view-vodoo-doll-pins-arrangement.jpg"
                    alt = "header pic"
                    width = "400"
                    height = "255"        
                />
            </div>
            <h3 className={styles.titleheader2}>
  Paranormal games immerse players in haunted worlds, psychological horror,
  and terrifying encounters. Here are the top 5 that defined the genre.
            </h3>
            
        </div>
    )
}

function Game1(){
    return(
        <div className={styles.game}>
            <div className={styles.gameimage}>
                <Image 
                    src = "/photos/ouija-board-candles-arrangement.jpg"
                    alt = "ouija board"
                    width = "400"
                    height = "255"        
                />
            </div>

            <div className={styles.gamedetails}>
                <h2 className={styles.game1textheader}>🕯️ Ouija Board </h2>
                <h3 className={styles.game1text}> The Ouija Board is one of the most infamous paranormal games, believed to act as a bridge between the living and the spirit world. Players place their fingers lightly on a planchette as they ask questions, allowing unseen forces to guide its movement across the board to spell out answers.
                    Often played in dimly lit rooms, the Ouija Board is surrounded by stories of mysterious messages, unexpected encounters, and lingering spirits. Whether viewed as a psychological game or a genuine tool for spirit communication, it has remained a chilling symbol of the unknown for generations.
                </h3>

            </div>
        </div> 
    );
}

function Game2(){
    return(
        <div className={styles.game}>
            <div className={styles.gameimage}>
                <Image 
                    src = "/photos/bloodymary.png"
                    alt = "bloody mary"
                    width = "400"
                    height = "255"        
                />
            </div>

            <div className={styles.gamedetails}>
                <h2 className={styles.game1textheader}>🪞 Bloody Mary</h2>
                <h3 className={styles.game1text}> 
                    Bloody Mary is a chilling paranormal game steeped in urban legend. Players stand in front of a mirror, usually in a darkened room, and chant her name repeatedly. Legend says that if performed correctly, the spirit of Bloody Mary will appear in the mirror — sometimes to reveal secrets, sometimes to terrify.
                    Often considered more of a dare than a game, Bloody Mary has inspired countless stories of unexplained reflections, sudden movements, and eerie whispers. It's a test of courage, curiosity, and the thin line between reality and the supernatural. </h3>

            </div>
        </div> 
    );

}

function Game3(){
    return(
        <div className={styles.game}>
            <div className={styles.gameimage}>
                <Image 
                    src = "/photos/reddooryellowdoor.png"
                    alt = "reddoor yellowdoor"
                    width = "400"
                    height = "255"        
                />
            </div>

            <div className={styles.gamedetails}>
                <h2 className={styles.game1textheader}>🚪 Red Door Yellow Door</h2>
                <h3 className={styles.game1text}> 
                    Red Door, Yellow Door is a mysterious and eerie game that delves into the realm of lucid dreaming and altered consciousness. Often described as a “psychological paranormal experience,” players follow a series of instructions to enter a trance-like state, navigating imaginary doors that lead to strange and unsettling places.
                    The game is not just about fear—it's about curiosity, perception, and what lies hidden in the mind. Stories from participants often include surreal encounters, strange visions, and a lingering sense of the unknown that blurs the line between reality and imagination. </h3>

            </div>
        </div> 
    );

}

function Game4(){
    return(
        <div className={styles.game}>
            <div className={styles.gameimage}>
                <Image 
                    src = "/photos/elevator.png"
                    alt = "elevator"
                    width = "400"
                    height = "255"        
                />
            </div>

            <div className={styles.gamedetails}>
                <h2 className={styles.game1textheader}>🛗 The Elevator Game</h2>
                <h3 className={styles.game1text}> 
                    The Elevator Game is a mysterious ritual said to transport players to another dimension. Originating from urban legends, the game involves riding an elevator alone in a precise sequence of floors while following strict rules. Breaking the rules is said to bring terrifying consequences.
                    Players report eerie sensations, sudden appearances of shadowy figures, or glimpses of a parallel world. The Elevator Game blends suspense, fear, and curiosity, making it one of the most unnerving paranormal experiences to attempt—but only for the bravest of the brave </h3>
            </div>
        </div> 
    );

}

function Game5(){
    return(
        <div className={styles.game}>
            <div className={styles.gameimage}>
                <Image 
                    src = "/photos/fourcorners.png"
                    alt = "four corners"
                    width = "400"
                    height = "255"        
                />
            </div>

            <div className={styles.gamedetails}>
                <h2 className={styles.game1textheader}>🧱 The Corner Game</h2>
                <h3 className={styles.game1text}> 
                    The Corner Game is a haunting ritual rooted in urban legend, said to summon unseen entities through silence and isolation. Players must stand alone in a dark room, facing a corner while following a strict set of rules and spoken phrases.
                    Any mistake is believed to invite something unwanted into the space. Those who attempt the ritual report whispers, sudden chills, and the unsettling feeling of being watched. The Corner Game relies on fear, focus, and darkness, making it one of the most unsettling and distrubing paranormal rituals ever shared.</h3>
            </div>
        </div> 
    );

}




export default function Game(){
    return(
        <div className={styles.pagebackground}>
            <Title/>
            <div className={styles.background}>
                <Header/>
                <Game1/>
                <Game2/>
                <Game3/>
                <Game4/>
                <Game5/>
               

            </div>

        </div>
    );

}

