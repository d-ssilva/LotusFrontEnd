import { Postagem } from "./Postagem"

export class User{
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
    public empresaAtual: string 
    public cargo: string 
    public tipo: string 
    public postagem: Postagem[]
    public dataNasc: Date 
    public qtdReclamacao: number
    public qtdElogio: number
}   