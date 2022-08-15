let aluno = [  
    {Nome:"Maria",Nota:8},
    {Nome:"João", Nota:10},
    {Nome:"Bruno", Nota:4},
    {Nome:"Rita", Nota:5},
]; 

for( i = 0; i < aluno.length; i++){
    if( aluno[i].Nota >= 7){
        console.log(`${aluno[i].Nome}: passou`);
    };
};

console.log("________________");

for(aluno of aluno){
    if(aluno.Nota >= 7){
        console.log(`${aluno.Nome}: Passou`)
    };
};