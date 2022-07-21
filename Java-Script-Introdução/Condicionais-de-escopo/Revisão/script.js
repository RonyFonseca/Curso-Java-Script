
let simbolo1 =  "R$"; 
let simbolo2 = "$";
let simbolo3 = "£";

let moeda = function(x){
    switch(x){
        case simbolo1:
            console.log("Ela é em real!");
            break; 
        case simbolo2:
            console.log("Ela é em outro real");
            break;
        case simbolo3:
            console.log("Ela é uma moeda muito louca que não conheço"); 
            break;
        default:
            console.log("Ela não existe");
            break;
    };
};

moeda("R$");

let moeda2 = function(x){
    if(x === simbolo1){
        console.log("Ela é em real!");
    }else if(x === simbolo2){
        console.log("Ela é em outro real");
    }else if(x === simbolo3){
        console.log("Ela é uma moeda muito louca que não conheço");
    }else {
        console.log("Ela não existe");
    };
};

moeda2("£");

