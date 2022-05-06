import React from "react";
import { Button } from '@/Components/Button/Index';

export function Modal({
    titleHeader = '',
    idModal = '',
    sizeModal = '',
    children,
    method = '',
    isLoadingButton,
    handleChange = () => { },
    action = () => { },
    handleModalClose = () => { }
}) {
    const labelButtonAction = {
        save: 'Salvar', 
        update: 'Atualizar', 
        destroy: 'Excluir'
    }
    const modalBody = (
        <div className="modal-body">
            {children}
        </div>
    )
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
                            onClick={handleModalClose}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    {children === undefined ? "" : modalBody}

                    <div className="modal-footer">
                        <button
                            className="btn btn-sm bg-gradient-secondary"
                            data-dismiss="modal"
                            onClick={handleModalClose}
                        >
                            Cancelar
                        </button>
                        <Button
                            className='btn-sm bg-gradient-primary'
                            label={labelButtonAction[method]}
                            action={action}
                            isLoading={isLoadingButton}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}