let objetoAcesso = {
    acesso: true, 
    login: "mundo.js"
};


let objetoErro = {
    erro: "erro ao conectar",
};


let pagAcesso = function(x){
    if(objetoAcesso == x){
        if(objetoAcesso.acesso === true){
            console.log("login:"+ `${objetoAcesso.login}`);
        }else{
            console.log("Acesso negado");
        };
    }else if(objetoErro == x){
        console.log("Erro !");
    };

};

pagAcesso(objetoAcesso);
