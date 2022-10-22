for(let keys in statistics){
    if(keys[0] == 'r'){
        console.log(statistics[keys]);
    }else if(statistics[keys] % 2 == 1){
        console.log(statistics[keys]);
    }
}