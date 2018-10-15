const match = (value) => (cases) => {
    const hasKey = (key) => String(value) === key;
    const matchingCase = Object.keys(cases).find(hasKey) || '_';
    const result = cases[matchingCase];
    if (result === null || (typeof result === 'undefined')) {
        throw new Error('Match error');
    }
    return result;
};
export { match };
