
import './App.css'

import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
function App() {
  
  return (
    <>
      
        <Navbar/>
        <div className="content">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/Login' element={<Login/>}/>
        </Routes>
        </div>
        
      
    </>
  )
}

export default App
