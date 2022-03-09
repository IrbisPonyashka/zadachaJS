
function birth(Name,year,old) {
    Name = prompt('Введите ваше имя');
    year = +prompt('Введите ваш год рождения');
    old = +prompt('Введите нынешний год');
    let x = old - year;
    alert('Ваше имя ' + Name + ', вы ' + year + ' года рождения ' + ' и вам ' + x + ' лет ')
}
birth()

function rand(min,max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}
let x = +prompt('Введите кол-во примеров')
let minNumber = +prompt('Введите минимальное число'); 
let maxNumber = +prompt('Введите максимальное число'); 
for(i = 0; i < x;i++) {
    let number1 = rand(minNumber,maxNumber) 
    let number2 = rand(minNumber,maxNumber) 
    if(number1 > number2){
        let primer = +prompt(number1 + ' - ' + number2 + ' =')
        let answer = (number1 - number2);
        if(answer = (number1 - number2) == primer){
           alert('Ваш ответ верный : ' + primer);
        }else if( alert('Ваш ответ ' + primer + ' не верный. ' + 'Правильный ответ :' + (number1 - number2))); 
    }else if(number1 < number2){
        let primer = +prompt(number1 + ' + ' + number2 + ' =')
        let answer = (number1 + number2);
        if(answer = (number1 + number2) == primer){
            alert('Ваш ответ верный : ' + primer);
         }else if( alert('Ваш ответ ' + primer + ' не верный. ' + ' Правильный ответ :' + (number1 + number2))); 
    }else if(number1 > 5){
        let primer = +prompt(number1 + ' / ' + number2 + ' =')
        let answer = (number1 / number2) == primer ? 'верный' : 'Ошибка';
        alert(number1 + ' / ' + number2 + ' = ' + (number1 / number2) + ' , ' + primer + ' Ваш ответ ' +   answer);
    }
    else if(number1 % 2){
        let primer = +prompt(number1 + ' * ' + number2 + ' =')
        let answer = (number1 * number2) == primer ? 'верный' : 'Ошибка';
        alert(number1 + ' * ' + number2 + ' = ' + (number1 * number2) + ' , ' + primer + ' Ваш ответ ' +  answer);
    }
}
// let primer = +prompt(number1 + ' + ' + number2 + ' =');
//     let answer = (number1 + number2) == primer ? 'Молодец' : 'Ошибка';