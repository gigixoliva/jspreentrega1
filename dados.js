
//variables para ambos
//numeros random que siempre comienzen desde 2 hasta el 12
let numeroRandomjugador = Math.floor(Math.random()* 12) + 2;
let numeroRandompc = Math.floor(Math.random() * 12) + 2; 

//funciones para mostrar los numeros generados en el alert

function primerNumero(){
    alert (numeroRandomjugador)
    console.log(numeroRandomjugador)
}

function segundoNumero(){
    alert (numeroRandompc)
    console.log(numeroRandompc)
}

//condicional
function compare(){
    if (numeroRandomjugador > numeroRandompc) {
        console.log ("you win! \n congrats!")
        alert ("you win! \n congrats!")
      } else if (numeroRandomjugador == numeroRandompc) {
        console.log ("it's a tie! \n :o")
        alert ("it's a tie! \n :o")
      } else{
        alert("you lost :( \n better luck next time")
        console.log ("you lost :( \n better luck next time")
      }

}

//refresca la página
function refreshGame(){
    location.reload();
}