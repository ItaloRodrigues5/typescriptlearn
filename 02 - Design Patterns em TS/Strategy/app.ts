// 1️⃣ Interface Strategy — define o contrato para o preparo
interface EstrategiaPreparo {
  preparar(): void;
  adicionarCondimentos(): void;
}

// 2️⃣ Estratégias concretas — cada uma com sua própria forma de preparo
class PreparoCha implements EstrategiaPreparo {
  preparar(): void {
    console.log("Mergulhando o saquinho de chá");
  }

  adicionarCondimentos(): void {
    console.log("Adicionando limão");
  }
}

class PreparoCafe implements EstrategiaPreparo {
  preparar(): void {
    console.log("Coando o café no filtro");
  }

  adicionarCondimentos(): void {
    console.log("Adicionando açúcar e leite");
  }
}

// 3️⃣ Contexto — usa a Strategy para definir o comportamento
class Bebida {
  private estrategia: EstrategiaPreparo;

  constructor(estrategia: EstrategiaPreparo) {
    this.estrategia = estrategia;
  }

  // Permite trocar a estratégia dinamicamente
  public definirEstrategia(estrategia: EstrategiaPreparo): void {
    this.estrategia = estrategia;
  }

  // Método principal
  public prepararReceita(): void {
    console.log("Fervendo a água");
    this.estrategia.preparar();
    console.log("Servindo no copo");
    this.estrategia.adicionarCondimentos();
  }
}

// 4️⃣ Uso do código
console.log("=== EXECUTANDO COMO STRATEGY ===");

const bebida = new Bebida(new PreparoCha());
console.log("=== Preparando Chá ===");
bebida.prepararReceita();

console.log("\n=== Trocando para Café ===");
bebida.definirEstrategia(new PreparoCafe());
bebida.prepararReceita();
