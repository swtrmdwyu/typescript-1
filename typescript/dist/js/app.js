import { NegociacaoController } from "./controllers/NegociacaoContoller.js";
const negociacaoController = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', evento => {
        evento.preventDefault();
        negociacaoController.adiciona();
    });
}
else {
    throw new Error('Form invalido');
}
