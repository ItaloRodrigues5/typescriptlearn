// Classe base abstrata que define o "esqueleto" do algoritmo
abstract class Bebida {
  // Método Template
  public prepararReceita(): void {
    this.ferverAgua();
    this.preparar();          // passo variável
    this.servirNoCopo();
    this.adicionarCondimentos(); // passo variável
  }
  // Implementação dos Métodos Fixos
  private ferverAgua(): void {
    console.log("Fervendo a água");
  }

  private servirNoCopo(): void {
    console.log("Servindo no copo");
  }

  // Métodos abstratos — as subclasses devem implementar
  protected abstract preparar(): void;
  protected abstract adicionarCondimentos(): void;
}

// Subclasse concreta — Chá
class Cha extends Bebida {
    // Implementação dos métodos variáveis conforme a classe
  protected preparar(): void {
    console.log("Mergulhando o saquinho de chá");
  }

  protected adicionarCondimentos(): void {
    console.log("Adicionando limão");
  }
}

// Subclasse concreta — Café
class Cafe extends Bebida {
    // Implementação dos métodos variáveis conforme a classe
  protected preparar(): void {
    console.log("Coando o café no filtro");
  }

  protected adicionarCondimentos(): void {
    console.log("Adicionando açúcar e leite");
  }
}

// Uso
console.log("=== EXECUTANDO COMO TEMPLATE METHOD ===");

console.log("=== Preparando Chá ===");
const cha = new Cha();
cha.prepararReceita();

console.log("\n=== Preparando Café ===");
const cafe = new Cafe();
cafe.prepararReceita();
