function calcularVetor(vetor, numero){
    for(let i = 0; vetor.length; i++){
        if(vetor[i] > 5){
            vetor[i] = vetor[i]*numero;
        };
    };
};

calcularVetor([1,3,4, 5], 10)