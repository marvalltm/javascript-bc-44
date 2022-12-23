/**
 * TASK 1
 * Написати калькулятор. Калькулятор вміє виконувати операції '+' '-' '*' '/' '%'
 * Винеести ініціалізацію роботи калькулятора до функції main()
 * Створити окрему функцію для кожної окремої дії.
 * Функція main має в собі функціонал, який при завантажені сторінки буде
 * виводити prompt і очікувати строку у форматі "<перший_аргумент> <дія> <другий аргумент>"
 * Обробити ситуацію коли користувач не вірно вводить формат данных.
 *
 * Написати коментарі до функцій.
 */

// /**
//  * Ініціалізую роботу калькулятора.
//  */
// const main = function () {
//   const userInput = prompt(
//     'Введіть будь ласка операнди та дію між ними у форматі "2 + 4"'
//   );

//   const operands = parseString(userInput);
//   if (operands) {
//     const operation = checkOperation(operands[1]);
//     const result = operation(Number(operands[0]), Number(operands[2]));
//     alert("Результат: " + result);
//   } else {
//     sendErrorMessage();
//   }
// };

// /**
//  * Перевіряє що 1 і 3 елементи дорівнють числу.
//  * А 2 елемнт дорівнює дії.
//  * @param {Array} array
//  * @returns {Boolean} Резут превірки.
//  */
// const checkArrayElements = function (array) {
//   let result = true;
//   const operaion = ["+", "-", "*", "/", "%"];

//   if (!Number(array[0]) || !Number(array[2])) {
//     result = false;
//   }

//   if (!operaion.includes(array[1])) {
//     result = false;
//   }

//   return result;
// };

// /**
//  * Розбыває строку на масив.
//  * Повертає массив, якщо той відповідає перевіркі checkArrayElements
//  * @param {String} string
//  * @returns {Array || Boolean}
//  */
// const parseString = function (string) {
//   const parsedStrinToArray = string.split(" ");

//   return checkArrayElements(parsedStrinToArray) && parsedStrinToArray;
// };

// /**
//  * Додає одне число до іншого.
//  * @param {Number} number1
//  * @param {Number} number2
//  * @returns {Number} результат дії дадавання
//  */
// const summ = function (number1, number2) {
//   return number1 + number2;
// };

// /**
//  * Віднімає одне число від іншого.
//  * @param {Number} number1
//  * @param {Number} number2
//  * @returns {Number} результат дії віднімання
//  */
// const subtraction = function (number1, number2) {
//   return number1 - number2;
// };

// /**
//  * Множить одне число на інше.
//  * @param {Number} number1
//  * @param {Number} number2
//  * @returns {Number} результат дії множення
//  */
// const multiplication = function (number1, number2) {
//   return number1 * number2;
// };

// /**
//  * Ділить одне число на інше.
//  * @param {Number} number1
//  * @param {Number} number2
//  * @returns {Number} результат дії ділення
//  */
// const division = function (number1, number2) {
//   return number1 / number2;
// };

// /**
//  * Розраховує відсоток одного числа від іншого.
//  * @param {Number} number1
//  * @param {Number} number2
//  * @returns {Number} результат дії процент
//  */
// const percent = function (number1, number2) {
//   return (number2 / 100) * number1;
// };

// /**
//  * Повертає математичну операцію.
//  * @param {String} operation
//  * @returns {Function} Математична операція.
//  */
// const checkOperation = function (operation) {
//   switch (operation) {
//     case "+":
//       return summ;
//     case "-":
//       return subtraction;
//     case "*":
//       return multiplication;
//     case "/":
//       return division;
//     case "%":
//       return percent;
//     default:
//       break;
//   }
// };

// /**
//  * Виводить повідомлення про не вірний формат данних
//  */
// const sendErrorMessage = function () {
//   alert("Не вірний формат введених данних");
// };

// main();

//=========================================================
// =======================================================
// ========================================================

function checkOperators(array) {
  let result = false;
  const operation = ['+', '-', '*', '/', '%'];

  if (
    array.length === 3 &&
    Number(array[0]) &&
    Number(array[2]) &&
    operation.includes(array[1])
  ) {
    result = true;
  }

  return result;
}

function getOperators(string) {
  const result = string.split(' ');
  return (
    checkOperators(result) && [Number(result[0]), result[1], Number(result[2])]
  );
}

function summ(number1, number2) {
  const result = number1 + number2;
  return result;
}
function subtraction(number1, number2) {
  return number1 - number2;
}
function multiplication(number1, number2) {
  return number1 * number2;
}

/**
 *
 * @param {*} number1
 * @param {*} number2
 * @returns
 */
function division(number1, number2) {
  return number1 / number2;
}

/**
 *
 * @param {*} number1
 * @param {*} number2
 * @returns
 */
function percent(number1, number2) {
  return (number1 / 100) * number2;
}

/**
 * Find math operation
 * @param {String} operation
 * @returns {function} Math operation
 */
function getOperation(operation) {
  switch (operation) {
    case '+':
      return summ;
    case '-':
      return subtraction;
    case '*':
      return multiplication;
    case '/':
      return division;
    case '%':
      return percent;
  }
}

/**
 * initializes the program
 */
function main() {
  const prmt = prompt(
    "Введіть числа та операцію в форматі 'число' 'операція' 'число'"
  );
  const operators = getOperators(prmt);
  if (operators) {
    const operation = getOperation(operators[1]);
    const message = operation(operators[0], operators[2]);
    alert(message);
  } else {
    alert("Невірний формат! Потрібно ввести 'число' 'операція' 'число'");
  }
}

main();

// 1. написати маін. викликати її
// 2. В середі маін отримати дані від юзера.
// 3. Умовно формат данних це массив [число, дія, число]
// 4. перевірити що в моему масиві данні відповідні
//   4.1. написати функції яка приймає масив
//   4.2 перевірити що 1й і останній елемент - це числа
//   4.3 перевырити, що 2й елемент відповідає допустимим операціям
// 5. придумати логіку по якій я може викликати якусь мат.операції відповідну до дії
// 6. кудись зберегти результат роботи
// 7. Вивести результат роботи
