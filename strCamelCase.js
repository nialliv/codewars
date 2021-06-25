function toCamelCase(str){
    let result = '';
    if (str.search('-') >= 0) {
        result = str.split("-");
        // console.log(result);
    } else if (str.search('_') >= 0) {
        result = str.split("_");
        // console.log(result);
    } else {
        result = str.split("");
        // console.log(result);

    }
    
    for (let i = 1; i < result.length; i++) {
        result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
      console.log(result[i]);
    }
    
    return result.join('');
  }

// Функция которая работает быстрее и выглядит короче
// function toCamelCase(str){
// return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
// }

  console.log(`'' = ${toCamelCase('')}`);
  console.log(`the_stealth_warrior = ${toCamelCase("the_stealth_warrior")}`);
  console.log(`The-Stealth-Warrior =  ${toCamelCase("The-Stealth-Warrior")}`);
  console.log(`A-B-C = ${toCamelCase("A-B-C")}`);