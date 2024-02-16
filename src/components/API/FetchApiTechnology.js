import { useEffect, useState } from "react"
import React from 'react'
import BarNav from "./BarNav";
import "./styles/FetchApiTechnology.css"

function FetchApiTechnology() {
const [data, setData] = useState([]);
const [selectedTechnology, setSelectedTechnology] = useState('stateTechnology');
const dataImage = selectedTechnology.image_path;
console.log(useState([]));
let technoNumber = 0

const apiGetTechnology = () => {
    fetch('http://spacetourism.test/api/technologie')
      .then(response => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
        if (json.length > 0) {
            setSelectedTechnology(json[0]); 
          }
      });
};

useEffect(() => {
    apiGetTechnology();
}, []);

const handleTechnologyClick = (technology) => {
    setSelectedTechnology(technology);
  };

  return (
    <div className='bodyTechnology'>
      <BarNav/>
         <div className="main_technologie">
      <div className="titre_lancement">
         <span className="numero">03</span>LANCEMENT SPATIAL 101
      </div>
      <div className="ensemble_technologie">
         <div className="boutons_technologie">
            <ul>
               {data.map((technology) => (
                 <li
                   key={technology.id}
                   onClick={() => handleTechnologyClick(technology)}
                   >
                     <div className={technology ===selectedTechnology ? 'bouton_techno_selected' :'bouton_techno'}><div className="numero_boutons">{technoNumber=technoNumber+1}</div></div>
         
                 </li>
               ))}
            </ul>
         </div>
         <div className="texte_technologie">
            <div className="titre_technologie">
               {selectedTechnology.title}
            </div>
            <div className="corps_technologie">
               {selectedTechnology.detail}</div>
         </div>
         <div className="image_technologie">
            <img src={`data:image/png;base64,${dataImage}`} alt={selectedTechnology.title}/>
         </div>
      </div>
   </div>
    </div>
  )
}

export default FetchApiTechnology