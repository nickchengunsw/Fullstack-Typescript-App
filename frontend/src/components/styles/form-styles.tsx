import { CSSProperties } from 'react';


export const textBlockStyle = {
    width: '100%',
    display: 'block',
    fontSize: '20px',
    lineHeight: '40px',
    fontFamily: 'Spartan, sans-serif' 
} as CSSProperties;

export const inputStyle = {
    width: '100%',
    display: 'block',
    fontSize: '20px',
    lineHeight: '40px',
    fontFamily: 'Spartan, sans-serif',
    marginBottom: '40px',
    border: '1px solid rgba(0,0,0,.1)',
    borderRadius: '2px',
    background: '#f8f4e5',
    paddingLeft: '5px',
    outline: 'none'
} as CSSProperties;

export const container = {
    background: '#f8f4e5',
    padding: '50px 100px',
    borderTop: '10px solid #f45702'
} as CSSProperties;

export const button = {
    display: 'block',
    float: 'right',
    lineHeight: '40px',
    padding: '0 20px',
    border: 'none',
    background: '#f8f4e5',
    color: 'white',
    letterSpacing: '2px',
    transition: '.2s all ease-in-out',
    borderBottom: '2px solid transparent',
    outline: 'none'
} as CSSProperties;