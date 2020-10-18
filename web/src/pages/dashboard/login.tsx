import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';


import '../../styles/global.css';
import '../../styles/pages/dashboard/login.css'
import LoginApp from '../../components/LoginApp';

export default function loginUser() {
    return (
        <div className="login-content">
            <LoginApp/>
            <main className="container-form">
                    <Link to="/" className="arrow-goBack">
                        <FiArrowLeft size={24} color="#15b6d6"/>
                    </Link>
                <form className="login-form">

                    <legend>Fazer login</legend>

                    <div className="input-block">
                        <label htmlFor="email">E-mail</label>
                        <input />
                    </div>

                    <div className="input-block">
                        <label htmlFor="password">Senha</label>
                        <input type="password"/>
                    </div>

                    <div className="login-options">
                        <input type="checkbox" />
                        <label>Lembre-me</label>
                        <Link to="/forgot-password" >
                            Esqueci minha senha
                        </Link>
                    </div>
                    
                    <Link to="/"> 
                        <button className="login-user" type="submit">
                            Entrar
                        </button>
                    </Link>
                    

                </form>
            </main>
        </div>
        
    )
}