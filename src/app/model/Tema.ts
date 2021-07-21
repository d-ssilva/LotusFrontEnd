import { Postagem } from "./Postagem"
import { User } from "./User"



export class Tema{
    public id: number
    public nome: string
    public descricao: string
    public palavraChave: string    
    public postagem: Postagem[]

    // Novo atributo
    public criador: User // pessoa que criou o tema
}