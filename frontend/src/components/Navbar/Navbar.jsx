import { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

function navbar({setShowLogin}) {
  
  const [menu,setMenu] = useState("home");

  const {getTotalCartAmount,token,setToken} = useContext(StoreContext) 

  const navigate = useNavigate();

  const logout = () => {
     localStorage.removeItem("token");
     setToken("");
     navigate("/")

  }

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
            <div className={getTotalCartAmount()===0?"":"dot"}></div>  
          </div>
          {!token
           ?<button onClick={()=>setShowLogin(true)} className="">logar</button>
           :<div className='navbar-profile'>
              <img src={assets.profile_icon} alt="" />
              <ul className="nav-profile-dropdown">
                <li><img src={assets.bag_icon} alt="" /><p>Ordens</p></li>
                <hr />
                <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Sair</p></li>
              </ul>
            </div>}  
        </div>
    </div>
  )
}

export default navbar
