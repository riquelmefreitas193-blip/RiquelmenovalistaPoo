// 4. Crie um programa que utilize a classe acima. Ele deve pedir ao usuário que informe as medidas de um
// local. Depois, deve criar um objeto com as medidas e calcular a quantidade de pisos e de rodapés
// necessárias para o local.

class Local {
    largura: number
    comprimento: number

    constructor(larg: number, comp: number) {
        this.largura = larg 
        this.comprimento = comp
    }
    caucularArea():number{
        return this.largura * this.comprimento
    }
    calcularPiso(larguraPiso: number, comprimentroPiso: number): number{
        let areaPiso = larguraPiso * comprimentroPiso
        return this.caucularArea() / areaPiso
    }
    calcularRodapes(tamanhoRoapes: number): number{
        let perimetro = (this.largura + this.comprimento) * 2
        return perimetro / tamanhoRoapes
    }
}
let largura = Number(prompt("Digite a largura do local: "))
let comprimento = Number(prompt("Digite o comprimentro do local: "))

let local = new Local(largura, comprimento)

let larguraPiso = Number(prompt("Digite a largura do piso: "))
let comprimentoPiso = Number(prompt("Digte o comprimento do piso: "))

let tamanhoRodapes = Number(prompt("Digite o tamanho do rodapes: "))

let area = local.caucularArea()
let quantidadePiso = local.calcularPiso(larguraPiso, comprimentoPiso)
let quantidadeRodapes = local.calcularRodapes(tamanhoRodapes)

console.log("Área do local: " + area)
console.log("Quantidade de pisos: " + quantidadePiso)
console.log("Quantidade de rodapés: " + quantidadeRodapes)