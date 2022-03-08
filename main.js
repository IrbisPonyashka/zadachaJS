
function birth(Name,year,old) {
    Name = prompt('Имя');
    year = +prompt('Год рождения');
    old = +prompt('Нынешний год');
    let x = old - year;
    alert('Ваше имя ' + Name + ', вы ' + year + ' года рождения ' + ' и вам ' + x + ' лет ')
}
birth()


