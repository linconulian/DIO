//Verificação de número par

const numero = 10;

const numeroPar = numero % 2;

console.log(numeroPar)

if(numeroPar==0){
    console.log(`O numero ${numero} é par`);
}else{
    console.log(`O numero ${numero} é impar`);
}