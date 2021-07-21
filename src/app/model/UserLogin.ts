import { Postagem } from "./Postagem"
import { User } from "./User"

export class UserLogin{
    public id: number
    public nome: string
    public email: string
    public senha: string
    public telefone: string
    public usuario: string
    public foto: string
    public genero: string
    public cpf: string
    public cnpj: string
    public score: number
    public tipo: string
    public token: string  /*TOKEN APENAS PARA MOMENTO DO LOGIN*/
    public postagem: Postagem[]
    public qtdReclamacao: number
    public qtdElogio: number
}   