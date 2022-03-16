let ter = [];
for(let i = 1; i < Infinity; i++){
    let kod = prompt('Введите команду')
    let c = kod.split(' ')[0];
    let v = kod.split(' ')[1];
    if(c == 'add,'){   
        ter.push(v);
    }else if( c == 'del,'){
        ter = ter.filter((l) => {return l !== v})
    }else if( kod == 'stop'){
        break
    }
    console.log(ter);
}
    
    
    // {
    //     kod == 'get' ? array.push(kod) : array = [] ;
    //     kod == 'del' ? array.pop() : array = [] ; 
    // }
