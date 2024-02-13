import { useEffect, useState } from "react"
import React from 'react'
import "./styles/FetchApiPlanet.css"

function FetchApiPlanet() {

    const [data, setData] = useState([]);
    const [selectedPlanet, setSelectedPlanet] = useState('statePlanet');
    const dataImage = selectedPlanet.image_path;
    console.log(useState([]));
    const apiGetPlanet = () => {
        fetch('http://spacetourism.test/api/planet')
          .then(response => response.json())
          .then((json) => {
            console.log(json);
            setData(json);
            if (json.length > 0) {
                setSelectedPlanet(json[0]); // Sélectionner la première planète par défaut
              }
          });
    };

    useEffect(() => {
        apiGetPlanet();
    }, []);

    const handlePlanetClick = (planet) => {
        setSelectedPlanet(planet);
      };

    return (
        <div className="planet-container">
            <div className="gauchePlanet">
                <div className="titreDestination">
                    <span className="numeroDestination">01</span>CHOOSE YOUR DESTINATION
                </div>
                <div className="imagePlanet">
                    <img src={`data:image/jpeg;base64,${dataImage}`} alt={selectedPlanet.title} />
                </div>
            </div>
            <div className="droitePlanet">
                <div className="planet-list">
                <ul>
  {data.map((planet) => (
    <li
      key={planet.id}
      onClick={() => handlePlanetClick(planet)}
      className={planet === selectedPlanet ? 'selectedNav' : ''}
    >
      {planet.title}
    </li>
  ))}
</ul>
                </div>
                <div className="planet-details">
                {selectedPlanet && (
                  <div>
                    <p className="titrePlanet">{selectedPlanet.title}</p>
                    <p className="detailPlanet">{selectedPlanet.detail}</p>
                    <div className="statsPlanet">
                        <div className="titreInfoPlanet">
                        DISTANCE
                        <div className="infoPlanet">{selectedPlanet.distance}</div>
                        </div>
                        <div className="titreInfoPlanet">
                        DURATION
                        <div className="infoPlanet">{selectedPlanet.duree}</div>
                        </div>
                    </div>
                  </div>
                )}
                </div>
            </div>
        </div>
    )
}

export default FetchApiPlanet