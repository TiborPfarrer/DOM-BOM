/**
 * Created by Ucenik on 4.5.2017..
 */
function sakrij() {
    var div = document.getElementById('mojdiv');
    if (div.style.display === 'none') {
        div.style.display = 'block';
        document.getElementById("buttoncic").innerHTML="sakrij";
    } else {
        div.style.display = 'none';
        document.getElementById("buttoncic").innerHTML="prikazi";
    }
}

function dodaj() {
    var a = document.getElementById("tekst").innerHTML;
    var para =document.createElement("p");
    var node= document.createTextNode(a);
    para.appendChild(node);
    var element = document.getElementById("div1");
    element.appendChild(para);
}

function obojaj() {
    var b=document.getElementById("boja").value;
    document.getElementById("div1").style.backgroundColor==b;
}