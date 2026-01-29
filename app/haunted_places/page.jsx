"use client";
import "./places.css";
import Link from "next/link";
export default function Places(){
    const hauntedPlaces = [
    {
      name: "Salem, Massachusetts",
      id:"salem",
      image: "/photos/Salem.webp",
      //https://salemghosts.com/the-most-haunted-places-in-salem/
    },
    {
      name: "Corvin Castle, Romania",
      id:"corvin",
      image:"/photos/corvin.png",
      //https://thelittlehouseofhorrors.com/corvin-castle/
    },
    {
      name: "Lizzie Borden House, Fall River, Massachusetts",
      id:"lizzie-borden",
      image:"/photos/lizzie.jpeg",
      //https://usghostadventures.com/haunted-houses/lizzie-borden-house/
    },
    {
      name: "Eastern State Penitentiary, Philadelphia",
      id:"penitentiary",
      image:"/photos/eastern.jpg",
      //https://www.visitphilly.com/things-to-do/attractions/eastern-state-penitentiary/
    },
    {
      name: "Hill of Crosses, Lithuania",
      id:"hill-of-crosses",
      image:"/photos/hill.jpg",
      //https://matadornetwork.com/read/lithuania-hill-of-crosses/
    },
    {
      name:"Tower of London, England",
      id:"tower",
      image:"/photos/tower.webp",
      //https://www.hauntedrooms.co.uk/the-tower-of-london-ghosts
    }
    //https://www.vice.com/en/article/the-7-most-haunted-places-on-earth-and-why-we-keep-visiting-them/
  ];



   return (
    <>
      <style jsx>{`
        .container {
          min-height: 100vh;
          background: linear-gradient(to bottom, #020617, #020617);
          padding-bottom: 4rem;
          width: 100%;
          box-sizing: border-box;
        }
        
        .topBar {
          height: 60px;
          background: linear-gradient(to right, #04214a, #888);
        }
        
        .title {
          text-align: center;
          margin: 5rem;
          color: #ffffff;
          margin-bottom: 3rem;
          font-size: 30;
        }
        
        .grid {
          list-style: none;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        
        .card {
          background-color: #1b1832;
          margin-bottom: 2rem;
          padding: 1rem;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        
        .card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
        }
        
        .cardImage {
          width: 420px;
          height: 300px;
          object-fit: cover;
          align-items: center;
          border-radius: 6px;
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        
        .card:hover .cardImage {
          transform: scale(1.02);
        }
        
        .cardTitle {
          color: #ffffff;
          font-size: 1rem;
        }
        
        @media (max-width: 1023px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 639px) {
          .grid {
            grid-template-columns: 1fr;
            padding: 0 1rem;
          }
          
          .cardImage {
            width: 100%;
            max-width: 420px;
            height: auto;
          }
        }
      `}</style>
    
    <div className="container">
      {/* Top bar */}
      <div className="topBar" />
      <h1 className="title">Top 6 Haunted Places</h1>
      <ul className="grid">
        {hauntedPlaces.map((place, index) => (
          <li key={index} className="card">
            <Link href={`/haunted_places/${place.id}`}>
              <img
                src={place.image}
                alt={place.name}
                className="cardImage"
              />
            </Link>
            <h2 className="cardTitle">{index + 1}. {place.name}</h2>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}



