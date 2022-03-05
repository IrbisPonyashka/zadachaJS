 
// первое задание через  while

// var x = +prompt('Введите число');
// var y = +prompt('Введите степень');
// var z = 1;
// var i = 0

// while( i < y)
// {
//     z = y * x;
//     i++;
// }
// console.log(z);

// первое задание через For
var x = +prompt('Введите число');
var y = +prompt('Введите степень');
var z = 1;
var i = 0;
for (;i < y;i++ ){ 
       z = z * y;
}
console.log(z);

// второе задание

var a = prompt("Введите количество ступенек")
var b = prompt("Введите символы ступенек")
var c = prompt("Введите конечный символ")

for (let i = 0; i < a; i++) {
    let line = ''
    for(let j = 0; j < i; j++) {
        line += b
    }
    console.log(line + '' + c);
}