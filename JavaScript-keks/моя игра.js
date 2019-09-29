var gameRules = {
 diceNumber: 2,
 maxAttempts: 3
}
var firstCat = {
  name: 'Кекс',
  points: 0
};

var secondCat = {
  name: 'Рудольф',
  points: 0
};

var cats = [firstCat, secondCat];

var runGame = function (rules, players) {
  for (var i = 0; i < players.length; i++) {
    var throwResult = keks.throwDice(rules.diceNumber, rules.diceNumber * 6);
    players[i].points += throwResult;
    console.log(players[i].name + ' выбросил ' + players[i].points);
  }
  return players;
};

cats = runGame(gameRules, cats);
console.log(cats);
/*
Наши игроки бросают кости, получают игровые очки, вроде всё здорово, но чего-то внутри игрового цикла не хватает. Чего же?

Сейчас каждый кот бросает кости один раз, а в нашей игре игрок имеет три попытки для броска. Пора записать это правило в виде кода.

Для начала нам нужно добавить переменную, которая будет содержать количество попыток игроков. Или не переменную?

В игре уже есть переменная, которая хранит количество игральных костей. Вместе с переменной количества попыток они образуют игровые правила. Поэтому создадим единую сущность с правилами игры, объект gameRules.

Перед дополнением игрового цикла придётся поправить параметры, аргументы и код в теле функции runGame с учётом нового объекта с правилами игры.*/
var gameRules = {
  diceNumber: 2,
  maxAttempts: 3
};

var firstCat = {
  name: 'Кекс',
  points: 0
};

var secondCat = {
  name: 'Рудольф',
  points: 0
};

var cats = [firstCat, secondCat];

var runGame = function (rules, players) {
  for (var currentAttempt = 1; currentAttempt <= rules.maxAttempts; currentAttempt++){
  for (var i = 0; i < players.length; i++) {
    var throwResult = keks.throwDice(rules.diceNumber, rules.diceNumber * 6);
    players[i].points += throwResult;
    console.log(players[i].name + ' выбросил ' + players[i].points);
  }
  }
  return players;
};