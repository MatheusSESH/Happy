import React from 'react';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';

import '../../styles/global.css';
import '../../styles/pages/auth/sign-up.css';
import LoginComponent from '../../components/LoginApp'

export default function CreateUser() {
    return(
        <div className="page-content">
            <LoginComponent />
                <main className="form-content"> 
                    <Link to="/sign-in" className="arrow-goBack">
                        <FiArrowLeft size={24} color="#15b6d6"/>
                    </Link>
                    <form className="sign-up">
                        <legend>Cadastro</legend>

                        <div className="input-block">
                            <label>Nome</label>
                            <input 
                                type="text" 
                                required
                            />
                        </div>
                        
                        <div className="input-block">
                            <label>E-mail</label>
                            <input 
                                type="email" 
                                required
                            />
                        </div>

                        <div className="input-block">
                            <label>Senha</label>
                            <input 
                                type="password" 
                                required
                            />
                        </div>

                        <Link to="/dashboard">
                            <button className="signup-user" type="submit">
                                Cadastrar
                            </button>
                        </Link>

                    </form>
                </main>
        </div>
    );
}