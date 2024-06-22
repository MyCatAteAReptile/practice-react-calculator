export const isMath = (string: string) => {
    const matchedCharsArray: string[] | null =
        string.match('[-.=+*/0-9/s]{1,}');

    const result = matchedCharsArray
        ? matchedCharsArray[0].length === string.length
        : false;

    return result;
};

export const isFormulaCompleted = (string: string) => string.slice(-1) === '=';
