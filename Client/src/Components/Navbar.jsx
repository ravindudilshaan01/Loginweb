import { Link } from "react-router-dom"
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
        
        <div className="navbar-links">
        <Link to='/'>Home</Link>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Login</Link>
            
        </div>

        
        
        
    </nav>
  )
}
