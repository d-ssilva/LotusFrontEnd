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
    public empresa: string
    public tipoPostagem: string
    public anonima: boolean
}