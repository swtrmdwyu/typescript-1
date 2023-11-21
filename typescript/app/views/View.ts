export abstract class View<T> {
    protected elemento: HTMLElement;

    constructor(seletor: string){

        const elemento = document.querySelector(seletor);
        if(elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw new Error('seletor não encontrado.')
        }
    }

    public update(model: T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
}