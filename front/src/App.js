// Librairies
import React, { useEffect, useState } from 'react'
import Axios from 'axios'
// Components
import Header from './components/Header'
import Banner from './components/Banner'
import MapContainer from './components/MapContainer'
// Styles
import './App.css'
import './fonts/kashima_brush/Kashima.otf'
import './fonts/korean_calligraphy/Korean_Calligraphy.ttf'

const App = () => {

  const [shows, setShows] = useState()

  // Call the backend
  useEffect(() => {
      Axios.get('http://localhost:5005/shows')
          .then(res => {
              console.log(res.data)
              setShows(res.data)
          })
  }, [])

  return (
    <div className="App">
      <Banner />
      <Header />
    </div>
  )
}
// AIzaSyAlOLVg1fU7eDCgtzg0PFpyMdZWCSI_S6A
export default App
