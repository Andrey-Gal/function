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
