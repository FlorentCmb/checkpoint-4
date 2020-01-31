// Librairies
import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'
// Styles
import './MapContainer.css'

const MapContainer = ({ google }) => {

    return (
        <Map
          google={google}
          zoom={8}
          style={{
            width: '100%',
            height: '50%'
          }}
          initialCenter={{
            lat: 48.866667,
            lng: 2.333333
          }} />
    )
}

export default GoogleApiWrapper({
    apiKey: ''
  })(MapContainer);