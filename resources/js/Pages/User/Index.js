import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import { ContentHeader } from '@/Components/ContentHeader/Index';
import { Content } from '@/Components/Content/Index';

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
                        <h3 className="card-title">Select2 (Default Theme)</h3>
                        <div className="card-tools">
                            <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                <i className="fas fa-minus"></i>
                            </button>
                        </div>
                    </div>

                    <div className="card-body" style={{ display: "block" }}>
                        <h1>Teste</h1>

                    </div>

                    <div className="card-footer" style={{ display: "block" }}>

                    </div>
                </div>
            </Content>
        </Authenticated>
    );
}