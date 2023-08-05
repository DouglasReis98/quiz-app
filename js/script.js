import questoes, {  } from "./questoes.js";

const main = document.querySelector("main");
const inicio = document.querySelector(".inicio");
const btnIniciar = document.getElementById("iniciar");
const questao = document.getElementById("questao");
const numQuestao = document.getElementById("num-questao");
// const alternativas = document.querySelector(".alternativas");
const anterior = document.getElementById("anterior");
const seguinte = document.getElementById("seguinte");

let questAtual = 0;
let respCorretas = 0;

btnIniciar.addEventListener("click", () => {

    inicio.style.setProperty("display", "none", "important");
    carregarQuestao();
})


function carregarQuestao() {
    const divQuestoes = document.querySelector(".questoes");
    divQuestoes.style.display = "block";
    const item = questoes[questAtual];
    divQuestoes.innerHTML = `<h3 class="text-center num-questao">Questão ${questAtual + 1} de 10</h3>
                             <h4 class="questao">${item.questao}</h4>`;
    const divAlternativas = document.createElement("div");
    divAlternativas.className = "alternativas list-group";
    divAlternativas.innerHTML = ``;
    item.alternativas.forEach((alternativa) => {
        const btn = document.createElement("button");
        btn.className = "btn border btn-light";
        
        btn.innerHTML = `${alternativa.opcao}`;
        btn.setAttribute("data-certo", alternativa.correto);

        divAlternativas.appendChild(btn);
    })
    divQuestoes.appendChild(divAlternativas);
    document.querySelectorAll(".alternativas button").forEach((item) => {
    item.addEventListener("click", proxQuestao);
})
}



function proxQuestao(e) {
    if(e.target.getAttribute("data-correto") == "true"){
        respCorretas++;
    }

    if(questAtual < questoes.length - 1){
        questAtual++;
        carregarQuestao();
    }else{
        resultado();
    } 
}

function resultado(){
    textoFinal.innerHTML= `Você acertou ${respCorretas} de ${questoes.length}!`
    content.style.display = 'none';
    contentFinish.style = "flex";
}