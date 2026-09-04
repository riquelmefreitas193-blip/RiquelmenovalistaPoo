// 1. Classe Bola: Crie uma classe que modele uma bola:
//  Atributos: Cor, circunferência, material
    //  Métodos: trocaCor e mostraCor
export function exercicio1():void{
    class Bola{
        cor:string
        circuferencia:number
        material:string

        constructor(cor:string, circu:number, mate:string){

            this.cor = cor
            this.circuferencia = circu
            this.material = mate
        }
        trocarCor(novaCor:string){
            this.cor = novaCor
        }
        mostrarCor(){
            console.log("A cor da bola agora é: "+ this.cor)
        }
    }
    let bola = new Bola("vermelho", 50, "couro")
    bola.mostrarCor()
    bola.trocarCor("Preto")
    bola.mostrarCor()
}