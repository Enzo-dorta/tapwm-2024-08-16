import {} from '../../index.css';

const Produto = ({valor}) =>{
    return(
        <div>
            <h3 className='titulo'>
                {valor.nome}
            </h3>
            <p className='subtitulo'>
                Preço: {valor.preco}
            </p>
        </div>
    )
}

export default Produto;