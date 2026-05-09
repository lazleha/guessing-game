class GuessingGame {
  constructor() {
    // Инициализируем переменные для хранения границ диапазона
    this.min = 0;
    this.max = 0;
    this.currentGuess = 0;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    // Находим середину текущего диапазона
    // Используем Math.ceil для округления вверх, как того требуют тесты
    this.currentGuess = Math.ceil((this.min + this.max) / 2);
    return this.currentGuess;
  }

  lower() {
    // Если загаданное число меньше нашего предположения,
    // сдвигаем правую (максимальную) границу к нашему числу
    this.max = this.currentGuess;
  }

  greater() {
    // Если загаданное число больше нашего предположения,
    // сдвигаем левую (минимальную) границу к нашему числу
    this.min = this.currentGuess;
  }
}

module.exports = GuessingGame;
