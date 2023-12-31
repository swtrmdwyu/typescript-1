import { View } from "./View.js";
export class NegociacoesView extends View {
    template(model) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                    <tbody>
                        ${model.lista().map(negociacao => {
            return `<tr>
                                        <td>${this.formataData(negociacao.data)}</td>
                                        <td>${negociacao.quantidade}</td>
                                        <td>${negociacao.valor}</td>
                                    </tr>`;
        }).join('')}
                    </tbody>
                </thead>
            </table>
        `;
    }
    formataData(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
