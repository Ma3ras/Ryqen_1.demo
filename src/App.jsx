import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UeberUnsPage from './pages/UeberUnsPage'
import DienstleistungenPage from './pages/DienstleistungenPage'
import KontaktPage from './pages/KontaktPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ueber-uns" element={<UeberUnsPage />} />
        <Route path="/dienstleistungen-&-preise" element={<DienstleistungenPage />} />
        <Route path="/kontakt" element={<KontaktPage />} />
      </Routes>
    </div>
  )
}

export default App 