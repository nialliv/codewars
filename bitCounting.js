// 1 - перевести число в двоичную систему
// 2 - посчитать map reduce сколько едениц и вывести результат

let countBits = function(n) {
    // Program Me
    return (n).toString(2).split('').map(Number).reduce((a, b) => a + b);
};


console.log(countBits(123));