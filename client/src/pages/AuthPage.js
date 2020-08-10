import React, {useState} from 'react'
import {useHttp} from '../hooks/http.hook'

export const AuthPage = () => {
    const {loading, error, request} = useHttp()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            console.log('Data', data)
        } catch (e) {}
    }


    return (
        <div className='row'>
            <div className='col s6 offset-s3'>
                <h1>Сократи ссылку</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                        <div>
                            <div className="row">
                                <div className="input-field">
                                    <input 
                                        onChange={changeHandler}
                                        id="email" 
                                        type="email" 
                                        name="email"
                                        className="yellow-input"
                                        style={{ borderBottom: '1px solid #fff', boxShadow: '0 1px 0 0 #fff' }}
                                    />
                                    <label htmlFor="email" style={{ color: 'white' }}>Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field">
                                    <input 
                                        onChange={changeHandler}
                                        id="password" 
                                        type="password" 
                                        name="password"
                                        className="yellow-input"
                                        style={{ borderBottom: '1px solid #fff', boxShadow: '0 1px 0 0 #fff' }}
                                    />
                                    <label htmlFor="password" style={{ color: 'white' }}>Password</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button 
                            style={{ marginRight: '10px' }} 
                            className='btn yellow darken-4'
                            onClick={registerHandler}
                            disabled={loading}
                        >
                            Войти
                        </button>
                        <button
                            className='btn grey black-text'
                            onClick={registerHandler}
                            disabled={loading}
                        >
                            Регистрация
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}