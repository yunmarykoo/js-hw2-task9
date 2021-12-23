var guest = +prompt('Введите количество гостей для определения количества разрезов торта (включая и для Пети)');

var evenGuest = ++guest;
var oddGuest = ++guest;

if (guest % 2 === 0){
    alert ('Понадобится ' + evenGuest + ' разреров по радиусу')
} else if (guest === 1){
    alert('Понадобится 1 разрез по диаметру')
} else if (guest === 3){
    alert('Понадобится 2 разреза по диаметру')
} else if (guest % 2 !== 0){
    alert('Понадобится ' + oddGuest + ' разрезов по диаметру')
}