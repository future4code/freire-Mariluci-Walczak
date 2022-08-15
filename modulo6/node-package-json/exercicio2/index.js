
const resultado = (process.argv[2]);

const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

if (resultado && num1 && num2 != undefined) {

    switch (resultado) {
        case "soma":
            return console.log(`resultado = ${num1 + num2}`);
            break;
        case "sub":
            return console.log(`resultado = ${num1 - num2}`);
        case "mult":
            return console.log(`resultado = ${num1 * num2}`);
        case "div":
            return console.log(`resultado = ${num1 / num2}`);
        default:
            break;
    } 
} else {
    console.log("erro");
}






