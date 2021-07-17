import { Tema } from "./Tema"
import { User } from "./User"

export class Postagem{
    public id: number
    public mensagem: string
    public titulo: string
    public data: Date
    public midia: string
    public usuario: User
    public tema: Tema

    // atributos modificados
    public empresa: User // antes era um atributo do tipo string

    // novos atributos
    public like: number
    public dislike: number

    public tipoPostagem: string
    public elogio: Postagem // estará relacionado com tipoPostagem
    public reclamacao: Postagem // estará relacionado com tipoPostagem

}