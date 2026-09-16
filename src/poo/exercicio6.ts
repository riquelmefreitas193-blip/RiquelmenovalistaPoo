// 6. Classe Conta Corrente: Crie uma classe para implementar uma conta corrente. A classe deve possuir
// os seguintes atributos: número da conta, nome do correntista e saldo. Os métodos são os seguintes:
// alterarNome, depósito e saque. No construtor, saldo é opcional, com valor default zero e os demais
// atributos são obrigatórios. Por fim, faça com que esse sistema interaja com o usuário permitido que
// ele, depois de cadastrar as suas informações, possa usar os métodos disponíveis.

class Corrente{
    numerosConta: number
    nomeCorrentista: string
    saldo: number

    constructor(numeroC: number, nomeC: string, sa: number){
        this.numerosConta = numeroC
        this.nomeCorrentista = nomeC
        this.saldo = sa
    }
    
    nome(novoNome: string){
        this.nomeCorrentista = novoNome
    }
    deposito(novoDepodito: number){
        this.saldo += novoDepodito
        return this.saldo
    }
    saque(novoSaque: number): number{
        if (novoSaque <= this.saldo){
            this.saldo -=novoSaque
        }else{
            console.log("Saldo insuficiente")
    }
    return this.saldo
}

}
            
    




