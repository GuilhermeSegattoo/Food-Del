import { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {

    const {getTotalCartAmount} = useContext(StoreContext);

    return (
        <form className='place-order'>
            <div className="place-order-left">
               <p className="title">Informações do Delivery</p>
               <div className="mult-fields">
                <input type="text" placeholder='Primeiro nome' />
                <input type="text" placeholder='Segundo nome' />
               </div>
               <input type="text" placeholder='Endereço' />
               <input type="text" placeholder='Rua' />
               <div className="mult-fields">
                <input type="text" placeholder='Cidade' />
                <input type="text" placeholder='Estado' />
               </div>
               <div className="mult-fields">
                <input type="text" placeholder='CEP' />
                <input type="text" placeholder='Cidade' />
               </div>
               <input type="text" placeholder='Telefone' />
            </div>
            <div className="place-order-right">
            <div className="cart-total">
          <h2>Total do carrinho</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>R${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery</p>
              <p>R${getTotalCartAmount()==0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>R${getTotalCartAmount()==0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>Ir para o checkout</button>
        </div>
            </div>
        </form>
    )
}

export default PlaceOrder