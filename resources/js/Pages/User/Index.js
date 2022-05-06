import React, { useEffect, useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import { ContentHeader } from '@/Components/ContentHeader/Index';
import { Content } from '@/Components/Content/Index';
import { Link } from '@inertiajs/inertia-react';
import { Modal } from '@/Components/Modal/Index';
import { Input } from '@/Components/Input/Index';
import { Pagination } from '@/Components/Pagination/Index';
import { toast } from 'react-toastify';

export default function Index(props) {

    const [user, setUser] = useState({})
    const [users, setUsers] = useState([]);
    const [validator, setValidator] = useState({})
    const [currentPage, setCurrentPage] = useState(1)
    const [lastPage, setLastPage] = useState(1)
    const [isLoadingButtonStore, setIsLoadingButtonStore] = useState(false)

    useEffect(() => {
        getAllUsers()
    }, [])

    function handleChange(event) {
        const target = event.target
        setUser(values => ({
            ...values,
            [target.name]: target.value
        }))
    }

    function getAllUsers() {
        const url = '/user/' + currentPage
        axios.get(url).then(response => {
            setUsers(response.data.data)
            setCurrentPage(response.data.current_page)
            setLastPage(response.data.last_page)
        })
    }

    function getUserList(key) {
        setUser(users[key])
    }

    function submit(event) {
        user.id == null ? store(event) : update()
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

    function update() {
        console.log('update');
    }

    function delay(n) {
        return new Promise(function (resolve) {
            setTimeout(resolve, n * 1000);
        });
    }

    async function destroy(event) {
        event.preventDefault()
        setIsLoadingButtonStore(true)
        await axios.delete(`user/` + user.id).then(response => {
            if(response.data.status !== 200) {
                throw new Error(response);
            }

            setUsers(users.filter((prev) => prev.id !== user.id));
            setUser({})
            toast.success('Usuário excluido com sucesso!')

        }).catch(function(e) {
            toast.error('Error ao excluir usuário!')
        })
        setIsLoadingButtonStore(false)
        $('#modal-user-delete').modal('hide')
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
                            <button
                                className="btn btn-tool"
                                data-card-widget="collapse"
                            >
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
                                    <th>Nome</th>
                                    <th>Email</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td className='d-flex justify-content-end'>
                                                <button
                                                    className="btn btn-sm btn-info mr-1"
                                                    onClick={() => { getUserList(key) }}
                                                    data-toggle="modal"
                                                    data-target="#modal-user-create"
                                                >
                                                    <i className="fas fa-edit" />
                                                </button>
                                                <button
                                                    className="btn btn-sm bg-gradient-danger"
                                                    onClick={() => { getUserList(key) }}
                                                    data-toggle="modal"
                                                    data-target="#modal-user-delete"
                                                >
                                                    <i className="fas fa-trash-alt" />
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="card-footer" style={{ display: "block" }}>
                        <div className='row'>
                            <div className='col'>
                                <Pagination />
                            </div>
                            <div className='col text-right'>
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
                    </div>
                </div>
            </Content>
            <Modal
                titleHeader='Novo Usuário'
                action={submit}
                method={user.id == null ? 'save' : 'update'}
                handleChange={handleChange}
                idModal='modal-user-create'
                sizeModal='modal-lg'
                isLoadingButton={isLoadingButtonStore}
                handleModalClose={() => {
                    setUser({})
                    setValidator({})
                }}
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
            <Modal
                titleHeader='Quer mesmo deletar esse usuário?'
                action={destroy}
                idModal='modal-user-delete'
                method='destroy'
                isLoadingButton={isLoadingButtonStore}
            />
        </Authenticated>
    );
}