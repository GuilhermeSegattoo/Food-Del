import { useContext, useEffect, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

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
    setData((data) => ({ ...data, [name]: value }));
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    if (food_list && cartItems) {
      food_list.forEach((item) => {
        if (item && item._id && cartItems[item._id] > 0) {
          let itemInfo = { ...item, quantity: cartItems[item._id] };
          orderItems.push(itemInfo);
        }
      });
    }

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };

    // Verificação da URL
    console.log('URL utilizada:', url);

    try {
      // Verificação se a URL está corretamente formada
      let response = await axios.post(`${url}/api/order/place`, orderData, { headers: { token } });
      if (response.data && response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
        alert('Erro ao enviar o pedido');
      }
    } catch (error) {
      // Logs detalhados para ajudar na depuração
      console.error('Error placing order:', error);
      if (error.response) {
        console.log('Erro na resposta da API:', error.response.data);
      } else if (error.request) {
        console.log('Erro na requisição:', error.request);
      } else {
        console.log('Erro desconhecido:', error.message);
      }
      alert('Erro ao enviar o pedido');
    }
  };

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Informações do Delivery</p>
        <div className="mult-fields">
          <input
            required
            name="firstName"
            onChange={onChangeHandler}
            value={data.firstName}
            type="text"
            placeholder="Primeiro nome"
          />
          <input
            required
            name="lastName"
            onChange={onChangeHandler}
            value={data.lastName}
            type="text"
            placeholder="Segundo nome"
          />
        </div>
        <input
          required
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          type="text"
          placeholder="Email"
        />
        <input
          required
          name="street"
          onChange={onChangeHandler}
          value={data.street}
          type="text"
          placeholder="Rua"
        />
        <div className="mult-fields">
          <input
            required
            name="city"
            onChange={onChangeHandler}
            value={data.city}
            type="text"
            placeholder="Cidade"
          />
          <input
            required
            name="state"
            onChange={onChangeHandler}
            value={data.state}
            type="text"
            placeholder="Estado"
          />
        </div>
        <div className="mult-fields">
          <input
            required
            name="zipcode"
            onChange={onChangeHandler}
            value={data.zipcode}
            type="text"
            placeholder="CEP"
          />
          <input
            required
            name="country"
            onChange={onChangeHandler}
            value={data.country}
            type="text"
            placeholder="País"
          />
        </div>
        <input
          required
          name="phone"
          onChange={onChangeHandler}
          value={data.phone}
          type="text"
          placeholder="Telefone"
        />
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
          <button type="submit">Ir para o checkout</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
