var getPrice = function(time, sosProject){
  var price = 1500;
  var costProject = 0;
  if (sosProject){
    time = time / 2;
    price *= 2.5;
    }
     if (time > 150){
     price-=250; 
    }
   return costProject = time * price;
  }
  
var getProfitableProject = function (time, profit){
  var costSosProject = getPrice(time, true) - profit;
  //console.log(costSosProject);
 var costStandartProject = getPrice(time, false);
 //console.log(costStandartProject);
 var isSosProject = 0;
 var cost = 0;
 if (costSosProject < costStandartProject){
  isSosProject = 'срочный';
  cost = costSosProject;
 } else {
   isSosProject = 'обычный';
   cost = costStandartProject;
 }
 return 'Выгодней ' + isSosProject + ' проект. Потратишь на него ' + cost;
}

/* Техническое задание

Мяу! Напиши программу getProfitableProject, которая определяет, какой проект выгодней: срочный или обычный.

Функция принимает на вход два параметра:

- время на проект в часах;
- прибыль, которую принесёт сайт, если будет сделан в срочном режиме.

Названия параметров могут быть любыми.

Внутри функции надо сравнить два проекта: срочный и обычный.

Обрати внимание, что срочный проект принесёт прибыль за то время, пока готовился бы обычный проект. Поэтому прибыль от срочного проекта нужно вычесть из его стоимости.

Функция getProfitableProject должна возвращать строку:


- 'Выгодней срочный проект. Потратишь на него ' + расходы — если срочный проект окажется дешевле обычного.
- 'Выгодней обычный проект. Потратишь на него ' + расходы — если обычный проект дешевле.

*/