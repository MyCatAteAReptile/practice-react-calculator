import React, { useState } from 'react';
import Keypad from './keypad/Keypad';
import Display from './display/Display';
import classes from './Calculator.module.css';

const Calculator = () => {
    const [formula, setFormula] = useState('');
    const [output, setOutput] = useState('0');

    return (
        <div className={classes.calculator}>
            <div className={classes.calculator__container}>
                <Display formula={formula} output={output} />
                <Keypad
                    formula={formula}
                    setFormula={setFormula}
                    output={output}
                    setOutput={setOutput}
                />
            </div>
        </div>
    );
};

export default Calculator;
