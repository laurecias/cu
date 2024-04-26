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

let segundos = tempoFinal/1000;

contadores[0].textContent = segundos;
