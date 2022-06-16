function num(){
var inp = document.getElementById("inp");
var list = document.getElementById("list");
var litem = document.createElement("li");
litem.innerHTML = inp.value;
list.appendChild(litem);
inp.value = " ";
if(litem.innerHTML == "zohaib"){
    alert("Youe enter my name");
}


}


function clr(){
var inp = document.getElementById("inp");
inp.value =   " ";
}


function del(){
var ele  = document.getElementById("list");
ele.remove();




}
