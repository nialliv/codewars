// Не особо заморачиваясь можно выполнить это так...

function createPhoneNumber(numbers) {
    return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(-4).join('')}`;
}

// Решение которое кажется более интересным

function createPhoneNumber(numbers){
    return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
}