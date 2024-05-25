import React, { useEffect, useState, useCallback, } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";
// import baseUrl from '../../../config';

const Register = ({ changeMode }) => {
    const [data, setData] = useState({});
    const [error, setError] = useState(false);
    const [authError, setAuthError] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLoginClick = useCallback(() => {
        if (email === '' || password === '') {
            console.log(email, password);
            setError(true)
            console.log('error')
        };

        const credentials = {
            email,
            password
        }

        axios.post(baseUrl + '/users', {
                name: name,
                email: email,
                password: password
            }
        ).then((response) => {
            setData(response.data?.email);
            navigate("/account");
        }).catch(() => {
            setAuthError(true)
            console.log('authError')
        })
    }, [email, password])

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <div className="modal">
            <div className="modal__wrap">
            <h2 className="modal__title">Регистрация <span onClick={changeMode} className="modal__link">Вход</span></h2>
                <div className="modal__inputs">
                    <div className='modal__inputs_i'>
                        <input placeholder="Логин" name='name' onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div className='modal__inputs_i'>
                        <input placeholder="Адрес эл.почты" name='username' onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div className='modal__inputs_i'>
                        <input placeholder="Пароль" type="password" name='password' onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <div className='modal__inputs_i'>
                        <input placeholder="Повторите пароль" type="password" name='password' onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    {error || authError && <p className="modal__error">Неправильный логин или пароль</p>}
                </div>

                <button className="modal__button" variant="contained"  onClick={handleLoginClick}>Зарегистрироваться</button>
            </div>
        </div>
    );
};

export default Register;
