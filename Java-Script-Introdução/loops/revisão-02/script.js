function calcularVetor(vetor, numero){
    for(let i=0; i < vetor.length; i++){
        if(vetor[i] > 5){
            vetor[i] = vetor[i] * numero; 
        }
    }
    console.log(vetor);
}

calcularVetor([1,5,10, 20], 2);