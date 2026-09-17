// 6. Classe Conta Corrente: Crie uma classe para implementar uma conta corrente. A classe deve possuir
// os seguintes atributos: número da conta, nome do correntista e saldo. Os métodos são os seguintes:
// alterarNome, depósito e saque. No construtor, saldo é opcional, com valor default zero e os demais
// atributos são obrigatórios. Por fim, faça com que esse sistema interaja com o usuário permitido que
// ele, depois de cadastrar as suas informações, possa usar os métodos disponíveis.
export function exercicio6(){
class Corrente{
    private _numerosConta: number
   private _nomeCorrentista: string
    private _saldo: number = 0

    constructor(numeroC: number, nomeC: string){
        this._numerosConta = numeroC
        this._nomeCorrentista = nomeC

    }
    
    set nome(novoNome: string){
        this._nomeCorrentista = novoNome
    }
    get saldo(){
        return this._saldo
    }
    deposito(novoDepodito: number){
        this._saldo += novoDepodito
        return this._saldo
    }
    saque(novoSaque: number): number{
        if (novoSaque <= this._saldo){
            this._saldo -=novoSaque
        }else{
            alert("Saldo insuficiente")
    }
    return this._saldo
}

}

let nome = prompt("Informe seu nome: ") || ""
let numerosConta:number = Number (prompt("Informe o número da conta: "))


let corrente = new Corrente(numerosConta, nome)

corrente.deposito(10)
alert(corrente.saldo)
corrente.saque(9)
alert(corrente.saldo)

}