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
    // public score:number
    public tipo: string // Tipo de conta se é usuário ou empresa
    public postagem: Postagem[]

    // novos atributos
    public dataNasc: Date // data de nascimento do cadastro
    public qtdReclamacao: number // número de ocorrências para contas tipo: Empresa
}   