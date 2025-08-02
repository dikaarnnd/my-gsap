import { Routes, Route, Link } from 'react-router-dom'

import MainPage from './pages/MainPage.jsx'
import GsapTo from './pages/GsapTo.jsx'
import GsapFrom from './pages/GsapFrom.jsx'
import GsapStagger from './pages/GsapStagger.jsx'
import GsapTimeline from './pages/GsapTimeline.jsx'
import GsapScrollTrigger from './pages/GsapScrollTrigger.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/gsapto" element={<GsapTo />} />
        <Route path="/gsapfrom" element={<GsapFrom />} />
        <Route path="/gsaptimeline" element={<GsapTimeline />} />
        <Route path="/gsapstagger" element={<GsapStagger />} />
        <Route path="/gsapscrolltrigger" element={<GsapScrollTrigger />} />
      </Routes>
    </>
  )
}

export default App
