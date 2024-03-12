import React from 'react';
import UsandoFecthAPI from './components/UsandoFecthAPI';
import UsandoFecthMock from './components/UsandoFecthMock';
import UsandoAxios from './components/UsandoAxios';
import UsandojQuery from './components/UsandojQuery';





import { Routes, Route, Link } from 'react-router-dom';
    function App() {
        
        return (
            <>
                <header>
                    <h1>Exemplos de Requisições em ReactJS</h1>
                    <nav>
                        <Link to="/">Home</Link> | {" "}
                        <Link to="/fecthMock">Exemplo FecthAPI-Mock</Link> | {" "}
                        <Link to="/fecth">Exemplo Fecth API</Link> | {" "}
                        <Link to="/axios">Exemplo Axios</Link> | {" "}
                        <Link to="/jQuery">Exemplo jQuery</Link> | {" "}
                    </nav>
                </header>
                
                <main className='conteudo-principal'>
                    <Routes>
                      
                        <Route path="" element={""} />
                        <Route path="axios" element={<UsandoAxios />} />
                        <Route path="fecthMock" element={<UsandoFecthMock />} />
                        <Route path="fecth" element={<UsandoFecthAPI />} />
                        <Route path="jQuery" element={<UsandojQuery />} /> 
                        
                        
                        
                        
                    </Routes>
                </main>
            </>
        );
    }
    
    export default App;