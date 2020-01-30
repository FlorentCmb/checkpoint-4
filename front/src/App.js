// Librairies
import React from 'react'
// Components
import Header from './components/Header'
import Banner from './components/Banner'
// Styles
import './App.css'
import './fonts/kashima_brush/Kashima.otf'
import './fonts/korean_calligraphy/Korean_Calligraphy.ttf'

const App = () => {
  return (
    <div className="App">
      <Banner />
      <Header />
    </div>
  )
}

export default App
