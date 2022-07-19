let objeto = {
    objeto02 : {
        vetor: [1, 2, {valor:55}]
    }
};

console.log(objeto["objeto02"].vetor.valor);
console.log(objeto.objeto02.vetor.valor);
console.log(objeto["objeto02"]["vetor"][2].valor); 
console.log(objeto.objeto02.vetor[2].valor);





let funcaoSomar = function(valor1, valor2){
    // Atribua a soma das variaveis valor1 e valor2 ao resultado
    let resultado = valor1 + valor2;
    console.log(resultado);
    return resultado;
};

funcaoSomar(1,3);
funcaoSomar(2, -5);

