import { Routes, Route, useNavigate } from 'react-router-dom'
import Userform from './frontend/Landing page/Userform'
import Hero_section from './frontend/Landing page/hero_section'
import Navbar from './frontend/Landing page/Navbar'
import DashboardPage from './frontend/Dashboard/DashboardPage'
import WithNavbarLayout from './layouts/WithNavbarLayout'

function App () {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <>
            <Navbar />
            <LandingPage />
          </>
        }
      />
      <Route
        path='/form'
        element={
          <>
            <Navbar />
            <Userform />
          </>
        }
      />
      <Route path='/dashboard' element={<DashboardPage />} />
    </Routes>
  )
}

function LandingPage () {
  const navigate = useNavigate()

  const handleGetStarted = () => {
    navigate('/form')
  }

  return <Hero_section onGetStarted={handleGetStarted} />
}

export default App
