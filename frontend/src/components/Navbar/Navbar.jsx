import { assets } from '../../assets/assets'
import './Navbar.css'

function navbar() {
  return (
    <div className='navbar'>
        <img src={assets.logo} alt='' className='logo'/>
    </div>
  )
}

export default navbar
