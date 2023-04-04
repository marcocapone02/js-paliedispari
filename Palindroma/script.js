/*
Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

1. Scrivo una parola che letta in modo inverso è uguale alla parola inserita

2. Le confronto e dichiaro se sono palindrome
*/


const insertWord = prompt('Inserisci una parola').trim();
const reverseWord = spinWord(insertWord);

output.innerHTML = (insertWord.toLowerCase() === reverseWord.toLowerCase()) ? 'La parola: ' + insertWord +  ' è palindroma!' : 'La parola: ' + insertWord +  ' non è palindroma.';

function spinWord(word){
  let reverseWord = '';

  for (let i = word.length - 1; i >= 0; i--){
    const letter = word[i];
    reverseWord += letter;
  }

  return reverseWord;
}
