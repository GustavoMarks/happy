import React from 'react';
import { Link } from 'react-router-dom';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import mapMarker from '../images/Map-marker.svg';
import { FiPlus, FiArrowRight } from "react-icons/fi";

import 'leaflet/dist/leaflet.css';
import '../styles/pages/orphanages.css';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarker,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
})

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

        <Marker
          icon={mapIcon}
          position={[-3.7766171, -38.4954941]}
        >
          <Popup closeButton={false} minWidth={248} maxWidth={248} className="map-popup" >
            Orfanato

            <Link to="/orphanages/1">
              <FiArrowRight size={20} color="#FFF" />
            </Link>
            
          </Popup>
        </Marker>
      </Map>

      <Link to="/orphanages/create" className="create-orphanage" >
        <FiPlus size={32} color="#FFF" />
      </Link>

    </div>
  )
}