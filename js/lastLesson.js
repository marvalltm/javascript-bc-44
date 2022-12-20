/*
 * TASK 10
 * Напишіть скрипт який виводить в консоль ім'я та телефонний номер користувача.
 * В змінних names и phones зберігаються строки імен та телефонних номерів, розділені комами.
 */

// const names = 'Jacob,William,Solomon,Artemis';
// const namesArr = names.split(',');
// const phones = '89001234567,89001112233,890055566377,890055566300';
// const phonesArr = phones.split(',');

// console.log(namesArr);
// console.log(phonesArr);

// for (let i = 0; i < namesArr.length; i += 1) {
//   console.log(`${namesArr[i]}: ${phonesArr[i]}`);
// }

/*
 * TASK 11
 * Напишіть скрипт який повертає строку у зворотньому порядку.
 * Та виводить її в консоль.
 */

// 1 Варіант рішення
// const string = 'Welcome to the future';
// const charsArr = string.split('');
// // console.log(charsArr);
// const reverseCharsArr = [];

// for (let i = charsArr.length - 1; i >= 0; i -= 1) {
//   //   console.log(i);
//   reverseCharsArr.push(charsArr[i]);
// }
// console.log(reverseCharsArr);
// console.log(reverseCharsArr.join(''));

// 2 Варіант рішення
// const string = 'Welcome to the future';
// let reverseStr = '';

// for (let i = string.length - 1; i >= 0; i -= 1) {
//   reverseStr += string[i];
// }

// console.log(reverseStr);

/*
 * TASK 12
 * В нас є масив співробітників, відсортируйте його так, щоб співробітники не повторювались
 */

const employees = ["Dennis", "Shaw", "Watkins", "Ray", "Shaw", "Watkins"];
const filteredEmployees = []; // ["Dennis", "Shaw", "Watkins", "Ray"]

// 0 === 0
// 1 === 1
// 2 === 2
// 3 === 3
// 1 === 4
// 3 === 5

for (let i = 0; i < employees.length; i += 1) {
  //   console.log("index current elem: ", employees.indexOf(employees[i]));
  //   console.log("current index:", i);
  //   console.log("i: ", i, "value: ", employees.indexOf(employees[i]));
  if (employees.indexOf(employees[i]) === i) {
    filteredEmployees.push(employees[i]);
  }
}

// console.log(filteredEmployees);

// // //* Array.prototype.splice: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// // //* Cпівробітник Shaw звільнився, видалити його з масива
// const indexOfRemovedElement = filteredEmployees.indexOf("Shaw");
// filteredEmployees.splice(indexOfRemovedElement, 1);

// console.log(filteredEmployees);

// // // //? Додайте нового Cпівробітника Jhonson, перед Watkins;
// const indexOfWatkins = filteredEmployees.indexOf("Watkins");
// // filteredEmployees.splice(indexOfWatkins, 1, 'Thornton');//замінить
// filteredEmployees.splice(indexOfWatkins, 0, "Jhonson"); //добаве

// console.log(filteredEmployees);

// const string = "some body was told me";
// console.log(string.replaceAll(" ", "-"));
// аналогія replace
// const title = "Title 1".split(" ").join("-"); // Title-1
// console.log(title);

//аналогія concat
// console.log([2, 4, 6].concat([1, 3], [5], [1, 2, 3, 4]));
// console.log([...[2, 4, 6], ...[1, 3], ...[5], ...[1, 2, 3, 4]]);
