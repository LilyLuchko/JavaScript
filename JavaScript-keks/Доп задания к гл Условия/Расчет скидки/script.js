var buy = 4000;
var discountedBuy;
if(buy >= 5000){
 discountedBuy = buy*0.85; 
}
else if (buy >= 3000 && buy < 5000){
 discountedBuy = buy*0.90; 
}
else if (buy >= 1000 && buy < 3000){
  discountedBuy = buy*0.95;
  }
  else {
    discountedBuy = buy;
    }
/* Техническое задание

Мяу! Напиши программу, которая будет рассчитывать сумму покупки с учётом скидки.

Стоимость записана в переменную buy.

Если стоимость покупки от 1000 (включительно) до 3000 (не включая это значение), скидка составляет 5%.

Если стоимость покупки от 3000 (включительно) до 5000 (не включая это значение), скидка 10%.

Если стоимость покупки от 5000 (включительно) и выше, скидка 15%.

В остальных случаях скидки для покупателей нет.

Вычисляй стоимость с учётом скидки и записывай результат в переменную
discountedBuy.

*/
