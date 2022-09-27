
describe ("Praticando testes com Jest", () => {
   
    test("Exercício 0", () => {
        expect(ifEven(112)).toBe(true)
    });

    test("Exercício 1", () => {
        expect(toUpperCase("bananinha")).toEqual("BANANINHA")
    });

    test("Exercício 2", ()=> {
        expect(divideLetter("dev")).toEqual(["d","e","v"])
    });

    test("Exercício 3", ()=> {
        expect(Convert("50")).toBe(50)
    });

    test("Exercício 4", () => {
        expect(countLetter("jest")).toBe(4)
    });

    /* test("Exercício 5", ()=> {
       expect(randonNumber).toBe(' ')
    }); */

    test("Exercício 6", ()=> {
        const usuario:IUsuario = {
            id:"3",
            name: "Astrodev",
            age: 50
        }
        expect(usuarios).toContainEqual(usuario)
    });

    //test("Exercício 7", ()=> {
    // expect    
   // });

  //  test("Exercício 8", ()=> {
  //      expect
  //  });
  
  //test("Exercício 9", () => {
    //    expect(())
  //  })

})

//Exercício 0
const ifEven=(num:number):boolean =>{
    if(num % 2 === 0) {
        return true
    }
    return false 
}
//Exercício 1
const toUpperCase = (palavra:string): string => {
    return palavra.toUpperCase();
}
//Exercício 2
const divideLetter = (palavra: string): string[] => {
    return palavra.split("")
}
//exercício 3
 const Convert = (palavra:string): number => {
    return Number(palavra)
 }

//Exercício 4
const countLetter = (palavra: string): number => {
    return palavra.length
}
    
//Exercício 5
/* const randonNumber = (): number => {
    const numMin = 1;
    const numMax = 10;
    const resultado = Math.floor(Math.random() * (numMax - numMin) + numMin)
    return resultado
} */

//Exercício 6
interface IUsuario {
    id:string;
    name: string,
    age: number
}

const usuarios: IUsuario[] = [
    {
        id: "1",
        name: "Alice",
        age: 20
    },
    {
        id: "2",
        name: "Bob",
        age: 18
    },
    {
        id: "3",
        name: "Astrodev",
        age: 50
    }
]

//exercício 7
/* const calcAverage = (list: number[]): number => {
    let totalSum = 0
    
    for (let num of list) {
        totalSum += num
    }

    const average = Math.ceil(totalSum / list.length)

    return average
} */

//Exercício 8
/* const calcAge = (year: number): number => {
    const currentYear = new Date().getFullYear()
    const age = currentYear - year
    
    return age
}
 */
//Exercício 9
/* const formatDate = (initialDate: string): string => {
    const date = new Date(initialDate)
		const formattedDate = date.toLocaleDateString()

    return formattedDate 
} */

