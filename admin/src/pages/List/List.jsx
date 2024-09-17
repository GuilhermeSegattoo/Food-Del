import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const List = ({url}) => {

    const [list, setList] = useState([]);
    const fetchList = async () => {
      try {
        const response = await axios.get(`${url}/api/food/list`);
        if (response.data.success) {
          setList(response.data.data);
        } 
      } catch (error) {
        if (error.response) {
          // O servidor respondeu com um status fora do intervalo 2xx
          toast.error(`Error: ${error.response.status} - ${error.response.data.message}`);
        } else if (error.request) {
          // A requisição foi feita, mas não houve resposta
          toast.error("No response from server");
        } else {
          // Algum outro erro aconteceu
          toast.error(`Error: ${error.message}`);
        }
        console.error(error);
      }
    }
    
    const removeFood = async(foodId) => {
      const response = await axios.post(`${url}/api/food/remove`,{id:foodId});
      await fetchList();
      if(response.data.success){
        toast.success(response.data.message)
      } else {
        toast.error("error")
      }
    }

  useEffect(()=>{
    fetchList();
  },[])

  return (
    <div className='list add flex-col'>
      <p>Lista de todos os pratos</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Imagem</b>
          <b>Nome</b>
          <b>Categoria</b>
          <b>Preço</b>
          <b>Ação</b>
        </div>
        {list.map((item,index)=>{
          return(
            <div key={index} className='list-table-format'>
              <img src={`${url}/images/`+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>R${item.price}</p>
              <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List