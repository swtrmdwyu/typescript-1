import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { MensagemView } from "../views/MensagemView.js";
import { NegociacoesView } from "../views/NegociacoesView.js";
import { DiasSemana } from "../enums/DiasSemana.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView')
    

    constructor() {
        this.inputData = document.querySelector('#data') as HTMLInputElement;
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes);
    }

    public adiciona() {
        const negociacao: Negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );

        if(!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update('Data inválida! Insira um dia útil.');
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.atualizaView();
        this.limparFormulario();
    }


    // private criaNegociacao(): Negociacao {
    //     const exp = /-/g;
    //     const data = new Date(this.inputData.value.replace(exp, ','));
    //     const quantidade = parseInt(this.inputQuantidade.value);
    //     const valor = parseInt(this.inputValor.value);

    //     return new Negociacao(data, quantidade, valor);
    // }

    private limparFormulario(): void {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";

        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Registro adicionado');
    }

    private ehDiaUtil(data: Date): boolean {
        return data.getDay() > DiasSemana.DOMINGO && data.getDay() < DiasSemana.SABADO
    }

    
}