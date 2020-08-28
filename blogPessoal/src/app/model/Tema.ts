//CRIANDO UMA MODEL TEMA NO FRONT END

import { Postagem } from './Postagem'

export class Tema {
    public id: number
    public descricao: string
    public postagem: Postagem[]
}