const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';

function updateDisplay() {
  display.value = currentInput;
}

function addInput(value) {
  const lastChar = currentInput.slice(-1);

  // Запрет двойных операторов
  if ('+-*/.'.includes(lastChar) && '+-*/.'.includes(value)) return;

  // Запрет второй точки в одном числе
  if (value === '.' && /(\d*\.\d*)$/.test(currentInput)) return;

  currentInput += value;
  updateDisplay();
}

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

function clearInput() {
  currentInput = '';
  updateDisplay();
}

// Клики по кнопкам
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

   if (value === 'C') {
  display.value = '';
} else if (value === '=') {
  display.value = eval(display.value);
} else if (value === '%') {
  display.value = parseFloat(display.value) / 100;
} else if (value === '⌫') {
  display.value = display.value.slice(0, -1);
} else {
  display.value += value;
}


  });
});

// Поддержка клавиатуры
document.addEventListener('keydown', (e) => {
  const key = e.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
    display.value += key;
  } else if (key === '%') {
    display.value = parseFloat(display.value) / 100;
  } else if (key === 'Enter') {
    display.value = eval(display.value);
  } else if (key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  } else if (key === 'Escape') {
    display.value = '';
  }
});

// Плавное появление кнопок при загрузке
window.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.keypad button');
  buttons.forEach((btn, i) => {
    setTimeout(() => {
      btn.classList.add('visible');
    }, i * 50); // задержка между кнопками
  });
});

