let contadorA = 0;
let contadorB = 0;
let contadorC = 0;
let votosNulos = 0;
let entradaDatos;

entradasDatos();
salidasDatos();

function entradasDatos() {
  do {
    entradaDatos = prompt(
      `¿Para usted quién fue el mejor jugador de todos los tiempos?
    Por Favor Ingrese los valores: (A,B,C o D).
     A)- Michael Jordan (Los Chicago Bulls)
     B)- Kobe Bryant (Los Angeles Lakers) 
     C)- LeBron James (Los Angeles Lakers)
     D)- NO QUIERO VOTAR`
    ).toLowerCase();
    switch (entradaDatos) {
      case "a":
        contadorA = contadorA + 3;
        alert(
          "Ha Elegido A)- Michael Jordan (Los Chicago Bulls).  gracias por su voto"
        );
        break;
      case "b":
        contadorB = contadorB + 3;
        alert(
          "Ha Elegido B)- Kobe Bryant (Los Angeles Lakers) gracias por su voto"
        );
        break;
      case "c":
        contadorC = contadorC + 3;
        alert("Ha Elegido C)- LeBron James (Los Angeles Lakers)");
        break;
      case "d":
        votosNulos++;
        alert("Usted no quizo votar. gracias igualmente...");
        break;
      default:
        alert(
          'La opción ingresada es incorrecta! recuerde que es: "A, B, C o D"'
        );
    }
  } while (entradaDatos != "esc");
}
function salidasDatos() {
  if (contadorA > contadorB && contadorA > contadorC) {
    console.log(
      `Ganador Es: "A" Michael Jordan (Los Chicago Bulls) con un total de: ${contadorA} Votos`
    );
  } else if (contadorA === contadorB || contadorB === contadorA) {
    console.log(
      `Es un Empate! El resulado "A" Michael Jordan (Los Chicago Bulls) es de: ${contadorA} Votos y el  Resultado "B" Kobe Bryant (Los Angeles Lakers) es de: ${contadorB} Votos`
    );
  } else if (contadorB > contadorA && contadorB > contadorC) {
    console.log(
      `Ganador Es: "B" Kobe Bryant (Los Angeles Lakers) con un total de: ${contadorB} Votos`
    );
  } else if (contadorB === contadorC || contadorC === contadorB) {
    console.log(
      `Es un Empate! el resulado "B" Kobe Bryant (Los Angeles Lakers) es de: ${contadorB} Votos y el Resultado "C" LeBron James (Los Angeles Lakers) es de: ${contadorC} Votos`
    );
  } else if (contadorC > contadorA && contadorC > contadorB) {
    console.log(
      `Ganador Es: "C" LeBron James (Los Angeles Lakers) es de : ${contadorC} Hotos`
    );
  } else if (contadorC === contadorA) {
    console.log(
      `Es un Empate! El Resulado "C" LeBron James (Los Angeles Lakers) es de : ${contadorC} Votos y Resultado "A" Michael Jordan (Los Chicago Bulls) es de: ${contadorA} Votos. `
    );
  } else {
    console.log(`Los Votos Nulos Ingresado Son: ${votosNulos}`);
  }
}

console.log(`El Voto "A" es de: ${contadorA}`);
console.log(`El Voto "B" es de: ${contadorB}`);
console.log(`El Voto "C" es de: ${contadorC}`);
console.log(`Los Votos Nulos son: ${votosNulos}`);
