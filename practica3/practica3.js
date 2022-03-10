$(document).ready(function (){

    $("#titulo").click(function () {
        $(this).hide();
    });

    $("#boton").click(function (){
            $("#e1").fadeToggle(1200);
            $("#e2").fadeToggle(1700);  
            $("#e3").fadeToggle(2200); 
            
            $("#e1").fadeTo("slow", 0.1);
            $("#e2").fadeTo("slow", 0.5);
            $("#e3").fadeTo("slow", 0.9);
    });

    $("#lista").click(function () {
        $("#contenido").slideToggle("slow");
    });

});