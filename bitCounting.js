let countBits = function(n) {
    // Program Me
    // Конвертируем число в двоичную систему
    // Превращаем символы строки в массив
    // Каждый элемент превращаем в число
    // Суммируем элементы массива
    return n.toString(2).split('').map(Number).reduce((a, b) => a + b);
};


console.log(countBits(123));