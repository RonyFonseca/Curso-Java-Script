let senha = 123; 
let acessar = true;
let tentativas = 1 ;
let login = 12345;

if(acessar==true){
    for(; tentativas <= 10; tentativas++){
        if(senha==login){
            console.log("Você acessou!");
        }else {
            console.log("Tente outra vez");
        };
    };
}else {
    console.log("Ta fora!")
}