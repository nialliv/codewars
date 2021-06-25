function spinWords(string){
    //TODO Have fun :)
    let arr = string.split(' ');
    // console.log(arr.length);
    arr.forEach((item, index, arr) => {
        if (item.length >= 5){
            arr[index] = item.split('').reverse().join('');
        }
    });  

    return arr.join(' ');
}

// Примеры кода программистов, которые это делают лучше чем ты!
function spinWords(words){
    return words.split(' ').map(function (word) {
        return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
}
function spinWords(string){
    return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join(''); })
}
function spinWords(str){
    return str.split(' ').map( w => w.length<5 ? w : w.split('').reverse().join('') ).join(' ');
}