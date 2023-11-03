function getArrayParams(...arr) {
    let min = Infinity;
    let max = -Infinity;
    let sum = 0;

    arr.forEach(num => {
        num > max && (max = num);
        num < min && (min = num);
        sum += num;
    });
    const avg = Number((sum / arr.length).toFixed(2));
    return {min: min, max: max, avg: avg};
}

function summElementsWorker(...arr) {
    return arr.reduce((a, b) => a + b, 0);
}

function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) {
        return 0;
    }
    return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
    if (arr.length === 0) {
        return 0;
    }
    let sumEvenElement = 0;
    let sumOddElement = 0;

    arr.forEach(num => {
        if (num % 2 === 0) {
            sumEvenElement += num;
        } else {
            sumOddElement += num;
        }
    });
    return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
    if (arr.length === 0) {
        return 0;
    }
    let sumEvenElement = 0;
    let countEvenElement = 0;

    arr.forEach(num => {
        if (num % 2 === 0) {
            sumEvenElement += num;
            countEvenElement++;
        }
    });

    if (countEvenElement === 0) {
        return 0;
    }
    return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
    let maxWorkerResult = -Infinity;

    arrOfArr.forEach(num => {
        const result = func(...num);
        if (result > maxWorkerResult) {
            maxWorkerResult = result;
        }
    });
    return maxWorkerResult;
}
