import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import { ContentHeader } from '@/Components/ContentHeader/Index';
import { Content } from '@/Components/Content/Index';

export default function Dashboard(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Dashboard" />
            <ContentHeader>
                <div className='col'>
                    <h1>Dashboard</h1>
                </div>
            </ContentHeader>
            <Content>
                
            </Content>
        </Authenticated>
    );
}
