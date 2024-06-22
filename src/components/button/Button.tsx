import React, { MouseEvent } from 'react';
import classes from './Button.module.css';
import ButtonVariants from '../../global/ButtonVariants';

const buttonsClasses: { [key in ButtonVariants]: string } = {
    digit: `${classes.button} ${classes.button__digit}`,
    operation: `${classes.button} ${classes.button__operation}`,
    clear: `${classes.button} ${classes.button__operation}`,
    decimal: `${classes.button} ${classes.button__digit}`,
    equals: `${classes.button} ${classes.button__operation}`,
};

interface ButtonProps {
    id: string;
    value: string;
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    use: keyof typeof buttonsClasses;
}

const Button = ({ id, value, onClick, use }: ButtonProps) => {
    const className = buttonsClasses[use];

    return (
        <button
            type="button"
            id={id}
            onClick={onClick}
            value={value}
            className={className}
        >
            {value}
        </button>
    );
};

export default Button;
