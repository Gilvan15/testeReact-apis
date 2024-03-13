import React, { useState, useEffect } from "react";

export default function UsandoFecthMock() {

    const [tags, setTags] = useState([]);

    useEffect(()=> {
        fetch('./Dados.json', {
            headers: {
                Accept: "application/json"
            }
        }).then(res => res.json())
          .then(res => setTags(res.data), console.log(tags))
          
    },[]);
    return (
        <div>
            <h1>Utilizando Fecth Mocks - Tags.json </h1>
            <ul>                
                {tags.map(tag => (
                    <li key={tag.id}>
                        <p><strong> ID: {tag.id} </strong> </p>
                        <p>Nome: {tag.nome}</p>
                        <p>Idade: {tag.idade}</p>
                        <p>Status: {tag.status}</p>
                      </li>                      
                ))}
            </ul>
        </div>
    );
} 