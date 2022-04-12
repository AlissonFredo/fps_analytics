import React from "react";

export function ContentHeader({children}) {
    return (
        <div className='content-header'>
            <div className='container-fluid'>
                <div className='row mb-2'>
                    {children}
                </div>
            </div>
        </div>
    )
}