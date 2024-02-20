import React, { useState, useEffect } from 'react';


function ApiKey() {
    const [key, setKey] = useState('');

    useEffect(() => {
        fetch('http://spacetourism.test/api/key')
            .then(response => response.json())
            .then(data => {
                setKey(data.key); // Stocke la clé dans l'état de React
            })
            .catch(error => {
                console.error('Erreur lors de la récupération de la clé : ', error);
            });
    }, []);

    return (
        <div>
            <p>Clé : {key}</p>
        </div>
    );
}

export default ApiKey;