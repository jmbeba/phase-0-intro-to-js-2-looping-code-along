// Code your solutions in this file

let myArr = [];
function writeCards(names, eventName){
    for(let i=0; i<names.length; i++){
        let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
        myArr.push(message);
    }

    return myArr;
}

function countDown(num){
    while(num>=0){
        console.log(num);
        num--;
    }
}
