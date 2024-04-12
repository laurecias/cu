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