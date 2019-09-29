/*Начинаем сортировку

Мы научились находить минимальное значение. Почему бы не сделать ещё шаг.

Теперь давайте не просто находить минимальное значение после первого элемента, а записывать это значение на место первого элемента. Для этого нужно немного дополнить алгоритм:

Добавим переменную minValue для хранения минимального значения.
Предположим, что первый элемент и есть минимальный. Поэтому до цикла сохраним в minValue значение первого элемента.
На каждой итерации цикла сравниваем текущий элемент со значением minValue.
Если текущий элемент меньше minValue, то записываем его в minValue, а затем меняем местами значение первого элемента и текущего.
После завершения работы цикла на первой позиции массива окажется элемент с минимальным значением. Все остальные элементы будут больше.*/


var usersByDay = [4, 2, 1, 3];
console.log(usersByDay);

var currentIndex = 0;
var minValue = usersByDay[currentIndex];

for (var j = currentIndex + 1; j <= usersByDay.length - 1; j++) {
  if (usersByDay[j] < minValue) {
    minValue = usersByDay[j];
    var swap = usersByDay[currentIndex];
    usersByDay[currentIndex] = minValue;
    usersByDay[j] = swap;
    console.log('Меняю местами ' + swap + ' и ' + minValue);
    console.log('Массив сейчас: ' + usersByDay);
  }
}

console.log('Минимальный элемент: ' + minValue);




//////////////////////////////////////////////**//////////////////////////////////////////

var usersByDay = [4, 2, 1, 3];
console.log(usersByDay);


// Сортировка с первого элемента
for (var currentIndex = 0; currentIndex <= usersByDay.length - 2; currentIndex++){

var minValue = usersByDay[currentIndex];

for (var j = currentIndex + 1; j <= usersByDay.length - 1; j++) {
  if (usersByDay[j] < minValue) {
    minValue = usersByDay[j];
    var swap = usersByDay[currentIndex];
    usersByDay[currentIndex] = minValue;
    usersByDay[j] = swap;
    console.log('Меняю местами ' + swap + ' и ' + minValue);
    console.log('Массив сейчас: ' + usersByDay);
  }
}
}
console.log('На позиции ' + currentIndex + ' находится минимальный элемент ' + minValue);

/////////////////////////////////////////////////////////////////////////////////////////
var usersByDay = [812, 1360, 657, 1247, 165];
console.log(usersByDay);

for (var i = 0; i <= usersByDay.length - 2; i++) {
  var minValue = usersByDay[i];

  for (var j = i + 1; j <= usersByDay.length - 1; j++) {
    if (usersByDay[j] < minValue) {
      minValue = usersByDay[j];
      var swap = usersByDay[i];
      usersByDay[i] = minValue;
      usersByDay[j] = swap;
    }
  }
  
}
console.log(usersByDay);