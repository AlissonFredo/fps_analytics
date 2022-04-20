import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import { ContentHeader } from '@/Components/ContentHeader/Index';
import { Content } from '@/Components/Content/Index';
import { Input } from '@/Components/Input/Index';
import axios from '@/Config/axios';
import { toast } from 'react-toastify';
import { Button } from '@/Components/Button/Index';

export default function Create(props) {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    })

    const [validator, setValidator] = useState({})
    const [isLoadingButtonStore, setIsLoadingButtonStore] = useState(false)

    function handleChange(event) {
        const target = event.target
        setUser(values => ({
            ...values,
            [target.name]: target.value
        }))
    }

    function store(event) {
        event.preventDefault()
        setIsLoadingButtonStore(true)
        axios.post(`user`, user).then(response => {
            if (response.data.status === 400) {
                setIsLoadingButtonStore(false)
                setValidator(response.data.validator)
            }
            else if (response.data.status === 200) {
                setIsLoadingButtonStore(false)
                setUser({})
                setValidator({})
                toast.success('Usuário cadastrado com sucesso!')
            }
        })
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Usuários" />
            <ContentHeader>
                <div className='col'>
                    <h1>Usuários</h1>
                </div>
            </ContentHeader>
            <Content>
                <div className="card card-default">
                    <div className="card-header">
                        <h3 className="card-title">Novo Usuário</h3>
                        <div className="card-tools">
                            <button className="btn btn-tool" data-card-widget="collapse">
                                <i className="fas fa-minus"></i>
                            </button>
                        </div>
                    </div>
                    <div
                        className="card-body"
                        style={{ display: "block" }}
                    >
                        <div className='row'>
                            <Input
                                id='name-user'
                                name='name'
                                label='Nome'
                                placeholder='Digite o nome'
                                change={handleChange}
                                col='col-md-6'
                                errors={validator}
                                value={user.name}
                            />
                            <Input
                                id='email-user'
                                name='email'
                                label='E-mail'
                                placeholder='Digite o e-mail'
                                change={handleChange}
                                col='col-md-6'
                                errors={validator}
                                value={user.email}
                            />
                            <Input
                                id='password-user'
                                name='password'
                                label='Senha'
                                placeholder='Digite a senha'
                                type='password'
                                change={handleChange}
                                col='col-md-6'
                                errors={validator}
                                value={user.password}
                            />
                            <Input
                                id='confirm-password-user'
                                name='password_confirmation'
                                label='Confirmar Senha'
                                placeholder='Digite a confirmação da senha'
                                type='password'
                                change={handleChange}
                                col='col-md-6'
                                errors={validator}
                                value={user.password_confirmation}
                            />
                        </div>
                    </div>

                    <div className="card-footer text-right" style={{ display: "block" }}>
                        <Button
                            className='btn-sm bg-gradient-primary'
                            label='Salvar'
                            action={store}
                            isLoading={isLoadingButtonStore}
                        />
                    </div>
                </div>
            </Content>
        </Authenticated>
    );
}