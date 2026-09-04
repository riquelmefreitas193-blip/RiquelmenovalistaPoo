// 2. Classe Quadrado: Crie uma classe que modele um quadrado:
//  Atributos: Tamanho do lado
//  Métodos: Mudar valor do Lado,
//  Retornar valor do Lado e calcular Área;
export function exercicio2(): void{    

    class Quadrado{
        tamanho:number
        
        constructor(tamanho:number){
            this.tamanho = tamanho
        }
        trocarLado(ladoNovo:number){
            this.tamanho = ladoNovo
        }
        returnLado():number{
            return this.tamanho
        }
        calcularArea():number{
            return this.tamanho * this.tamanho
        }
    }
    let quadrado = new Quadrado(10)
    console.log(`Lado do quadrado: ${quadrado.returnLado()}`)
    console.log(`A area do quadrado é: ${quadrado.calcularArea()}`)
    quadrado.trocarLado(15)
    console.log(`Novo lado do quadrado é: ${quadrado.returnLado()}`)
    console.log(`Nova Área do quadrado: ${quadrado.calcularArea()}`)
    }