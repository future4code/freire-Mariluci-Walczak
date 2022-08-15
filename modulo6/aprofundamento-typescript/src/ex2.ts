/* function obterEstatisticas(numeros) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
} */
//a)
function obterEstatisticas(numeros: number[]): Estatisticas  {

    const numerosOrdenados: number [] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
console.log(obterEstatisticas)


//b)
type Estatisticas = {
    maior: number,
    menor: number,
    media: number
}

//c)
type AmostraDeIdades = {
    numeros: number[],
    obterEstatisticas: (numeros:number[])=> Estatisticas
}
console.log(obterEstatisticas)
