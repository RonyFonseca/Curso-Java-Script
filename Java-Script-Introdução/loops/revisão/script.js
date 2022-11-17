let alunos = [{nome:"Maria",nota:8},{nome:"Pedro",nota:4},{nome:"João",nota:10},{nome:"Paulo",nota:9},{nome:"Ana", nota:7},{nome:"Bianca",nota:6}, {nome:"Rony",nota:10}];

for(let i=0; i < alunos.length; i++){
    if(alunos[i].nota >= 7){
        console.log(alunos[i].nome + " passou, parabéns !!");
        let alunoPassouNome = alunos[i].nome; 
        continue;
    }else if(alunos[i].nota < 7 && alunos[i].nota >= 5){
        console.log(alunos[i].nome + " passsou abaixo da média"); 
        continue;
    }else {
        console.log(alunos[i].nome + " não passou !!")
    }
}