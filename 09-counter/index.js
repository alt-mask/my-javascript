let count = 0;

document.getElementById("decB").onclick = function(){
    count -= 1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("incB").onclick = function(){
    count += 1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("resetB").onclick = function(){
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}