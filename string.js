function countLetterA(str) {
    let count = 0;

    // Loop através de cada caractere da string
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'A') {
            count++;
        }
    }

    return count;
}

const inputString = prompt("informe a string:");

const count = countLetterA(inputString);

if (count > 0) {
    console.log(`A letra 'a' aparece ${count} vez(es) na string.`);
} else {
    console.log("A letra 'a' não aparece na string.");
}
