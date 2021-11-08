function calcNum(array) {
    let amount = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] % 3 == 0 && array[i] % 5 != 0) {
            amount += 1;
        }
    }
    return amount;
}

module.exports = calcNum;