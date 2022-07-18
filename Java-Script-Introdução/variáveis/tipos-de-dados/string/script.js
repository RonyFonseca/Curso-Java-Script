//caracteres especiais 

console.log("Eu sou, \"Rony\", disse ele \'oi\'. Vamos quebrar a linha \n quebrou ? \\ "); 

//concatenar 
//usando +
let ola = "ola"; 
let mundo = "mundo";

let olaMundo = ola+mundo; 
console.log(olaMundo);

//usando string.concat 
let primeiroNome = "Rony";
let sobreNome = "Fonseca";

let nomeCompleto =primeiroNome.concat(sobreNome);
console.log(nomeCompleto);

//usando `${}`
console.log(`${ola} ${mundo}`);

//OBS: Gostei mais o que usa `${}` pq vc determina o espaço que quer