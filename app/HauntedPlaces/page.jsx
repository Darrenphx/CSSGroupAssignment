export default function Places(){  const hauntedPlaces = [
    {
      name: "Salem, Massachusetts",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjAdbAcEvtMPK86GQ48A4Rq0FXwtGSWIbSgQ&s",
      description: "Salem, most known for the 1692 Witch Trials, has learned to make a living off its own dark history. Each October, more than a million visitors crowd the narrow streets for psychic fairs, walking tours, and candlelit reenactments. The Witch House and the Salem Witch Trials Memorial stay packed, but what’s really impressive is how a town built on hysteria has turned itself into a full-fledged tourism brand.",
    },
    {
      name: "Corvin Castle, Romania",
      image:"https://thelittlehouseofhorrors.com/app/uploads/Corvin-Radu-Dimitrescu-Elian-via-Getty-Images-640x427.png",
      description: "Corvin Castle looks like a place literally designed to host ghosts. The Gothic stronghold in Hunedoara once held Vlad the Impaler, and locals say his spirit never left. Tourists claim to feel cold drafts in sealed chambers and hear voices where no one’s standing. ",
    },
    {
      name: "Lizzie Borden House, Fall River, Massachusetts",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHS8e21y-lfVhOJzUdp6J_k_-dn-_l5BD8gA&s",
      description: "The murder that inspired a nursery rhyme still creeps through the creaky walls of the Borden home. Overnight guests claim to hear footsteps on the stairs and axes in the distance. Each October, the “murder room” books out months in advance.",
    },
    {
      name: "Eastern State Penitentiary, Philadelphia",
      image:"https://www.visitphilly.com/wp-content/uploads/2017/12/crtsy-eastern-state-penitentiary-BT02-2200VP.jpg",
      description: "Once one of the harshest prisons in America, its crumbling cellblocks now host ghost tours and immersive horror events. Staff report strange figures in old guard towers, while visitors swear they’ve heard cell doors slam when no one’s around. Al Capone supposedly saw a ghost here, too, but he also drank bathtub gin daily, so, grain of salt.",
    },
    {
      name: "Hill of Crosses, Lithuania",
      image:"https://cdn1.matadornetwork.com/blogs/1/2018/10/Hill-of-Crosses-in-Lithuania-under-fiery-red-skies-1200x850.jpg",
      description: "The Hill of Crosses in Lithuania holds more than 200,000 crucifixes and rosaries left by pilgrims over the past two centuries. During the day, it feels sacred. At night, locals report strange lights weaving through the crosses and faint voices carried by the wind. The scene is both beautiful and unnerving.",
    },
    //https://www.vice.com/en/article/the-7-most-haunted-places-on-earth-and-why-we-keep-visiting-them/
  ];

   return (
    <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "70px",
        background: "linear-gradient(to right, #4a6fa5, #888)",
      }}>
      <h1 style={{
        textAlign: "center",
        margin: "5rem ",
        color: "#ffffff",
        marginBottom:"3rem",
        fontSize: 30,
      }}
      >Top 5 Haunted Places</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {hauntedPlaces.map((place, index) => (
          <li
            key={index}
            style={{
              backgroundColor: "#1b1832",
              marginBottom: "2rem",
              padding: "1rem",
              borderRadius: "8px",
              //boxShadow: "0 0 10px rgba(0,0,0,0.5)",
            }}
          >
              <img
    src={place.image}
    alt={place.name}
    style={{
      width: "140px",
      height: "100px",
      objectFit: "cover",
      borderRadius: "6px",
    }}
  />
            <h2 style={{ color: "#ffffff" }}>{index + 1}. {place.name}</h2>
            <p>{place.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}













