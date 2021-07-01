import { Postagem } from "./Postagem"

export class UserLogin{
    public id: number
    public nome: string
    public email: string
    public senha: string
    public telefone: number
    public usuario: string
    public foto: string
    public genero: string
    public pessoa_fisica: boolean
    public cpf: number
    public cnpj: number
    public score:number
    public tipo: string
    public token: string  /*TOKEN APENAS PARA MOMENTO DO LOGIN*/
    public postagem: Postagem[]
}   