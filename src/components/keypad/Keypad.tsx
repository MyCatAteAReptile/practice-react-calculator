import React, { Dispatch, MouseEvent } from 'react';
import Button from '../button/Button';
import classes from './Keypad.module.css';
import Buttons from '../../global/buttons';
import ButtonVariants from '../../global/buttonVariants';
import { isFormulaCompleted, isMath } from '../../global/utils';

interface KeypadProps {
    formula: string;
    setFormula: Dispatch<React.SetStateAction<string>>;
    output: string;
    setOutput: Dispatch<React.SetStateAction<string>>;
}

const Keypad = ({ formula, setFormula, output, setOutput }: KeypadProps) => {
    const clear = () => {
        setFormula('');
        setOutput('0');
    };

    const processOperation = (operation: string) => {
        if (isFormulaCompleted(formula)) {
            clear();
        } else {
            setFormula(
                formula +
                    (output.slice(-1) === '.' ? output.slice(0, -1) : output) +
                    operation,
            );
            setOutput('0');
        }
    };

    const processDigit = (number: string) => {
        if (isFormulaCompleted(formula)) {
            setFormula('');
            setOutput(number);
        } else {
            if (output === '0') {
                setOutput(number);
            } else {
                setOutput(output + number);
            }
        }
    };

    const processFormula = () => {
        const resultFormula =
            formula + (output.slice(-1) === '.' ? output.slice(0, -1) : output);

        if (!isFormulaCompleted(formula)) {
            if (isMath(resultFormula)) {
                setFormula(`${resultFormula}=`);
                // to prevent eval from doing harm used isMath
                // eslint-disable-next-line
                setOutput(eval(resultFormula).toString());
            }
        }
    };

    const processDecimal = (divider: string) => {
        if (isFormulaCompleted(formula)) {
            setFormula('');
            setOutput('0.');
        } else {
            if (output.indexOf('.') === -1) {
                setOutput(output + divider);
            }
        }
    };

    const onDigitClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement;
        processDigit(target.value);
    };

    const onOperationClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement;
        processOperation(target.value);
    };

    const onClearClickHandler = () => {
        clear();
    };

    const onDecimalClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement;
        processDecimal(target.value);
    };

    const onEqualsClickHandler = () => {
        processFormula();
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
