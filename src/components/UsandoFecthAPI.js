import React, { useState, useEffect } from "react";

export default function UsandoFecthAPI() {

    const [dados, setDados] = useState([]);

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(data => {
    //             setDados(data);
    //         });
    // }, []);

    useEffect(() => {
        fetch('http://localhost:8080/users/last-record')
            .then(response => response.json())
            .then(data => {
                setDados(data);
            });
    }, []);

    return (
        <div>
            <h1>Utilizando Fecth API</h1>
            <ul>
                {dados.map(usuario => (
                    <li key={usuario.id}>
                        <p><strong> ID: {usuario.id} </strong> </p>
                        <p>Nome: {usuario.nome}</p>
                        <p>Idade: {usuario.idade}</p>
                        <p>Status: {usuario.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
} 