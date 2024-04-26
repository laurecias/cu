const paulo = document.querySelectorAll('.botaos');
const textos = document.querySelectorAll('.aba-conteudo');


for (let x = 0; x<paulo.length; x++){
    console.log(x);
    paulo[x].onclick = function() {
    for(let y = 0; y<paulo.length; y++){
     paulo[y].classList.remove('ativo');
     textos[y].classList.remove('ativa');
    
    }
     paulo[x].classList.add('ativo');
     textos[x].classList.add('ativa');
    }
}

const contadores = document.querySelectorAll('.contador');
let tempoAtual = new Date ();
let tempoObjetivo1 = new Date ('2024-04-28T00:00:00');
let tempoFinal = tempoObjetivo1 - tempoAtual;

let segundos = Math.floor(tempoFinal/1000);
let minutos = Mah.floor(segundos/60);
let horas = Math.floor(minutos/60);
let dias = Math.floor(horas/24);

contadores[0].textContent = dias + " dias " + horas + " horas " minutos + " minutos " +  segundos + " segundos ";
