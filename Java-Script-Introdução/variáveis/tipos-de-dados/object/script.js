//Uma espécie de tabela de dados 

let carro = {
    rodas: 4,
    portas: 2, 
    aVenda: true, 
    ano: 2014
};


carro.rodas = 6; 
carro["ano"] = 2015; 

console.log(carro.ano);
console.log(carro.rodas);

let rony = {
    idade: 17, 
    nome: "Rony Fonseca de Lima", 
    sexo: "Maculino", 
    namora: true
};

console.log(rony.namora); 
console.log(rony.sexo);