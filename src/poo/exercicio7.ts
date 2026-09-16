// 7. Repetição
// Uma empresa quer cadastrar funcionários e aplicar aumento salarial. O sistema deve pedir nome,
// cargo e salário. Crie um método que receba um percentual de aumento e atualize o salário do
// funcionário, exibindo o seu nome e novo valor.

class Funcionarios{
    nome:string
    Cargo:string
    salario:number

    constructor(no:string, car:string, sal: number){
        this.nome = no
        this.Cargo = car
        this.salario = sal
    }
    aumento(percentual: number) {
        this.salario += this.salario * percentual / 100
    console.log(this.nome, this.salario)
    }        
}
let funcionário = new Funcionarios("Riquelme","programador", 4000)
funcionário.aumento(10)