import './App.css';
import ListaProduto from './componentes/lista_produto';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [produtos, setProdutos] = useState([]);
  
  useEffect(()=>{
    carregaProdutos();
  }, []);

  function carregaProdutos(){
    axios.get('https://app-api-tapwm.onrender.com/api/produtos')
    .then(res=>{
      setProdutos(res.data);
      console.log(produtos);
    });
    
  }
  return (
    <div>

      <h1>Lista Produtos</h1>
      <ListaProduto produto={produtos}/>
    </div>
  );
}

export default App;
