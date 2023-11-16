import { NegociacaoController } from "./controllers/NegociacaoContoller.js";

const negociacaoController = new NegociacaoController();

const form = document.querySelector('.form');

form.addEventListener('submit', evento => {
    evento.preventDefault();

    negociacaoController.adiciona();
});