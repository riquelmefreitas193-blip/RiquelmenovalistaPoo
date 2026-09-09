// 14. Arrays Repetição Encapsulamento
// Uma biblioteca precisa catalogar seus livros. Crie uma classe Livro com título, autor, ano de
// publicação e disponibilidade (boolean). O programa deve permitir cadastrar até 15 livros via teclado,
// listar todos os disponíveis e registrar o empréstimo de um livro pesquisado pelo título.

class Livro {
    titulo: string
    autor: string
    anoPublicacao: number
    disponibilidade: boolean

    constructo(ti: string, aut: string, ano: number, dispo: boolean) {

        this.titulo = ti
        this.autor = aut
        this.anoPublicacao = ano 
        this.disponibilidade = dispo
    }
}
let livros:  Livro[] = []

