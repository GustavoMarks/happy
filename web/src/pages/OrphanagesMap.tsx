import React from 'react';
import { Link } from 'react-router-dom';

import { Map, TileLayer } from 'react-leaflet';

import mapMarker from '../images/Map-marker.svg';
import { FiPlus } from "react-icons/fi";

import 'leaflet/dist/leaflet.css';
import '../styles/pages/orphanages.css';

export default function OrphanagesMap() {
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
      </Map>

      <Link to="" className="create-orphanage" >
        <FiPlus size={32} color="#FFF" />
      </Link>

    </div>
  )
}