import IButton from '../components/types/IButton';
import ButtonVariants from './ButtonVariants';

const Buttons: IButton[] = [
    {
        id: 'clear',
        value: 'AC',
        variant: ButtonVariants.clear,
    },
    {
        id: 'add',
        value: '+',
        variant: ButtonVariants.operation,
    },
    {
        id: 'subtract',
        value: '-',
        variant: ButtonVariants.operation,
    },
    {
        id: 'one',
        value: '1',
        variant: ButtonVariants.digit,
    },
    {
        id: 'two',
        value: '2',
        variant: ButtonVariants.digit,
    },
    {
        id: 'three',
        value: '3',
        variant: ButtonVariants.digit,
    },
    {
        id: 'multiply',
        value: '*',
        variant: ButtonVariants.operation,
    },
    {
        id: 'four',
        value: '4',
        variant: ButtonVariants.digit,
    },
    {
        id: 'five',
        value: '5',
        variant: ButtonVariants.digit,
    },
    {
        id: 'six',
        value: '6',
        variant: ButtonVariants.digit,
    },
    {
        id: 'divide',
        value: '/',
        variant: ButtonVariants.operation,
    },
    {
        id: 'seven',
        value: '7',
        variant: ButtonVariants.digit,
    },
    {
        id: 'eight',
        value: '8',
        variant: ButtonVariants.digit,
    },
    {
        id: 'nine',
        value: '9',
        variant: ButtonVariants.digit,
    },
    {
        id: 'zero',
        value: '0',
        variant: ButtonVariants.digit,
    },
    {
        id: 'decimal',
        value: '.',
        variant: ButtonVariants.decimal,
    },
    {
        id: 'equals',
        value: '=',
        variant: ButtonVariants.equals,
    },
];

export default Buttons;
