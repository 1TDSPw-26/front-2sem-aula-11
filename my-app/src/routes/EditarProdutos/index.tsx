import { useParams } from "react-router";

export default function EditarProdutos() {
  const { id } = useParams<{ id: string }>();

  // Criar lista de produtos
  const listaProdutos = [
    { id: 1, nome: "smartwatch", preco: 250 },
    { id: 2, nome: "celular", preco: 1800 },
    { id: 3, nome: "tablet", preco: 1600 },
    { id: 4, nome: "caixa de som", preco: 300 },
  ];

  const produto = listaProdutos.find((p) => {
    p.id === Number(id);
  });

  return (
    <main>
      <h2>Editar Produtos</h2>
      <p>Id: {Number(id) > 10 ? "é maior que 10" : "é menor que 10"}</p>

      {produto ? 
      (<div>
          <p>Nome: {produto.nome}</p>
          <p>Preço: {produto.preco}</p>
        </div>) : (<p>Produto não encontrado</p>)
      }
    </main>
  );
}
