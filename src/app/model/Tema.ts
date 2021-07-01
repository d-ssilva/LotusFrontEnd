import { Postagem } from "./Postagem"

export class Tema{
    public id: number
    public nome: string
    public descricao: string
    public palavraChave: string
    public postagem: Postagem[]
}