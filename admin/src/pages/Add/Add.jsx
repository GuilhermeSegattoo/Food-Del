import React, { useState } from 'react';
import './Add.css';
import { assets } from '../../assets/assets';
import axios from 'axios'
import { toast } from 'react-toastify';


const Add = ({url}) => {
  
  const [image, setImage] = useState(null);  // Corrigir o estado inicial da imagem
  const [data, setData] = useState({
    name: "",
    description: "",  // Corrigir chave 'description' no estado
    price: "",
    category: "Saladas"
  });

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("price", Number(data.price))
    formData.append("category", data.category)
    formData.append("image", image)
    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
    
      // Verificar o status HTTP diretamente
      if (response.status === 200 && response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "Saladas"
        });
        setImage(null);  // Limpa a imagem após o envio
        toast.success("Adicionado com sucesso!")
      } else {
        toast.error("Erro ao adicionar o produto, tente novamente!");
      }
    } catch (error) {
      console.log("Erro no envio do formulário", error);
      
    }
    // Aqui você pode adicionar a lógica para enviar o formulário
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Imagem</p>
          <label htmlFor="imagem">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Preview"
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="imagem"  // Corrigir ID para 'imagem'
            hidden
            required
          />
        </div>

        <div className="add-product-name flex-col">
          <p>Nome do Produto</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"  // Corrigir nome para 'name'
            placeholder="Escreva seu nome"
            required
          />
        </div>

        <div className="add-product-description flex-col">
          <p>Descrição do produto</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"  // Corrigir nome para 'description'
            rows="6"
            placeholder="Escreva a descrição do produto"
            required
          />
        </div>

        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Categoria do produto</p>
            <select onChange={onChangeHandler} name="category">
              <option value="Saladas">Saladas</option>
              <option value="Rolls">Rolls</option>
              <option value="Doces">Doces</option>
              <option value="Sanduiches">Sanduiches</option>
              <option value="Bolos">Bolos</option>
              <option value="100% Vegâno">100% Vegâno</option>
              <option value="Massas">Massas</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          <div className="add-price flex-col">
            <p>Preço do produto</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="text"  // Deixe como 'text' por enquanto para evitar problemas de formatação
              name="price"
              placeholder="R$20"
              required
            />
          </div>
        </div>

        <button type="submit" className="add-btn">Adicionar</button>
      </form>
    </div>
  );
};

export default Add;
