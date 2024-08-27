import React, { useState } from "react";
import './LoginPopup.css';
import { assets } from "../../assets/assets";

const LoginPopup = ({setShowLogin}) =>{

    const [currState,setCurrState] = useState("Entrar")

    return(
        <div className="login-popup">
          <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<></>:<input type="text" placeholder="Seu Nome" required />}
                <input type="email" placeholder="Seu Email" required />
                <input type="password" placeholder="Sua Senha" required />
            </div>
            <button>{currState==="Entrar"?"Criar conta":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>Ao continuar, concorco com os termos de uso & política de privacidade.</p>
            </div>
            {currState==="Login"
            ?<p>Criar uma conta nova <span onClick={()=>setCurrState("Entrar")}>Clique aqui</span></p>
            :<p>Se já possui uma conta <span onClick={()=>setCurrState("Login")}>Clique aqui</span></p>}    
          </form>
        </div>
    )
}

export default LoginPopup