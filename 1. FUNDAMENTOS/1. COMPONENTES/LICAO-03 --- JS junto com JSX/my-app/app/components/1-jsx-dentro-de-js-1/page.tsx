// JSX dentro de Javascript - 1.0:

export default function Home() {
    let nome = <h2>Flávio</h2>;
    let sobrenome = <h2>Ribeiro</h2>;
    const trecho = [
        <div key="1">Trecho #1</div>,
        <div key="2">Trecho #2</div>,
        <div key="3">Trecho #3</div>
    ]

    return (
        <div>
            <h1>{nome} {sobrenome} algum texto aqui</h1>
            <h3>{trecho[1]}</h3>
        </div>
    )
}

// Esse pode ser um recurso útil para renderizar conteúdo dentro de componentes React, permitindo a criação dinâmica de elementos JSX com base em variáveis ou arrays.
// Nesse caso, todo conteúdo é armazenado em variáveis JavaScript e depois inserido no JSX retornado pelo componente.