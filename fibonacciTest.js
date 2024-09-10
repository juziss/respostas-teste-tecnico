function isFibonacci(num) {
    let a = 0;
    let b = 1;
    let temp;

    if (num === 0 || num === 1) {
        return true; 
    }

    while (b <= num) {
        temp = b;
        b = a + b;
        a = temp;

        if (b === num) {
            return true; 
        }
    }

    return false; 
}

const inputNumber = parseInt(prompt("informe um número p/ verificar se faz parte da sequência de fibonacci:"));

if (isFibonacci(inputNumber)) {
    console.log(`O número ${inputNumber} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${inputNumber} não pertence à sequência de Fibonacci.`);
}
