// Первое задание
let proga = {
    1: {
        user: 'Пользователь 1',
        name: prompt('Введите имя', 'Name'),
        age: +prompt('Введите ваш возраст', ' +18')
    },
    2: {
        user: 'Пользователь 2',
        name: prompt('Введите имя', 'Name'),
        age: +prompt('Введите ваш возраст', ' +18')
    },
    3: {
        user: 'Пользователь 3',
        name: prompt('Введите имя', 'Name'),
        age: +prompt('Введите ваш возраст', ' +18')
    },
    4: {
        user: 'Пользователь 4',
        name: prompt('Введите имя', 'Name'),
        age: +prompt('Введите ваш возраст', ' +18')
    },
    5: {
        user: 'Пользователь 5',
        name: prompt('Введите имя', 'Name'),
        age: +prompt('Введите ваш возраст', ' +18')
    },
    6: {
        user: 'Пользователь 6',
        name: prompt('Введите имя', 'Name'),
        age: +prompt('Введите ваш возраст', ' +18')
    },
    7: {
        user: 'Пользователь 7 ',
        name: prompt('Введите имя', 'Name'),
        age: +prompt('Введите ваш возраст', ' +18')
    },
    8: {
        user: 'Пользователь 8',
        name: prompt('Введите имя', 'Name'),
        age: +prompt('Введите ваш возраст', ' +18')
    },
    9: {
        user: 'Пользователь 9 ',
        name: prompt('Введите имя', 'Name'),
        age: +prompt('Введите ваш возраст', ' +18')
    },
    10: {
        user: 'Пользователь 10',
        name: prompt('Введите имя', 'Name'),
        age: +prompt('Введите ваш возраст', ' +18')
    }
}
    for(let key in proga){ 
        for(let newKey in proga[key]){    
        console.log((proga[key][newKey]));  
    }
}





