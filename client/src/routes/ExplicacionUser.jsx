import React from 'react';
import '../assets/Explicacion.css';
import PortalLayout from '../layout/PortalLayout';

export default function ExplicacionUser() {
  const reproducirVideo = () => {
    // URL del video de YouTube
    const videoUrl = 'https://youtu.be/O9sj8yejEtk';
    // Abre una nueva ventana emergente con el video de YouTube
    window.open(videoUrl, '_blank', 'noopener noreferrer');
  };

  return (
    <PortalLayout>
      <div className="explicacion-container">
        <div className="steps-container">
          <h1>Pasos para crear su reserva en ParkingLocation</h1>
          <ol>
            <li>Ingresar al sistema de ParkingLocation.</li>
            <li>Ir al apartado mapa de navegación.</li>
            <li>darle click en ver info .</li>
            <li>darle click en reservar .</li>
          
            <li>La reserva será validada y finalmente creado.</li>
            <div>
              <button onClick={reproducirVideo}>Ver Video</button>
            </div>
          </ol>
        </div>
        <div className="image-container">
          <img src="https://i.ibb.co/5KvC9QQ/Wireframing-bro-removebg-preview.png" alt="Imagen explicativa" className='intentoimg'/>
        </div>
      </div>
    </PortalLayout>
  );
}
