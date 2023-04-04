/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la sum dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

const numUser = parseInt(prompt('Tira un numero da 1 a 5'));
const choiceUser = prompt('Pari o dispari?');
const numCPU = getRandomNumber(1, 5);
const sum = numUser + numCPU;
const result = (sum % 2) ? 'Dispari' : 'Pari';
const outputResult = Winner(choiceUser, result)

console.log(outputResult);

const messageStr =`
Hai tirato ${numUser} e hai scelto ${choiceUser} <br>
L'avversario ha tirato il ${numCPU} <br>
${outputResult}
`

document.getElementById('output').innerHTML = messageStr;

function Winner(strA, result){
  let outputStr;
  if(strA.toUpperCase() === result){
    outputStr = 'Vince l\'utente';
  }else{
    outputStr = 'Vince il PC';
  }

  return outputStr

}

function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}