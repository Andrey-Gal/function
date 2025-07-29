// === Объявляем функцию "greeting", которая принимает два параметра: text (текст приветствия) и name (имя)
function greeting(text, name) {
  // Преобразуем текст приветствия к нижнему регистру (всё строчными буквами)
  const preparedText = text.toLowerCase();

  // Преобразуем имя тоже в нижний регистр
  const preparedName = name.toLowerCase();

  // Склеиваем приветствие и имя через пробел и возвращаем эту строку
  return preparedText + ' ' + preparedName;
}

// === Вызываем функцию greeting с аргументами 'Привет' и 'СЕРГЕЙ'
// Результат сохраняем в переменную greetSergey
const greetSergey = greeting('Привет', 'СЕРГЕЙ');

// То же самое, только с английскими словами
const greetPavel = greeting('Hello', 'Pavel');

// === Выводим результат в консоль (можно увидеть в терминале после запуска через node script.js)
console.log(greetSergey); // → привет сергей
console.log(greetPavel);  // → hello pavel

function calculate(a, b, operation) {
  if (operation === '+') {
    return a + b;
  } else if (operation === '-') {
    return a - b;
  } else if (operation === '*') {
    return a * b;
  } else if (operation === '/') {
    return b !== 0 ? a / b : 'Ошибка: деление на 0';
  } else {
    return 'Неизвестная операция';
  }
}

console.log(calculate(10, 5, '+')); // 15
console.log(calculate(10, 5, '-')); // 5
console.log(calculate(10, 5, '*')); // 50
console.log(calculate(10, 0, '/')); // Ошибка: деление на 0
