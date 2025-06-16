import React from 'react';
import './componentStyles.css';

function TarjetaPersona({ persona }) {
  const { nombre, apellido, edad, email } = persona;

  return (
    <div className="tarjeta">
      <h2 className="nombre">
        {nombre} {apellido}
      </h2>
      <p><strong>Edad:</strong> {edad}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
}


export default TarjetaPersona;
