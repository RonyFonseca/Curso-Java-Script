

function hora() {
    let data = new Date(); 
    let hora = data.getHours();
    var txt = "";
    if(hora < 12){
        txt = "Bom dia";
    }else if(hora < 18){
        txt = "Boa tarde";
    }else{
        txt = "Boa noite";
    }

    document.getElementById("hora").innerHTML = txt;
}

function btnYes() {
    let btn = document.getElementById("btn-yes");
    btn.style.backgroundColor="pink";
}

function btnNot() {
    let btn = document.getElementById("btn-not");
    btn.style.position="absolute";
    btn.style.left=Math.random()*500+"px";
    btn.style.top=Math.random()*500+"px";
}