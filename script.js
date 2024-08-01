const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const caixaResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:""
        alternativas: [

        
        ]
    }
    {
        enunciado:""
        alternativas: [
        ]  
        
    }
    enunciado:""
    alternativas:""
]
}
];
let atual = 0;
let perguntaAtual;

function mostraPerguntas(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent= "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
const botaoAlternativas = document.creatElement("button");
botaoAlternativas.textContent = alternativa;
caixaAlternativas.appendChild(botaoAlternativas);
    }
       
        
    }
    mostraPergunta();
