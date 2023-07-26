var btn = document.getElementById("btn");

btn.addEventListener("click", function(e){
    e.preventDefault(); 

    const num = document.querySelector("#num").value; 

    let sen = Math.sin(num);
    let cos = Math.cos(num);

    document.getElementById("seno").value="seno: " + sen;
    document.getElementById("cosseno").value=" Cosseno: "+cos;
})