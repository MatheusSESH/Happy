import React, { useState, FormEvent} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import '../../styles/global.css';
import '../../styles/pages/login-user/login.css'
import LoginComponent from '../../components/LoginApp';

import api from '../../services/api';

export default function EnterUserLogin() {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin(event: FormEvent){
        event.preventDefault();

        const data = new FormData();

        data.append('email', email);
        data.append('password', password)

        await api.post('user', data)

        alert('login concluido com sucesso');

        history.push('/dashboard');
    }

    return (
        <div className="login-content">
            <LoginComponent />
            <main className="container-form">
                    <Link to="/" className="arrow-goBack">
                        <FiArrowLeft size={24} color="#15b6d6"/>
                    </Link>
                    <Link to="/sign-up">
                        <button type="button" className="signup-user">
                            Sign-Up
                        </button>
                    </Link>
                <form className="login-form" onSubmit={handleLogin}>

                    <legend>Sign-In</legend>

                    <div className="input-block">
                        <label htmlFor="email">E-mail</label>
                        <input 
                            type="email"
                            id="email"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            required
                        />
                    </div>

                    <div className="input-block">
                        <label htmlFor="password">Senha</label>
                        <input 
                            type="password" 
                            id="password"
                            value={password}
                            onChange={event => setPassword(event.target.value)} 
                            required
                        />
                    </div>

                    <div className="login-options">
                        <input type="checkbox" />
                        <label>Lembre-me</label>
                        <Link to="/forgot-password" >
                            Esqueci minha senha
                        </Link>
                    </div>
                    
                    <Link to="/dashboard"> 
                        <button className="login-user" type="submit">
                            Entrar
                        </button>
                    </Link>
                    

                </form>
            </main>
        </div>
        
    )
}