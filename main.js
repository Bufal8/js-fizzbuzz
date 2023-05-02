// seleziono elemento contenitore
const contenitore = document.getElementById("contenitore");
console.log(contenitore);

// ciclo for per creare elementi e output
for(let i = 1; i <= 100; i++){
    
    
    // creare nuovo elemento
    const quadrato = document.createElement('span');
    
    
    // aggiungere classe ad ogni span
    quadrato.classList.add('square')
    
    
    // inserire il valore all'interno dell'elemento creato
    // quadrato.append(i);
    
    // se l'elemento è divisibile sia per 3 che per 5
    if(i % 15 == 0){
        quadrato.append("fizzbuzz")
    }
    // se l'elemento è divisibile per tre
    else if(i % 3 == 0){
        quadrato.append(`fizz`)
    }
    // se l'elemento è divisibile per 5
    else if(i % 5 == 0){
        quadrato.append(`buzz`)
    }
    // altrimenti scrivi il numero
    else{
        quadrato.append(i);
    }


    // aggiungere al contenitore l'elemento creato
    contenitore.append(quadrato);


}


// // for (var i = 1; i < 101; i++) {
//     if (i % 15 == 0) console.log("FizzBuzz");
//     else if (i % 3 == 0) console.log("Fizz");
//     else if (i % 5 == 0) console.log("Buzz");
//     else console.log(i);
// }
