import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/Auth/LoginPage'
import SignupPage from './Pages/Auth/SignupPage'
import AddDetails from './Pages/AddDetails'

function App() {


  return (
    <>

      <div className="no-scrollbar bg-gradient-to-b from-[#288580]  to-[#5764da] h-screen">

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/dashboard' element={<HomePage />} />
            <Route path='/add-details' element={<AddDetails />} />
          </Routes>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
