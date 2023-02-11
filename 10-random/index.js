
let s;
let d;
let i;
let l;

document.getElementById("rollButton").onclick = function(){
    s = Math.floor(Math.random() * 10) + 4;
    d = Math.floor(Math.random() * 10) + 4;
    i = Math.floor(Math.random() * 10) + 4;
    l = Math.floor(Math.random() * 10) + 4;

    document.getElementById("slabel").innerHTML = "STR: " + s;
    document.getElementById("dlabel").innerHTML = "DEX: " + d;
    document.getElementById("ilabel").innerHTML = "INT: " + i;
    document.getElementById("llabel").innerHTML = "LUK: " + l;
}
