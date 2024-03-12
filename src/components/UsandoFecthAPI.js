import React, { useState, useEffect } from "react";

export default function UsandoFecthAPI() {

    const [dados, setDados] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
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
                        <strong>Nome: {usuario.name}</strong>
                        <p>Nome: {usuario.username}</p>
                        <p>E-mail: {usuario.email}</p>
                        <p>Endereço: {usuario.address.street}</p>
                        <p>Número: {usuario.address.suite}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
} 