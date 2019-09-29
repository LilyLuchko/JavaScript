var numbers = [12, 3, 7, 9, 10, 5];

for (var i = 0; i <= numbers.length - 2; i++) {
  var minValue = numbers[i];

  for (var j = i + 1; j <= numbers.length - 1; j++) {
    if (numbers[j] < minValue) {
      minValue = numbers[j];
      var swap = numbers[i];
      numbers[i] = minValue;
      numbers[j] = swap;
    }
  }
}

console.log(numbers);
// Выведет [3, 5, 7, 9, 10, 12];
///////////////////////////////
var qualificationDistance = 200;
var attempts = [120, 150, 160, 201, 203, 180, 202];
var qualified = false;
var averageBest = 0;


for (var i = 0; i <= attempts.length - 2; i++) {
  var maxValue = attempts[i];

  for (var j = i + 1; j <= attempts.length - 1; j++) {
    if (attempts[j] > maxValue) {
      maxValue = attempts[j];
      var swap = attempts[i];
      attempts[i] = maxValue;
      attempts[j] = swap;
    }
  }
console.log(attempts);
    averageBest = (attempts[0] + attempts[1] + attempts[2])/3;
    if (averageBest > qualificationDistance){
     qualified = true; 
    } else {
     qualified = false; 
    }
  
}

/* Техническое задание

Мяу! Я провожу тренировки и хочу понять, пройду ли квалификацию.

В течение тренировки я делаю несколько прыжков, и собираю длины прыжков в массив attempts.

Программа должна выбрать три лучших прыжка, а затем посчитать среднее значение этих трёх прыжков и записать его в переменную averageBest.

Квалификационное значение хранится в переменной qualificationDistance.

Если среднее от лучших трёх прыжков больше квалификационного значения, то я прошёл квалификацию и переменная qualified должна содержать true. Если квалификация не пройдена, то в qualified должно быть false.

*/