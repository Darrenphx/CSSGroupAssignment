"use client";

export default function SingaporeBeliefs() {
  const hauntedPlaces = [
    {
      title: "Old Changi Hospital",
      description: "Once a military hospital during WWII, now considered one of Singapore's most haunted locations. Reports include ghostly nurses, screams, and shadow figures.",
      type: "hospital"
    },
    {
      title: "Haw Par Villa",
      description: "Formerly Tiger Balm Gardens. The Hell's Museum section is believed to be haunted by spirits depicted in the exhibits.",
      type: "museum"
    },
    {
      title: "Pulau Ubin",
      description: "The abandoned houses and German Girl Shrine are sites of many paranormal encounters and local folklore.",
      type: "island"
    },
    {
      title: "Fort Canning Park",
      description: "Ancient burial ground and former British military base. Reports of ghostly soldiers and mysterious figures.",
      type: "park"
    },
    {
      title: "Bukit Brown Cemetery",
      description: "One of the largest Chinese cemeteries outside China. Locals avoid it at night due to ghost sightings.",
      type: "cemetery"
    },
    {
      title: "Raffles Hotel",
      description: "The grand old hotel has stories of a 'Lady in White' who rooms the corridors at night.",
      type: "hotel"
    }
  ];

  const culturalBeliefs = [
    {
      title: "Hungry Ghost Festival",
      description: "During the 7th lunar month, it's believed spirits roam the earth. Offerings are made and entertainment is provided for them.",
      significance: "Major cultural event"
    },
    {
      title: "Pregnancy Taboos",
      description: "Pregnant women avoid funerals, night outings, and certain foods to protect from spiritual harm to the unborn child.",
      significance: "Protection belief"
    },
    {
      title: "Red String Bracelets",
      description: "Worn by children to ward off evil spirits and the 'evil eye'.",
      significance: "Protective charm"
    },
    {
      title: "House Spirits",
      description: "Many believe homes have guardian spirits that must be respected with regular offerings.",
      significance: "Domestic spirituality"
    },
    {
      title: "Funeral Customs",
      description: "Mirrors are covered, mourners wear specific colors, and rituals protect the living from following the deceased.",
      significance: "Transition rituals"
    },
    {
      title: "Taoist Mediums",
      description: "Tang-ki (spirit mediums) are consulted for communicating with spirits and solving supernatural problems.",
      significance: "Spiritual consultation"
    }
  ];

  const ghostTypes = [
    { name: "Pontianak", description: "Female vampire ghost from Malay folklore who died during childbirth" },
    { name: "Toyol", description: "Mischievous child-like spirit used in black magic" },
    { name: "Hantu Raya", description: "Powerful familiar spirit kept by bomohs (shamans)" },
    { name: "Penanggal", description: "Flying female head with trailing organs from Malay mythology" },
    { name: "Jiangshi", description: "Chinese hopping vampire/ghost" },
    { name: "Kuntilanak", description: "Indonesian/Malay female ghost similar to Pontianak" }
  ];

  const investigationGroups = [
    "Singapore Paranormal Investigators (SPI)",
    "Paranormal Singapore",
    "Singapore Ghost Hunters",
    "The Asian Paranormal Investigators"
  ];

  return (
    <div className="sg-container">
      <div className="sg-header">
        <h1 className="sg-title">Paranormal Beliefs in Singapore</h1>
        <p className="sg-subtitle">
          Explore the rich tapestry of ghost stories, supernatural beliefs, and haunted locations 
          in multicultural Singapore - where Chinese, Malay, Indian, and Western traditions blend.
        </p>
        <div className="sg-flag">🇸🇬</div>
      </div>

      <div className="sg-grid">
        {hauntedPlaces.map((place, index) => (
          <div key={index} className="sg-card">
            <h3 className="sg-card-title">
              {place.type === "hospital" && "🏥"}
              {place.type === "museum" && "🏛️"}
              {place.type === "island" && "🏝️"}
              {place.type === "park" && "🌳"}
              {place.type === "cemetery" && "⚰️"}
              {place.type === "hotel" && "🏨"}
              {place.title}
            </h3>
            <p className="sg-card-content">{place.description}</p>
          </div>
        ))}
      </div>

      <div className="sg-section">
        <h2 className="sg-section-title">📿 Cultural & Supernatural Beliefs</h2>
        <div className="sg-grid">
          {culturalBeliefs.map((belief, index) => (
            <div key={index} className="sg-card">
              <h3 className="sg-card-title">{belief.title}</h3>
              <p className="sg-card-content">{belief.description}</p>
              <p style={{ color: '#ff6b6b', marginTop: '0.5rem', fontSize: '0.9rem' }}>
                Significance: {belief.significance}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="sg-section">
        <h2 className="sg-section-title">👻 Types of Ghosts in Singapore Folklore</h2>
        <ul className="sg-list">
          {ghostTypes.map((ghost, index) => (
            <li key={index}>
              <strong className="sg-highlight">{ghost.name}:</strong> {ghost.description}
            </li>
          ))}
        </ul>
      </div>

      <div className="sg-section">
        <h2 className="sg-section-title">🔬 Paranormal Investigation in Singapore</h2>
        <p className="sg-card-content">
          Singapore has a growing community of paranormal investigators who use scientific methods 
          alongside traditional beliefs. Many groups investigate local hauntings while respecting 
          cultural sensitivities.
        </p>
        
        <div className="sg-caution">
          <h3>⚠️ Important Cultural Note</h3>
          <p>
            In Singapore's multicultural context, it's important to approach paranormal topics 
            with respect for different religious and cultural beliefs. What might be "entertainment" 
            in some cultures could be deeply spiritual or taboo in others.
          </p>
        </div>

        <h3 style={{ marginTop: '2rem', color: '#fff', fontSize: '1.3rem' }}>
          Active Investigation Groups:
        </h3>
        <ul className="sg-list">
          {investigationGroups.map((group, index) => (
            <li key={index}>{group}</li>
          ))}
        </ul>
      </div>

      <div className="sg-section">
        <h2 className="sg-section-title">🌙 Modern Urban Legends</h2>
        <div className="sg-grid">
          <div className="sg-card">
            <h3 className="sg-card-title">🚇 MRT Ghost Stories</h3>
            <p className="sg-card-content">
              Stories of ghostly passengers on late-night trains, especially on the North-East Line 
              which passes through old cemeteries. Some drivers report seeing figures on the tracks.
            </p>
          </div>
          <div className="sg-card">
            <h3 className="sg-card-title">🏢 HDB Ghosts</h3>
            <p className="sg-card-content">
              Many Housing Board flats have stories of previous tenants who passed away. 
              Common beliefs include hanging wind chimes to ward off spirits and avoiding 
              certain unit numbers.
            </p>
          </div>
          <div className="sg-card">
            <h3 className="sg-card-title">🎓 School Ghosts</h3>
            <p className="sg-card-content">
              Nearly every old school in Singapore has ghost stories - from the "White Lady" 
              of certain girls' schools to haunted science labs and boarding school dormitories.
            </p>
          </div>
        </div>
      </div>

      <div className="sg-footnote">
        <p>
          Note: This information is collected from various cultural sources, folklore, 
          and local accounts. Always respect local beliefs and private property when 
          exploring paranormal topics in Singapore.
        </p>
        <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
          Singapore's paranormal landscape reflects its unique multicultural identity, 
          blending traditional Asian beliefs with modern urban experiences.
        </p>
      </div>
    </div>
  );
}