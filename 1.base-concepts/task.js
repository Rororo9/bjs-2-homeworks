"use strict"

function solveEquation(a, b, c) {
    const discriminant = Math.pow(b, 2) - 4 * a * c;

    if (discriminant < 0) {
        return [];

    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        return [root];

    } else {
        let arr = [];
        const root_1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root_2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        arr.push(root_1, root_2);
        return arr;
    }
}

console.log(solveEquation(1, 6, 2))


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    const monthlyPercent = percent / 100 / 12;
    const loanBody = amount - contribution;
    const monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1)));
    const totalAmount = (monthlyPayment * countMonths).toFixed(2);

    return Number(totalAmount);
}

console.log(calculateTotalMortgage(10, 0, 50000, 12));

