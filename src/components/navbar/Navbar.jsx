import "./navbar.css"
import {Link} from 'react-router-dom'

const Navbar = () => {
  const userName = localStorage.getItem("User")

  //clear lcal srorage
  const logout = () =>{
    localStorage.clear()
  }
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Booking</span>
       
        {
          userName ? <div className="flex gap-5">
              <h1 className='text-2xl font-bold'> Hi👋{JSON.parse(userName).name}</h1>
              <Link to="/login"  onClick={logout}className="bg-secondaryColor py-1 rounded-lg px-4">Logout</Link>
          </div>
          :
        //   <div className="navItems">
        //   <button className="navButton">Register</button>
        //   <button className="navButton">Login</button>
        // </div>
        <div className="navItems">
         <button className="navButton">  <Link to="/register">Register</Link></button> 
         <button className="navButton">   <Link to="/login">Login</Link></button> 
        </div>
        }
       
      </div>
    </div>
  )
}

export default Navbar