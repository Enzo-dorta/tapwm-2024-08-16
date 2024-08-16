import logo from './logo.svg';
import './App.css';
import ListaProduto from './componentes/lista_produto';

const produto =[ {    // objeto json, já é nativo do javascript
    nome:"Teste",
    preco: 10.00,
  },
  {
    nome:"Teste2",
    preco: 20.00,
  }]            

function App() {
  return (
    <div>

      <h1>Lista Produtos</h1>
      <ListaProduto produto={produto}/>
    </div>
  );
}

export default App;
