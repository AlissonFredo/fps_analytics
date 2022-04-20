import React from "react";

export function Input({
    id = '',
    placeholder = '',
    type = 'text',
    label = '',
    name = '',
    change,
    col = '',
    errors,
    value = ''
}) {
    return (
        <div className={"form-group " + col}>
            <label htmlFor={id}>
                {label}
            </label>
            <input 
                name={name}
                type={type} 
                className="form-control" 
                id={id} 
                placeholder={placeholder}
                onChange={change}
                value={value}
            />
            <span className="text-danger">
                {errors[name] ? errors[name] : ''}
            </span>
        </div>
    )
}