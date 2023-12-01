var left = 0;
var top = 0;
var obj = document.getElementById("cx");
document.addEventListener("keydown", function(event){
    let tecla = event.which;
    console.log(tecla);
    if(tecla==65){
        left -= 10;
        obj.style.left=left+"px";
        console.log(tecla);
    }else if(tecla==68){
        left += 10;
        obj.style.left=left+"px";
        console.log(tecla);
    }else if(tecla==83){
        top += 10;
        obj.style.top=top+"px";
        console.log(tecla);
    }else if(tecla==87){
        top -= 10;
        obj.style.top=top+"px";
        console.log(tecla);
    }
})

