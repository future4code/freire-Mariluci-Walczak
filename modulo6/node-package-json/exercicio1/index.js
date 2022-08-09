//Através de utilizar a propriedade process.argv[] 

console.log("Olá,", process.argv[2],"! Você tem", process.argv[3],"anos.")



const idade = Number(process.argv[3])+ 7;
console.log(`Olá, ${process.argv[2]} ! Você tem ${process.argv[3]} anos. Em sete anos você terá, ${idade} anos.`)


