const paulo = document.querySelectorAll('.botaos');


for (let x = 0; x<paulo.length; x++){
    console.log(x);
    paulo[x].onclick = function() {
     paulo[x].classList.add('ativo');
    }
}