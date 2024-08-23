import { useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'

function navbar() {
  
  const [menu,setMenu] = useState("home");

  return (
    <div className='navbar'>
        <img src={assets.logo} alt='' className='logo'/>
        <ul className='navbar-menu'>
          <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li>
          <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</li>
          <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile app</li>
          <li onClick={()=>setMenu("contato")} className={menu==="contato"?"active":""}>contato</li> 
        </ul>
        <div className='navbar-right'>
          <img src={assets.search_icon} alt=''></img>
          <div className='navbar-search-icon'>
            <img src={assets.basket_icon} alt=''></img>
            <div className="dot"></div>  
          </div>  
          <button className="">logar</button>
        </div>
    </div>
  )
}

export default navbar
