import React, { useState, useEffect } from "react";

export default function UsandoFecthMock() {

    const [tags, setTags] = useState([]);

    useEffect(()=> {
        fetch('./Tags.json', {
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
                        <p>Time: {tag.time}</p>
                        <p>Data: {tag.date}</p>
                        <p>Temperatura: {tag.TEMPERATURA} </p>
                        <p>Inicio do Processo: {tag.INICIO_PROCESS_W}</p>
                        <p>Produção: {tag.PRODUCAO}</p>
                        <p>Maq Ligada/Desligada: {tag.MAQ_LIG_DES_B}</p>
                        <p>Fim do Processo: {tag.FIM_PROCESS_B}</p>
                      </li>                      
                ))}
            </ul>
        </div>
    );
} 