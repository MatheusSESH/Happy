import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/global.css';
import '../styles/pages/create-successful.css';

export default function SuccessfulCreatePage(){
    return (
        <div id="page-successful-container">
            <div className="content-wrapper">
                <main>
                    <h1>Ebaaa!</h1>
                    <p>O cadastro deu certo e foi enviado
                    ao administrador para ser aprovado.
                    Agora é só esperar :)
                    </p>
                </main>

            <Link to='/app' >
                <button className="button-goMap">
                    Voltar para o mapa
                </button>
            </Link>

            </div>
        </div>
    );
}