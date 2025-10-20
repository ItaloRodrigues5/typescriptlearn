// Classe base abstrata que define o "esqueleto" do algoritmo
class Bebida {
    // Método Template
    prepararReceita() {
        this.ferverAgua();
        this.preparar(); // passo variável
        this.servirNoCopo();
        this.adicionarCondimentos(); // passo variável
    }
    // Implementação dos Métodos Fixos
    ferverAgua() {
        console.log("Fervendo a água");
    }
    servirNoCopo() {
        console.log("Servindo no copo");
    }
}
// Subclasse concreta — Chá
class Cha extends Bebida {
    // Implementação dos métodos variáveis conforme a classe
    preparar() {
        console.log("Mergulhando o saquinho de chá");
    }
    adicionarCondimentos() {
        console.log("Adicionando limão");
    }
}
// Subclasse concreta — Café
class Cafe extends Bebida {
    // Implementação dos métodos variáveis conforme a classe
    preparar() {
        console.log("Coando o café no filtro");
    }
    adicionarCondimentos() {
        console.log("Adicionando açúcar e leite");
    }
}
// Uso
console.log("=== EXECUTANDO COMO TEMPLATE METHOD ===");
console.log("\n=== Preparando Chá ===");
const cha = new Cha();
cha.prepararReceita();
console.log("\n=== Preparando Café ===");
const cafe = new Cafe();
cafe.prepararReceita();

//# sourceMappingURL=app.js.map
