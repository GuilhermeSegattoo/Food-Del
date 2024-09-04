import React from 'react'
import './Add.css'
import { assets } from '../../assets/assets'

const Add = () => {
  return (
   <div className="add">
    <form className='flex-col'>
      <div className="add-img-upload flex-col">
        <p>Upload Imagem</p>
        <label htmlFor='imagem'>
          <img src={assets.upload_area} alt="" />
        </label>
        <input type='file' id='image' hidden required></input>
      </div>
      <div className="add-product-name flex-col">
         <p>Nome do Produto</p>
         <input type="text" name='nome' placeholder='Escreva seu nome' />
      </div>
      <div className="add-product-description flex-col">
        <p>Descrição do produto</p>
        <textarea name='description' rows='6' placeholder='Escreva a descrição do produto' required></textarea>
      </div>
      <div className="add-category-price">
        <div className="add-category flex-col">
          <p>
            Categoria do produto
          </p>
          <select name='category'>
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
          <p>
            Preço do produto
          </p>
          <input type="Number" name='price' placeholder='R$20' />
        </div>
      </div>
      <button type='submit' className='add-btn'>Adicionar</button>
    </form>
   </div>
  )
}

export default Add