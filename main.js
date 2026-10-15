// const userName = prompt("Введіть ваше ім'я:");
// alert(`Привіт, ${userName}!`);

// const CURRENT_YEAR = 2026;
// const birthYear = Number(prompt("Введіть ваш рік народження:"));
// const age = CURRENT_YEAR - birthYear;
// alert(`Вам приблизно ${age} років.`);

// const sideLength = Number(prompt("Введіть довжину сторони квадрата:"));
// const perimeter = 4 * sideLength;
// alert(`Периметр квадрата: ${perimeter}`);

// const radius = Number(prompt("Введіть радіус кола:"));
// const area = Math.PI * radius ** 2;
// alert(`Площа кола: ${area.toFixed(2)}`);

// const distance = Number(prompt("Введіть відстань між містами (км):"));
// const time = Number(prompt("Введіть час, за який потрібно дістатися (години):"));
// if (time <= 0) {
//   alert("Час повинен бути більше нуля!");
// }
// else{
//   const speed = distance / time;
//   alert(`Вам потрібно рухатись зі швидкістю: ${speed.toFixed(2)} км/год`);
// }

// const EXCHANGE_USD_TO_EUR = 0.92; 
// const USD = Number(prompt("Введіть суму в доларах (USD):"));
// const EUR = USD * EXCHANGE_USD_TO_EUR;
// alert(`${USD} USD = ${EUR.toFixed(2)} EUR`);

// const FILE_SIZE_MB = 820;
// const flashDriveGb = Number(prompt("Введіть обсяг флешки в ГБ:"));
// const flashDriveMb = flashDriveGb * 1024;
// const filesCount = Math.floor(flashDriveMb / FILE_SIZE_MB);
// alert(`На флешку вміститься ${filesCount} цілих файлів розміром 820 МБ.`);

// const money = Number(prompt("Скільки грошей ви маєте (грн)?"));
// const priceChocolate = Number(prompt("Ціна однієї шоколадки (грн):"));
// if (priceChocolate <= 0) {
//   alert("Ціна шоколадки повинна бути більше нуля!");
// }
// else {
//   const countChocolates = Math.floor(money / priceChocolate);
//   alert(`Ви можете купити ${countChocolates} шоколадок.`);
// }

const number = Number(prompt("Введіть тризначне число:"));
const digit3 = number % 10;                     
const digit2 = Math.floor(number / 10) % 10;     
const digit1 = Math.floor(number / 100);        
const reversedNumber = digit3 * 100 + digit2 * 10 + digit1;
alert(`Число-перевертень: ${reversedNumber}`);

const num = Number(prompt("Введіть ціле число:"));
const result = (num % 2 === 0 && "Парне") || "Непарне";
alert(`Число ${num} — ${result}`);