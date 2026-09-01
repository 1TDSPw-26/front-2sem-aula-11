import { useParams } from 'react-router';

export default function EditarProdutos() {
  const { id } = useParams<{ id: string }>();

  return (
    <main style={{ padding: '20px' }}>
      <h1>Editar Produto</h1>
      <p>Identificador recebido pela rota: <strong>{id}</strong></p>
    </main>
  );
}