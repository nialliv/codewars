function maskify(cc) {
    let res = '';
    for (let i = 0; i < cc.length - 4; i++){
        res += "#";
    }
    return res + cc.slice(-4);
}

// Решение которое лучше этого...
// function maskify(cc) {
//     return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
// }

console.log("123456789");
console.log(maskify("123456789"));