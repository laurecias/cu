const paulo = document.querySelectorAll('.botaos');


for (let x = 0; x<paulo.length; x++){
    console.log(x);
    paulo[x].onclick = function() {
    for(let y = 0; y<paulo.length; y++){
     paulo[y].classList.remove('ativo');
    
    }
    paulo[x].classList.add



     paulo[x].classList.add('ativo');
    }
}