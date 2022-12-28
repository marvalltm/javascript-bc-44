/*
 *  ===================== Метод findIndex() ===============================
 */

// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];

/**
 * Знайти індекс елемента за значнням моделі
 */

// console.log(cars.findIndex(item => item.model === 'Mazda 6'));

// const cars = [
//     { model: ["22", "dd", "fgh"] },
//     { model: ["23", "gd", "llh"] },
//     { model: ["21", "dh", "gd"] }
// ]
// const someModel = "gd" // `[1][1]`
// console.log(cars.findIndex(item => item.model.includes(someModel)))

// const getMatrixIndex = (cars, someModel) => {
//     let secondPart
//     const firstPart = cars.findIndex(item => {
//         secondPart = item.model.indexOf(someModel) 
//         return secondPart !== -1 && true
//     })

//     console.log(`[${firstPart}][${secondPart}]`)
// }

// const getMatrixIndex = (cars, someModel) => {
//     return cars.reduce((acc, item, index) => {
//         const second = item.model.indexOf(someModel)
//         return acc == "" && second !== -1 ? `[${index}][${second}]` : acc
//     }, "")
// }

// console.log(getMatrixIndex(cars,someModel))
/*
 *  ===================== Метод some() ===============================
 */

// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 0, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 0, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 0, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 0, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 0, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 0, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 1, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 0, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 0, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 0, price: 31660, onSale: false },
// ];

/**
 * Перевірити що хоча б один з автомобілів є в гаражі (властивість amount )
 */

// console.log(cars.some(item => item.amount));

/*
 *  ===================== Метод every() ===============================
 */

// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 0, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];

// /**
//  * Перевырити що всі автомобілі є в гаражі
//  */

// console.log(cars.every(item => item.amount));

/*
 *  ===================== Ланцюжки методів ===============================
 */

// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];

/*
 * Нехай функція getAvailableCarNames поверне масив моделей автомобілей, но тільки тих, котрі зараз на распродажі.
 */
// const getModelsOnSale = cars => {
//     return cars
//         .filter((item, index, array) => {
//             const indeInArray = array.findIndex((val) => item.type === val.type)
//             return item.onSale && indeInArray === index
//         })
//         .map(item => ({ model: item.model, type: item.type }))
//         .sort((a, b) => a.model.localeCompare(b.model))
// }

// console.log(getModelsOnSale(cars))

/*
 * Нехай функція getSortedCarsOnSale поверне масив автомобілей на распродажі (властивість onSale),
 * відсортированний по зростанню ціни.
 */

// const getSortedCarsOnSale = cars => {
//   return cars.filter(el => el.onSale).sort((a, b) => a.price - b.price);
// };

// console.table(getSortedCarsOnSale(cars));
