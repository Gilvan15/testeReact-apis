import React, { useState, useEffect } from "react";
import $ from 'jquery';

export default function UsandojQuery() {

    const [dados, setDados] = useState([]);

    useEffect(() => {
        $.get('https://jsonplaceholder.typicode.com/comments', data => {
            setDados(data);
        })
    }, []);

    return (
        <div>
            <h1>Utilizando jQuery Ajax</h1>
            <ul>
                {dados.map((comments) => (
                    <li key={comments.id}>
                        <strong>Post ID:{comments.postId}</strong>
                        <p><strong>{comments.name}</strong></p>
                        <p>{comments.email}</p>
                        <p>{comments.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
} 