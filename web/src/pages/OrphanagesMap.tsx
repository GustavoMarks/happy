import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import mapMarker from '../images/Map-marker.svg';
import { FiPlus, FiArrowRight } from "react-icons/fi";
import mapIcon from '../utils/mapIcon';

import '../styles/pages/orphanages.css';

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string
}

export default function OrphanagesMap() {

  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);

    });

  }, [])

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarker} alt='Happy' />

          <h2> Escolha um orfanato no mapa </h2>
          <p> Muitas crianças estão esperando a sua visita :) </p>
        </header>

        <footer>
          <strong> Fortaleza </strong>
          <span> Ceará </span>
        </footer>
      </aside>

      <Map
        center={[-3.7766171, -38.4954941]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {
          orphanages.map(orphanage => {
            return (
              <Marker
                icon={mapIcon}
                position={[orphanage.latitude, orphanage.longitude]}
                key={orphanage.id}
              >
                <Popup closeButton={false} minWidth={248} maxWidth={248} className="map-popup" >
                  {orphanage.name}

                  <Link to={`/orphanages/${orphanage.id}`}>
                    <FiArrowRight size={20} color="#FFF" />
                  </Link>

                </Popup>
              </Marker>

            )
          })
        }

      </Map>

      <Link to="/orphanages/create" className="create-orphanage" >
        <FiPlus size={32} color="#FFF" />
      </Link>

    </div>
  )
}