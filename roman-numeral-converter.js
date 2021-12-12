function convertToRoman(num) {
    if (isNaN(num))
        return NaN;
    var number = String(+num).split(""),
        key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
            "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
            "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"
        ],
        romanNum = "",
        i = 3;
    while (i--)
        romanNum = (key[+number.pop() + (i * 10)] || "") + romanNum;
    return Array(+number.join("") + 1).join("M") + romanNum;
}

convertToRoman(36);