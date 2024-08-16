import Produto from "../produtos";

const ListaProduto = ({produto}) => {
    return(
        <div>
            {produto.map(
                (p)=>(<Produto valor={p}></Produto>) // ele passa pelos valores na lista e retorna o valor p= que no caso é onde vai estar os dados do produto
                )}
        </div>
    )
}

export default ListaProduto;