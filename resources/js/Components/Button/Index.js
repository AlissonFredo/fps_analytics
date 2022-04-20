import React from "react";

export function Button({
    label = '',
    className = '',
    isLoading = true,
    action = () => {}
}) {
    const loading = (
        <div class="spinner-border spinner-border-sm text-light mr-2" role="status" />
    )

    return (
        <button
            type="button"
            className={"btn " + className}
            onClick={action}
        >
            {isLoading ? loading : ""}
            {isLoading ? 'Caregando...' : label}
        </button>
    )
}