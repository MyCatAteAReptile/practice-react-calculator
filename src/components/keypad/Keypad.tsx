import React, { Dispatch, MouseEvent } from 'react';
import Button from '../button/Button';
import classes from './Keypad.module.css';
import Buttons from '../../global/buttons';
import ButtonVariants from '../../global/buttonVariants';
import CalculatorLogic from '../CalculatorLogic';

interface KeypadProps {
    formula: string;
    setFormula: Dispatch<React.SetStateAction<string>>;
    output: string;
    setOutput: Dispatch<React.SetStateAction<string>>;
}

const Keypad = ({ formula, setFormula, output, setOutput }: KeypadProps) => {
    const Operations = new CalculatorLogic(
        formula,
        setFormula,
        output,
        setOutput,
    );

    const onDigitClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement;
        Operations.processDigit(target.value);
    };

    const onOperationClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement;
        Operations.processOperation(target.value);
    };

    const onClearClickHandler = () => {
        Operations.clear();
    };

    const onDecimalClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement;
        Operations.processDecimal(target.value);
    };

    const onEqualsClickHandler = () => {
        Operations.processFormula();
    };

    const onClickHandlers: {
        [key in ButtonVariants]: (e: MouseEvent<HTMLButtonElement>) => void;
    } = {
        digit: onDigitClickHandler,
        operation: onOperationClickHandler,
        clear: onClearClickHandler,
        decimal: onDecimalClickHandler,
        equals: onEqualsClickHandler,
    };

    return (
        <div className={classes.keypad}>
            {Buttons.map((button) => (
                <Button
                    key={button.id}
                    use={button.variant}
                    id={button.id}
                    value={button.value}
                    onClick={onClickHandlers[button.variant]}
                />
            ))}
        </div>
    );
};

export default Keypad;
