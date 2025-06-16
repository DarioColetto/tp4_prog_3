import React from 'react';
import TarjetaPersona from './TarjetaPersona';
import './componentStyles.css';
 

function ListaTarjetas({ personas }) {
  return (
    <div className="container">
      {personas.map((persona) => (
        <TarjetaPersona key={persona.id} persona={persona} />
      ))}
    </div>
  );
}

export default ListaTarjetas;
