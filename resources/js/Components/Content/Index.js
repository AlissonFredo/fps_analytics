import React from "react";

export function Content({ children }) {
    return (
        <div className='content'>
            <div className='container-fluid'>
                {children}
            </div>
        </div>
    )
}