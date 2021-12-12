function rot13(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            result += String.fromCharCode((str.charCodeAt(i) + 13 - 65) % 26 + 65);
        } else {
            result += String.fromCharCode(str.charCodeAt(i));
        }
    }
    return result;
}

rot13("SERR PBQR PNZC");