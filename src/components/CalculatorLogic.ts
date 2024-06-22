import React, { Dispatch } from 'react';
import { isFormulaCompleted, isMath } from '../global/utils';

export default class CalculatorLogic {
    private formula: string = '';

    private setFormula: Dispatch<React.SetStateAction<string>>;

    private output: string = '';

    private setOutput: Dispatch<React.SetStateAction<string>>;

    constructor(
        formula: string,
        setFormula: Dispatch<React.SetStateAction<string>>,
        output: string,
        setOutput: Dispatch<React.SetStateAction<string>>,
    ) {
        this.formula = formula;
        this.setFormula = setFormula;
        this.output = output;
        this.setOutput = setOutput;
    }

    clear = () => {
        this.setFormula('');
        this.setOutput('0');
    };

    processOperation = (operation: string) => {
        if (isFormulaCompleted(this.formula)) {
            this.clear();
        } else {
            this.setFormula(
                this.formula +
                    (this.output.slice(-1) === '.'
                        ? this.output.slice(0, -1)
                        : this.output) +
                    operation,
            );
            this.setOutput('0');
        }
    };

    processDigit = (number: string) => {
        if (isFormulaCompleted(this.formula)) {
            this.setFormula('');
            this.setOutput(number);
        } else {
            if (this.output === '0') {
                this.setOutput(number);
            } else {
                this.setOutput(this.output + number);
            }
        }
    };

    processFormula = () => {
        const resultFormula =
            this.formula +
            (this.output.slice(-1) === '.'
                ? this.output.slice(0, -1)
                : this.output);

        if (!isFormulaCompleted(this.formula)) {
            if (isMath(resultFormula)) {
                this.setFormula(`${resultFormula}=`);
                // to prevent eval from doing harm used isMath
                // eslint-disable-next-line
                this.setOutput(eval(resultFormula).toString());
            }
        }
    };

    processDecimal = (divider: string) => {
        if (isFormulaCompleted(this.formula)) {
            this.setFormula('');
            this.setOutput('0.');
        } else {
            if (this.output.indexOf('.') === -1) {
                this.setOutput(this.output + divider);
            }
        }
    };
}
