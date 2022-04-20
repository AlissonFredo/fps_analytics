import React from "react";

export function Modal({
    titleHeader = '', 
    idModal = '', 
    sizeModal = '',
    children,
    handleChange = () => {},
    action = () => {}
}) {
    return (
        <div 
            className="modal fade" 
            id={idModal} 
            data-backdrop="static" 
            data-keyboard="false" 
            tabIndex="-1" 
            aria-labelledby={idModal + "Label"} 
            aria-hidden="true"
        >
            <div className={"modal-dialog " + sizeModal}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 
                            id={idModal + "Label"}
                            className="modal-title"
                        >
                            {titleHeader}
                        </h5>
                        <button 
                            className="close" 
                            data-dismiss="modal" 
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    <div className="modal-footer">
                        <button 
                            className="btn bg-gradient-secondary" 
                            data-dismiss="modal"
                        >
                            Cancelar
                        </button>
                        <button 
                            className="btn bg-gradient-primary"
                            onClick={action}
                        >
                            Salvar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}