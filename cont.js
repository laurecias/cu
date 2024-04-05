const paulo = document.querySelectorAll('.botaos');


for (let x = 0; x<paulo.length; x++){
    console.log(x);
    botoes[x].onclick = function() {
     botoes[x].classList.add('ativo');
    }
}