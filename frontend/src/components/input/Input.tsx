import React, { useEffect } from 'react';
import { useOrderState } from '../stateManagement/OrdersObjectContainer';
import { inputStyle, textBlockStyle } from '../styles/form-styles';

interface InputProps {
    name: string;
    value?: string | number;
    required?: boolean;
}
const Input = (props: InputProps) => {
    const { name, required, value } = props;
    const orderState = useOrderState();
    const onChange = (e: any) => {
        orderState.updateState(e.target.name, e.target.value);
    }

    useEffect(() => {
        orderState.updateState(name, value);
    }, [name, value]);
    return (
        <>
            <label htmlFor={`${name}`} style={textBlockStyle}>{name}</label>
            <input type='text' name={name} data-testid={`${name}`} onChange={onChange} required={required} style={inputStyle} value={value}>
            </input>
        </>
    )
}

export default Input;