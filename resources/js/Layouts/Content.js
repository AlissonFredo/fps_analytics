import React from "react";

export default function Content({children}) {
    return (
        // Content Wrapper. Contains page content
        <div className="content-wrapper">
            {children}
        </div>
        // /.content-wrapper
    )
}