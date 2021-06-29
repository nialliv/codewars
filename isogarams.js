// function isIsogram(str) {
//     str = str.toLowerCase();
//     // Превращаем строку в массив символов и сравниваем индексы
//     return str.split('').every((s, i) => str.indexOf(s) == i);
// }

// Код который делает это лучше, быстрее, красивее

function isIsogram(str) {
    return !/(\w).*\1/i.test(str);
}