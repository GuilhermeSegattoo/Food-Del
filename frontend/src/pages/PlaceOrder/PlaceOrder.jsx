import { useContext, useEffect, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);


  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  // Adiciona preventDefault ao clique do botão
  const handleCheckout = (event) => {
    event.preventDefault();
    // Adicione a lógica de navegação ou processamento do pedido
  };

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Informações do Delivery</p>
        <div className="mult-fields">
          <input name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='Primeiro nome' />
          <input name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Segundo nome' />
        </div>
        <input name='email' onChange={onChangeHandler} value={data.email} type="text" placeholder='Email' />
        <input name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Rua' />
        <div className="mult-fields">
          <input name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='Cidade' />
          <input name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='Estado' />
        </div>
        <div className="mult-fields">
          <input name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='CEP' />
          <input name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='País' />
        </div>
        <input name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Telefone' />
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
              <p>R${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>R${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>Ir para o checkout</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
