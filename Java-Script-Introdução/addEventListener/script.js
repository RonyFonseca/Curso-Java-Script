var btn = document.getElementById("btn");

btn.addEventListener("click", function enviar(){

    let angulo = document.getElementById("text-cont").value;

    let seno = Math.sin(angulo);
    let cosseno = Math.cos(angulo);
    let tangente = Math.tan(angulo);

    document.getElementById("sin").value = seno;
    document.getElementById("cos").value = cosseno;
    document.getElementById("tan").value = tangente;

});