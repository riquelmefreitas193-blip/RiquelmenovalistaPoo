// 8. Arrays Repetição
// Uma empresa precisa de um sistema simples para cadastrar seus funcionários. O sistema deve solicitar
// ao usuário o nome, o cargo e o salário de vários funcionários. Para cada funcionário cadastrado, deve
// ser criado um objeto que armazene essas informações. Ao final, o sistema deve exibir um resumo de
// todos os funcionários cadastrados, utilizando um método da classe.

export function exercicio8(){
class Funcionarios {
    private _nome: string
    private _cargo: string
    private _salario: number

    constructor(_no: string, _car: string, _sal: number){
        this._nome = _no
        this._cargo = _car
        this._salario = _sal
    }
    set nome(novoNome: string){
        this._nome = novoNome
    }
    set salario(novoSalario: number){
        this._salario = novoSalario
    }

    public exibirResumo() {
        alert(`Seu nome é: ${this._nome}\n Seu cargo é: ${this._cargo}\n Seu salario é esse: ${this._salario} `)
    }
}
let nome = prompt("Informe seu nome: ") || ""
let cargo = prompt("Informe seu Cargo: ")|| ""
let salario = Number(prompt("informe seu salario: "))

let funcionairios = new Funcionarios(nome, cargo,salario)

funcionairios.exibirResumo()

}