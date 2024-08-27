import { useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Link } from 'react-router-dom';

function navbar({setShowLogin}) {
  
  const [menu,setMenu] = useState("home");

  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt='' className='logo'/></Link>
        <ul className='navbar-menu'>
          <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
          <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
          <a href='#footer' onClick={()=>setMenu("contato")} className={menu==="contato"?"active":""}>contato</a> 
        </ul>
        <div className='navbar-right'>
          <img src={assets.search_icon} alt=''></img>
          <div className='navbar-search-icon'>
            <Link to='/cart'><img src={assets.basket_icon} alt=''></img></Link>
            <div className="dot"></div>  
          </div>  
          <button onClick={()=>setShowLogin(true)} className="">logar</button>
        </div>
    </div>
  )
}

export default navbar
