const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let currentInput = '';

// Обновление дисплея
function updateDisplay() {
  display.value = currentInput;
}

// Добавление символа
function addInput(value) {
  const lastChar = currentInput.slice(-1);

  // Запрет двойных операторов
  if ('+-*/.'.includes(lastChar) && '+-*/.'.includes(value)) return;

  // Запрет второй точки в одном числе
  if (value === '.' && /(\d*\.\d*)$/.test(currentInput)) return;

  currentInput += value;
  updateDisplay();
}

// Вычисление
function calculate() {
  try {
    const result = eval(currentInput);
    currentInput = result.toString();
    updateDisplay();
  } catch {
    currentInput = '';
    display.value = 'Ошибка';
  }
}

// Очистка
function clearInput() {
  currentInput = '';
  updateDisplay();
}

// Кнопки
buttons.forEach(button => {
  if (button.id === 'toggle-theme') return;

  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      clearInput();
    } else if (value === '=') {
      calculate();
    } else if (value === '%') {
      currentInput = (parseFloat(currentInput) / 100).toString();
      updateDisplay();
    } else if (value === '⌫') {
      currentInput = currentInput.slice(0, -1);
      updateDisplay();
    } else {
      addInput(value);
    }
  });
});

// Клавиатура
document.addEventListener('keydown', (e) => {
  const key = e.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
    addInput(key);
  } else if (key === '%') {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
  } else if (key === 'Escape') {
    clearInput();
  }
});

// Анимация появления кнопок
window.addEventListener('DOMContentLoaded', () => {
  const btns = document.querySelectorAll('.keypad button');
  btns.forEach((btn, i) => {
    setTimeout(() => {
      btn.classList.add('visible');
    }, i * 50);
  });
});

// Переключение темы
const toggleTheme = document.getElementById('toggle-theme');
toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
