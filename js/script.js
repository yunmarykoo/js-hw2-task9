var guests = +prompt('Введите количество гостей') + 1;

if (guests % 2 === 0 ){
    alert(guests / 2 + ' разрезов по диаметру');
} else {
    alert(guests + ' разрезов по радиусу') 
}