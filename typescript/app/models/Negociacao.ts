export class Negociacao {
    constructor(private _data: Date, public readonly quantidade: number, public readonly valor: number) {}

    get volume() {
        return this.quantidade * this.valor;
    }

    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }

    // get quantidade() {
    //     return this._quantidade;
    // }

    // get valor() {
    //     return this._valor;
    // }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const data = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseInt(valorString);

        return new Negociacao(data, quantidade, valor);
    }
}