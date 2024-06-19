const Utils = {
    calculateNumber(type, a, b) {
        const roundedA = Math.round(a);
        const roundedB = Math.round(b);

        switch (type) {
            case 'SUM':
                return roundedA + roundedB;
            case 'SUBTRACT':
                return roundedA - roundedB;
            case 'DIVIDE':
                if (roundedB === 0) {
                    return 'Error';
                } else {
                    return roundedA / roundedB;
                }
            default:
                throw new Error(`Unsupported operation type: ${type}`);
        }
    }
};

module.exports = Utils;
