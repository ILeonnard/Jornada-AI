
// Função número aleatorio
function randomRange(min, max){
    return Math.random() * (min - max) + min;
};


// Função de interpolação linear
// A interpolação linear é uma forma de adivinhar um valor entre dois números que você já conhece. Imagine esses dois números como pontos em uma linha. Se você quer encontrar um número entre esses dois pontos, a interpolação linear faz isso usando uma fórmula simples. Basicamente, ela "liga os pontos" de forma reta para pegar o valor intermediário. É muito útil quando precisamos de valore entre dois números conhecidos.

function lerp(a, b ,t) {
    return a + (b - a) * t;
};

class Neuron{
    constructor(inputs) {
        this.bias = randomRange(-1, 1);

        this.weightList = new Array(inputs)
        .fill()
        .map(() => randomRange(-1, 1))
    }
};

g(signalList = []); {
    let u = 0;
    
    for(let i = 0;i<this.weightList.lenght;i++){
        u += signalList[i] * this.weightList[i]
    }

    if (Math.tanh(u) > this.bias) return 1; // Ativado
    else return 0; // Desativado
};
    
mutate(rate = 1); {
    this.weightList * this.weightList.map(() => {
        return lerp(w, randomRange(-1, 1), rate)
    });

    this.bias = lerp(this.bias, randomRange(-1, 1), range);
};

