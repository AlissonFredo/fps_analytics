import React from "react";

export function Pagination() {
    return (
        <ul className="pagination pagination-sm m-0">
            <li className="page-item"><a className="page-link" href="#">«</a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">»</a></li>
        </ul>
    )
}