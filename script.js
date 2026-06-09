const pantalla = document.getElementById("pantalla");

function agregar(valor){
    pantalla.value += valor;
}

function calcular(){
    try{
        pantalla.value = eval(pantalla.value);
    }catch{
        pantalla.value = "Error";
    }
}

function limpiar(){
    pantalla.value = pantalla.value.slice(0, -1);
}

function limpiarTodo(){
    pantalla.value = "";
}