
let num3  = 1; 
while(num3 <= 10){
    console.log(num3);
    num3 ++;
    if(num3 == 5){
        break;
    }
}

for(let num4 of [1,2,3,4,5,6,7,8,9,10]){
    if(num4 == 7){
        continue;
    }
    console.log("Achei um número 7");
}