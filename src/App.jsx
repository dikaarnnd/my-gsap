import { Routes, Route, Link } from 'react-router-dom'

import MainPage from './pages/MainPage.jsx'
import GsapTo from './pages/GsapTo.jsx'
import GsapFrom from './pages/GsapFrom.jsx'
import GsapFromTo from './pages/GsapFromTo.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/gsapto" element={<GsapTo />} />
        <Route path="/gsapfrom" element={<GsapFrom />} />
        <Route path="/gsapfromto" element={<GsapFromTo />} />
      </Routes>
    </>
  )
}

export default App
