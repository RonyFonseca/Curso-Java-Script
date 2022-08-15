function calcularVetor(vetor, numero){
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] > 5){
            let mult = vetor[i] > 5 * numero;
            console.log(mult);
        };
    };
};

calcularVetor([1,3,4, 5], 10)