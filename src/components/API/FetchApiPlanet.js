import { useEffect, useState } from "react"
import React from 'react'

function FetchApiPlanet() {

    const [data, setData] = useState([]);

    const apiGetPlanet = () => {
        fetch('http://spacetourism.test/api/planet')
          .then(response => response.json())
          .then((json) => {
            console.log(json);
            setData(json);
          });
    };

    useEffect(() => {
        apiGetPlanet();
    }, []);
    return (
            <div>
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            </div>
    )
}

export default FetchApiPlanet