import { Negociacao } from "./Negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = []

    constructor() {}

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao)
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}