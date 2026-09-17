// 7. Repetição
// Uma empresa quer cadastrar funcionários e aplicar aumento salarial. O sistema deve pedir nome,
// cargo e salário. Crie um método que receba um percentual de aumento e atualize o salário do
// funcionário, exibindo o seu nome e novo valor.
export function exercicio7(){
class Funcionarios{
    private _nome:string
   private _cargo:string
   private _salario:number

    constructor(no:string, car:string, sal: number){
        this._nome = no
        this._cargo = car
        this._salario = sal
    }

    aumento(percentual: number) {
        this._salario += this._salario * percentual / 100
        alert(`Nome:${this._nome}\nNovo salário: ${this._salario.toFixed(2)}`)
    }        
}
let nome = prompt("Informe o seu nome: ") || ""
let cargo = prompt("Informe seu Cargo: ") || ""
let salario = Number (prompt("Informe seu salario atual: ")) 
salario
let funcionario = new Funcionarios(nome, cargo, salario)
funcionario.aumento(10)


}