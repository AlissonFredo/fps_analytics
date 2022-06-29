import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/inertia-react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <div className='login-page p-3'>
            <div className="login-logo">
                <a href="/">Coach Analytics</a>
            </div>
            <div className='col-md-5' style={{ maxWidth: "500px" }}>
                <div className='card'>
                    <div className='card-body p-4'>
                        <form onSubmit={submit}>
                            <div className='form-group mb-3'>
                                <label htmlFor='e-mail'>Email</label>
                                <div className="input-group">
                                    <input
                                        id='e-mail'
                                        type="email"
                                        className={"form-control " + (errors.email != undefined ? 'is-invalid' : '')}
                                        placeholder="Email"
                                        name="email"
                                        value={data.email}
                                        onChange={(e) => onHandleChange(e)}
                                    />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope"></span>
                                        </div>
                                    </div>
                                </div>
                                <span className='text-danger'>
                                    {errors.email}
                                </span>
                            </div>
                            <div className='form-group mb-3'>
                                <label htmlFor='password'>Senha</label>
                                <div className="input-group">
                                    <input
                                        type="password"
                                        id='password'
                                        className={"form-control " + (errors.password != undefined ? 'is-invalid' : '')}
                                        placeholder="Senha"
                                        name="password"
                                        value={data.password}
                                        onChange={(e) => onHandleChange(e)}
                                    />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock"></span>
                                        </div>
                                    </div>
                                </div>
                                <span className='text-danger'>
                                    {errors.password}
                                </span>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="icheck-primary">
                                        <input
                                            type="checkbox"
                                            id="remember"
                                            name="remember"
                                            value={data.remember}
                                            onChange={(e) => onHandleChange(e)}
                                        />
                                        <label htmlFor="remember">
                                            Lembre de mim
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12 text-right">
                                    <button className="btn bg-gradient-dark">Conecte-se</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
