import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Dashboard 1" />

            {/* <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">You're logged in!</div>
                    </div>
                    <div className='card'>
                        <div className='card-header'>
                            <h1>teste 1</h1>
                        </div>
                        <div className='card-body'>
                            <button type="button" className="btn btn-primary btn-lg">Primary</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </Authenticated>
    );
}
