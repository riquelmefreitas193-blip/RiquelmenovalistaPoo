// 3. Classe Retângulo: Crie uma classe que modele um retângulo:
// A. Atributos: LadoA, LadoB (ou Comprimento e Largura, ou Base e Altura, a escolher)
// B. Métodos:
//  Mudar valor dos lados,
//  Retornar valor dos lados,
//  Calcular Área,
//  Calcular Perímetro.
 
export function exercicio1(): void{
    class Retangulo{
        ladoA:number
        ladoB:number

        constructor(A:number, B:number){

            this.ladoA = A
            this.ladoB = B
        }

    mudarLado(novoLadoA:number, novoLadoB:number):void{
            this.ladoA = novoLadoA
            this.ladoB = novoLadoB
    }
        retorna(ladoA:number, ladoB:number){
            console.log(`O lado A è: ${ladoA}`)
            console.log(`O lado B è: ${ladoB}`)
        }

        calcularArea():number {
            return this.ladoA * this.ladoA;
        }
        calcularPerimentro():number {
            return 2 * (this.ladoA + this.ladoB)
        }
        exibir():void{
            
        }
        
    }   

    let novoRetangulo = new Retangulo(5, 8);

}