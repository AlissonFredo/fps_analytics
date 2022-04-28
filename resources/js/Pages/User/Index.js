import React, { useEffect, useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import { ContentHeader } from '@/Components/ContentHeader/Index';
import { Content } from '@/Components/Content/Index';
import { Link } from '@inertiajs/inertia-react';
import { Modal } from '@/Components/Modal/Index';
import { Input } from '@/Components/Input/Index';

export default function Index(props) {

    const [users, setUsers] = useState([]);

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    })
    
    const [validator, setValidator] = useState({})
    const [isLoadingButtonStore, setIsLoadingButtonStore] = useState(false)

    useEffect(() => {
        setUsers(props.users)
    }, [])

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
                        <h3 className="card-title">Lista de Usuários</h3>
                        <div className="card-tools">
                            <button className="btn btn-tool" data-card-widget="collapse">
                                <i className="fas fa-minus"></i>
                            </button>
                        </div>
                    </div>
                    <div
                        className="card-body table-responsive p-0"
                        style={{ display: "block" }}
                    >
                        <table className="table table-hover text-nowrap">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nome</th>
                                    <th>Email</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="card-footer text-right" style={{ display: "block" }}>
                        <button
                            type="button"
                            className="btn btn-sm bg-gradient-primary"
                            data-toggle="modal"
                            data-target="#modal-user-create"
                        >
                            Novo
                        </button>
                    </div>
                </div>
            </Content>
            <Modal
                titleHeader='Novo Usuário'
                action={store}
                handleChange={handleChange}
                idModal='modal-user-create'
                sizeModal='modal-lg'
            >
                <Input
                    id='name-user'
                    name='name'
                    label='Nome'
                    placeholder='Digite o nome'
                    change={handleChange}
                    errors={validator}
                    value={user.name}
                />
                <Input
                    id='email-user'
                    name='email'
                    label='E-mail'
                    placeholder='Digite o e-mail'
                    change={handleChange}
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
                    errors={validator}
                    value={user.password_confirmation}
                />
            </Modal>
        </Authenticated>
    );
}