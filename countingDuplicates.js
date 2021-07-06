// В функции создается объект с ключом - символом строки
// и значением - частотой появления в строке, данного символа
// После, из объекта создается массив с его значениями
// массив фильтуется, остаются элементы больше 1, то есть больше одного появления в строке
// и возвращяется размер отфильтрованного массива.
function duplicateCount(text) {
    let count = {};
    text = text.toLowerCase();
    for (let i of text) {
        if(!(i in count)) {
            count[i] = 1;
        } else {
            ++count[i];
        }
    }
    return Object.values(count).filter(k => k > 1).length;
}

// а вот как решалось более лаконично...
function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}
// метод что и у моего решения, но более адекватный...
function duplicateCount(text){
    return text.toLowerCase().split('').filter(function(val, i, arr){
        return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}