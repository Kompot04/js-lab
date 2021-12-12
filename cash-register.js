function checkCashRegister(price, cash, cid) {
    var sum = cash - price;
    var cid2 = cid.slice().reverse();
    let arr = [];
    let dividers = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    };

    for (var currency of cid2) {
        let coins = dividers[currency[0]];
        let quantity = Math.min(Math.trunc(sum / coins), currency[1] / coins);
        let amountOfCourse = quantity * coins;
        sum -= amountOfCourse;
        sum = sum.toFixed(2);
        currency[1] -= amountOfCourse;

        arr.push([currency[0], amountOfCourse]);
    }
    if (sum > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (cid2.reduce((acum, mySum) => { return acum += mySum[1] }, 0) == 0) {
        return { status: "CLOSED", change: arr.reverse() };
    } else {
        return { status: "OPEN", change: arr.filter(item => item[1] > 0) };
    }
    l
}

checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]);