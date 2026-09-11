// 5. Classe Pessoa: Crie uma classe que modele uma pessoa:
// 1. Atributos: nome, idade, peso e altura
// 2. Métodos: Envelhecer, engordar, emagrecer, crescer.
// Obs: Por padrão, a cada ano que nossa pessoa envelhece, sendo a idade dela menor que 21 anos,
// ela deve crescer 0,5 cm.

class Pessoa {
    nome:string
    idade:number
    peso:number
    altura:number

    constructor(nome:string, idade:number, peso:number, alt:number){
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = alt
    }
    engordar(quilos:number){
        this.peso = this.peso + quilos
    }
    emagrecer(quilos:number){
        this.peso = this.peso - quilos
    }
    crescer(cm: number) {
        this.altura += cm
    }
    envelhecer(anos: number) {
        this.idade += anos
    
    if(this.idade < 21){
        this.crescer(0.5)
    }

    }
}
let pessoa =  new Pessoa ("Mateus", 16, 60, 170) 

pessoa.envelhecer(3)
console.log(pessoa.idade)
console.log(pessoa.altura)

pessoa.envelhecer(5)
console.log(pessoa.idade)
console.log(pessoa.altura)