import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import '../css/mapa.css'
// import { Container } from './styles';

export default function Mapa() {
  const PATH = '/mamis-app'
  const position = [-8.053889, -34.880833]
  const [Lat, setLat] = useState('')
  const [Long, setLong] = useState('')
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setLat(position.coords.latitude)
      setLong(position.coords.longitude)
    })
  }, [])
  return (
    <section className="container-mapa">
      <div className="Titulo">
        <h2>Ache no mapa os Bancos de Leite mais próximo de você.</h2>
      </div>
      <div id="mapa">
        <MapContainer
          center={position}
          zoom={10}
          style={{ width: '100%', height: '100%' }}
        >
          <TileLayer
            url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=bKaHLGlH1eNn1uyDLHPi"
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          ></TileLayer>
          <Marker position={[Lat, Long]}>
            <Popup>Sua localização atual.</Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  )
}

