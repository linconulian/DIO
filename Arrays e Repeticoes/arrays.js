//Arrays são listas, representados por colchetes, onde o código passa em cada elemento
// Ordem: 0, 1, 2, ...

// const alunos = ['João', 'Vitor', 'Marina']

// alunos.push('Renan'); //adicionando no fim do array
// alunos[4] = 'Vinicius' //adicionando em uma ordem especifica ou substituindo
// console.log(alunos[1]); //Imprimindo a posição 1 do array
// alunos.pop() // tira da lista o último ou o definido no parêntesis
// console.log(alunos.length) // pra saber o tamanho do array
// console.log(alunos);

//Estruturas de repetição

// const notas = [5, 7, 8, 2, 5, 8]
// notas.push(10);
// let soma = 0;
// for (let i = 0; i < notas.length; i++) {
//     const nota = notas[i];
//     soma = soma + nota

// }


// console.log((soma/notas.length).toFixed(2)); // fazendo a media direto no console, sem utilizar const media

//Crie um programa que dado um numero imprima sua tabuada

// const numeroMultiplicado = 5

// for (let i = 1; i <= 10; i++) {
//     console.log(i*numeroMultiplicado);    
// }

//Crie um programa que seja capaz de percorrer uma lista de numeros e imprima cada par
//encontrado

// const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let i = 0; i < numeros.length; i++) {
//     const numeroPar = numeros[i]
//     if(numeroPar % 2 === 0){
//         console.log(`${numeroPar} é par`)
        
//     }else{
//         `${numeroPar} é impar`
//     }
    
// }