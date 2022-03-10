function cambiaColor() {
    document.getElementById("div1").style.color = "#674ea7";
}
function regresaColor(){
    document.getElementById("div1").style.color = "#2986cc"
}
function refreshall(precio) {
    var total  =  document.getElementById("total").value;

    var num = parseInt(total);
    num += parseInt(precio);

    document.getElementById("total").value = num.toString();

}