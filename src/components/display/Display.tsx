import React from 'react';
import classes from './Display.module.css';

interface DisplayProps {
    formula: string;
    output: string;
}

const Display = ({ formula, output }: DisplayProps) => (
    <div>
        <div className={[classes.display, classes.display__formula].join(' ')}>
            {formula}
        </div>
        <div className={classes.display} id="display">
            {output}
        </div>
    </div>
);

export default Display;
