import React from 'react';
import { useOrderState } from '../stateManagement/OrdersObjectContainer';
import { inputStyle, textBlockStyle } from '../styles/form-styles';

interface InputProps {
    name: string;
    required?: boolean;
}
const Input = (props: InputProps) => {
    const { name, required } = props;
    const orderState = useOrderState();
    const onChange = (e: any) => {
        orderState.updateState(e.target.name, e.target.value);
    }
    return (
        <>
            <label htmlFor={`${name}`} style={textBlockStyle}>{name}</label>
            <input type='text' name={name} data-testid={`${name}`} onChange={onChange} required={required} style={inputStyle}>
            </input>
        </>
    )
}

export default Input;