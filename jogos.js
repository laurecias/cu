let numeroSecreto = 8;
console.log(numeroSecreto);
let chute = '';

while(chute == ""){

  chute = prompt('Escolha um número de 0 a 10');
}

if(numeroSecreto == chute) {
    alert('acertaste little');
    console.log('acertaste little');
}
   else{
    alert('ERROUUU!!!');
    console.log('erraste manito');
   }