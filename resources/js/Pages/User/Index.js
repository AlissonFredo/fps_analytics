import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import { ContentHeader } from '@/Components/ContentHeader/Index';
import { Content } from '@/Components/Content/Index';
import { Link } from '@inertiajs/inertia-react';

export default function Index(props) {
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
                                {props.users.map((user, key) => {
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
                        <Link href='/user/create' className='btn btn-sm bg-gradient-primary'>
                            Novo
                        </Link>
                    </div>
                </div>
            </Content>
        </Authenticated>
    );
}