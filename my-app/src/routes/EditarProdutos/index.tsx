import { useParams } from "react-router"

//Criar uma lista de produtos

const listaProdutos = [
    {id: 1, nome: "Produto 1", preco: 10.0},
    {id: 2, nome: "Produto 2", preco: 20.0},
    {id: 3, nome: "Produto 3", preco: 39.0},
    {id: 4, nome: "Produto 4", preco: 40.0}
]

export default function EditarProdutos() {


    const {id} = useParams<{id : string}>();


    const produto = listaProdutos.find( ( p )=> p.id === Number(id));


  return (
    <main style={{ padding: '20px' }}>
        <h2>Editar Produto</h2>
        <p>{ Number(id) > 10 ? "É maior que 10" : "É menor que 10" }</p>

    {produto ?
    (<div>
        <p>Nome: {produto.nome}</p>
        <p>Preco: {produto.preco}</p>
    </div>) :
    (<p>Produto não encontrado</p>)
    }

    </main>
  )
}
