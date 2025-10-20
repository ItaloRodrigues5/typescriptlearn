// 2️⃣ Estratégias concretas — cada uma com sua própria forma de preparo
class PreparoCha {
    preparar() {
        console.log("Mergulhando o saquinho de chá");
    }
    adicionarCondimentos() {
        console.log("Adicionando limão");
    }
}
class PreparoCafe {
    preparar() {
        console.log("Coando o café no filtro");
    }
    adicionarCondimentos() {
        console.log("Adicionando açúcar e leite");
    }
}
// 3️⃣ Contexto — usa a Strategy para definir o comportamento
class Bebida {
    constructor(estrategia) {
        this.estrategia = estrategia;
    }
    // Permite trocar a estratégia dinamicamente
    definirEstrategia(estrategia) {
        this.estrategia = estrategia;
    }
    // Método principal
    prepararReceita() {
        console.log("Fervendo a água");
        this.estrategia.preparar();
        console.log("Servindo no copo");
        this.estrategia.adicionarCondimentos();
    }
}
// 4️⃣ Uso do código
console.log("=== EXECUTANDO COMO STRATEGY ===");
const bebida = new Bebida(new PreparoCha());
console.log("\n=== Preparando Chá ===");
bebida.prepararReceita();
console.log("\n=== Trocando para Café ===");
bebida.definirEstrategia(new PreparoCafe());
bebida.prepararReceita();

//# sourceMappingURL=strategy.js.map
