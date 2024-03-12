import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UsandoAxios() {

    const [dados, setDados] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setDados(response.data);
            });
    }, []);

    return (
        <div>
            <h1>Utilizando Axios</h1>
            <ul>
                {dados.map(post => (
                    <li key={post.id}>
                        <strong>User ID:{post.userId}</strong>
                        <p><strong>{post.title}</strong></p>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
} 