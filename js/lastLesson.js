/*
 * Exapmle 3
 * forEach() как замена циклов for и for...of для массивов
 */

// const numbers = [{ num: 1 }, { num: 2 }];
// const numbers2 = [1, 2, 3, 4, 5, 6];

// const callback = (element, index, array) => {
//   element.num *= 2;
//   console.group();
//   console.log("element: ", element);
//   console.log("index: ", index);
//   console.log("array: ", array);
//   console.groupEnd();
// };

// const ss = numbers.forEach(callback);
// console.log(numbers);

// numbers2.forEach((item) => {
//   console.log(item);
// });

// ==========================================================================
// ==========================================================================

// numbers.forEach((item) => {
//   console.log(item);
// });

// numbers.forEach(callback);

// numbers.forEach((el, idx, arr) => console.log(el));

// const ownForEach = function (array, callback) {
//   for (let i = 0; i < array.length; i += 1) {
//     callback(array[i], i, array);
//   }
// };

// ownForEach(numbers, (el, idx, arr) => {
//   console.log(el);
// });

// const numbers = [1, 2, 3, 4, 5];

// const getTotal = function (numbersArr) {
//   let total = 0;

//   // Через обычный for
//   //   for (let i = 0; i < numbersArr.length; i += 1) {
//   //     total += numbersArr[i];
//   //   }

//   // Через обычный for...of
//   for (const num of numbersArr) {
//     total += num;
//   }

//   // Через forEach();
//   numbersArr.forEach(el => (total += el));

//   return total;
// };

// console.log(getTotal(numbers));

/*
 * є функція, зробити рефакторіг, переписати її на forEach.
 */

// function logItems(items) {
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// const logItems = items =>
//   items.forEach((item, index) => console.log(`${index + 1} - ${item}`));

// const logItems = items => {
//   items.forEach((item, index) => {
//     console.log(`${index + 1} - ${item}`);
//   });
// };

// logItems([1, 2, 3, "sdfsdf", 34, "sdfsd"]);
// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

/*
 * є функція, зробити рефакторіг, переписати її на forEach та стрілкові функції.
 */

// function printContactsInfo({ names, phones } = {}) {
//   const nameList = names ? names.split(",") : [];
//   const phoneList = phones ? phones.split(",") : [];

//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// const printContactsInfo = ({ names, phones } = {}) => {
//   const nameList = names ? names.split(",") : [];
//   const phoneList = phones ? phones.split(",") : [];
//   nameList.forEach((element, index) => {
//     console.log(`${element}: ${phoneList[index]}`);
//   });
// };

// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemis",
//   phones: "89001234567,89001112233,890055566377,890055566300",
// });

/*
 * є функція, зробити рефакторіг, переписати її на forEach.
 */

// function calсulateAverage(...args) {
//   let total = 0;

//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }

//   return total / args.length;
// }

// const calсulateAverage = (...numbers) => {
//   let total = 0;

//   numbers.forEach(number => (total += number));

//   return total / numbers.length;
// };

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
