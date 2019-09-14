
var btnSaludar;

window.addEventListener('load', function(){
    btnSaludar= document.getElementById('btnSaludar');
    btnSaludar.addEventListener('click', Saludar());
});


function Saludar(){
    alert("hola mundo");
}

//document es una referencia al HTML, obtengo la dir de memoria de donde esta el boton y lo guardo en una variable
