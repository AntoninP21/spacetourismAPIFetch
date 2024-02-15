import React from 'react'
import "./styles/FetchApiCrew.css"
import BarNav from './BarNav'
import { useEffect, useState } from "react"

function FetchApiCrew() {
    const [data, setData] = useState([]);
    const [selectedCrew, setSelectedCrew] = useState('stateCrew');
    const dataImage = selectedCrew.image_path;
    console.log(useState([]));
    const apiGetCrew = () => {
        fetch('http://spacetourism.test/api/crew')
          .then(response => response.json())
          .then((json) => {
            console.log(json);
            setData(json);
            if (json.length > 0) {
                setSelectedCrew(json[0]); // Sélectionner la première planète par défaut
              }
          });
    };

    useEffect(() => {
        apiGetCrew();
    }, []);

    const handleCrewClick = (crew) => {
        setSelectedCrew(crew);
      };

  return (
    <div className='bodyCrew'>
        <BarNav/>
        <ul>
        {data.map((crew) => (
            <li onClick={() => handleCrewClick(crew)}
              key={crew.id}>
                <div className={crew === selectedCrew ? 'slideDisplayed' : 'slide'}href="">
                    <div className="equipage">
                      <div className="main_equipage">
                         <div className="left_equipage">
                            <div className="titre_equipe">
                               <span className="numero">02</span>MEET THE CREW
                            </div>
                            <div className="titre_equipage">
                                {crew.role}
                            </div>
                            <div className="nom_equipage">
                                {crew.title}
                            </div>
                            <div className="corps_equipage">
                                {crew.detail}
                            </div>
                         </div>
                         <div className="right_equipage">
                            <img src={`data:image/png;base64,${dataImage}`} alt={crew.title}/>
                         </div>
                      </div>
                   </div>
                </div> 
            </li>
        ))}
        </ul>
        <div className='checkboxCrew'>
            {data.map((crew) => (
                <div key={crew.id}>
                    <input
                        type="checkbox"
                        id={`crewCheckbox_${crew.id}`}
                        checked={selectedCrew === crew}
                        onChange={() => handleCrewClick(crew)}
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default FetchApiCrew