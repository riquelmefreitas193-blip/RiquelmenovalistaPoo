// 3. Classe Retângulo: Crie uma classe que modele um retângulo:
// A. Atributos: LadoA, LadoB (ou Comprimento e Largura, ou Base e Altura, a escolher)
// B. Métodos:
//  Mudar valor dos lados,
//  Retornar valor dos lados,
//  Calcular Área,
//  Calcular Perímetro.

export function exercicio3(): void {
    class Retangulo {
        ladoA: number
        ladoB: number

        constructor(A: number, B: number) {
            this.ladoA = A
            this.ladoB = B
        }

        mudarLado(novoLadoA: number, novoLadoB: number){
            this.ladoA = novoLadoA
            this.ladoB = novoLadoB
        }

        
        retornaLado(): number[] {
            return [this.ladoA, this.ladoB]
        }

        
        calcularArea(): number {
            return this.ladoA * this.ladoB
        }

        
        calcularPerimetro(): number {
            return 2 * (this.ladoA + this.ladoB)
        }

    }
let retangulo = new Retangulo(5, 10)


console.log(retangulo.retornaLado())
console.log(retangulo.calcularArea())
console.log(retangulo.calcularPerimetro())

retangulo.mudarLado(8, 12)

console.log(retangulo.retornaLado())
console.log(retangulo.calcularArea())
console.log(retangulo.calcularPerimetro())

}
