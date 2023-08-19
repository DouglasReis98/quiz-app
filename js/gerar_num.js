import questoes from "./questoes.js";

const gerar_num = () => {
    
    const numMax =  questoes.length;
    const lista = [];

    for (let i = 0; i < numMax; ) {
        lista[i] = i;
        i++;
    }

    let numAleatorio;
    let tmp;

    for (let i = lista.length; i;) {
        numAleatorio = Math.random() * i-- | 0;
        tmp = lista[numAleatorio];
        // troca o número aleatório pelo atual
        lista[numAleatorio] = lista[i]
        // troca o atual pelo aleatório
        lista[i] = tmp;      
    }

    return lista;
};
export default gerar_num;

