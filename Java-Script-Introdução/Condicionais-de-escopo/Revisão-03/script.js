// Este objeto não precisa ser mexido
let carro = {
    rodas: 4,
    portas: 2,
    cor: "cinza",
    ano: 2012,
    estado: "novo"
};


function mudarPropriedade(nomePropriedade, novoValor){
    switch(nomePropriedade){
        // O case rodas é um exemplo para as próximas partes
        case "rodas":
            if(novoValor > 1){
                carro.rodas = novoValor;    
            }
            else{
                return "Minimo de rodas precisa ser 2";
            }
            break;
        case "portas":
            // Para alterar as portas, é necessário que o
            // novo valor seja maior que 0
            if(novoValor > 0){
                carro.portas = novoValor;
            }
            else{
                console.log("Minimo de portas precisa ser 1");
            };
            // senão deve retornar a string "Minimo de portas precisa ser 1"
            break;

        case "cor":
            if(novoValor == "vermelho","cinza","preto"){
                carro.cor = novoValor;
            }
            else{
                return "cor invalida";
            };
            // para alterar a cor, novo valor pode ser igual a cinza ou preto ou vermelho
            // se for diferente, retornar "Cor invalida"
            break;
        // criar um case para o "ano"
        case "ano":
            if(novoValor == 2019){
                carro.ano = "novo";
            }
            else{
                carro.ano = "usado";
            }
        // alterar o ano do carro para o ano informado
        // se o ano for igual a 2019, alterar o estado para "novo" 
        // senao alterar o estado para "usado"
        default:
            return "Propriedade invalida";
            // retornar a fraase "Propriedade invalida";
    }
    return "Alteracao concluida";
    // retornar a frase Alteracao concluida somente se foi possivel
    // alterar um dado do objeto.
}