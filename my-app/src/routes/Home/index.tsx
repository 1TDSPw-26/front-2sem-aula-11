export default function Home() {

    //Exemplo de destructuring
    const estojo = {
        nome: "Estojo",
        cor: "Azul",
        tamanho: 10
    }

    //Acessando os dados do objeto diretamente
    console.log(estojo.nome)
    console.log(estojo.cor)
    console.log(estojo.tamanho)

    //Desestruturando o objeto (Destructuring)
    const {nome, cor, tamanho} = estojo;

    return (
        <main>
            <h2>Home</h2>
            <div>
                <h3>Estojo</h3>
                <p>Nome: {nome}</p>
                <p>Cor: {cor}</p>
                <p>Tamanho: {tamanho}</p>
            </div>
        </main>
    )
} 