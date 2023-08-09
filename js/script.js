import questoes, {  } from "./questoes.js";

const main = document.querySelector("main");
const inicio = document.querySelector(".inicio");
const btnIniciar = document.getElementById("iniciar");
const questao = document.getElementById("questao");
const numQuestao = document.getElementById("num-questao");
// const alternativas = document.querySelector(".alternativas");
const anterior = document.getElementById("anterior");
const seguinte = document.getElementById("seguinte");
const divQuestoes = document.querySelector(".questoes");
const divFinal = document.querySelector(".final");
const btnReiniciar = document.getElementById("reiniciar")

let questAtual = 0;
let respCorretas = 0;

btnIniciar.addEventListener("click", () => {

    inicio.style.setProperty("display", "none", "important");
    carregarQuestao();
})


function carregarQuestao() {
    divQuestoes.style.display = "flex";
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

    item.addEventListener("click", () => {
              
        if (item.getAttribute("data-certo") == "true") {
            item.classList.remove("btn-light");
            item.classList.add("btn-success");
            respCorretas++;
        }  else {
            item.classList.remove("btn-light");
            item.classList.add("btn-danger");
        }
        
            const otherBtns = document.querySelectorAll(".btn-light");
            for(let btn of otherBtns){
                btn.disabled = true;
            }
        
            setTimeout(proxQuestao, 1000)

    });
})
}



function proxQuestao() {
    if(questAtual < questoes.length - 1){
        questAtual++;
        carregarQuestao();
    }else{
        resultado();
    } 
}

let textoFinal;

function resultado(){
    textoFinal = document.createElement("h4"); 
    textoFinal.className = "text-center";
    textoFinal.innerHTML= `Você acertou ${respCorretas} de ${questoes.length}!`
    divFinal.insertBefore(textoFinal, btnReiniciar);
    divQuestoes.style.display = 'none';
    divFinal.style.display = "flex";
}

btnReiniciar.addEventListener("click", () => {
    textoFinal.remove();
    divQuestoes.style.display = 'block';
    divFinal.style.display = "none";
    questAtual = 0;
    respCorretas = 0;    
    carregarQuestao();
})