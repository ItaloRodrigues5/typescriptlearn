enum Categoria{
  Alimento = 'Alimento',
  Bebidas = 'Bebidas',
  Vestuario = 'Vestuário',
  Eletronicos = 'Eletrônicos'
}

interface Produto{ //Criação da inteface produto com os principais atributos tipados.
  nome: string,
  preco: number,
  quantidade: number,
  categoria: Categoria // Recebe os atributos do tipo do Enum Categoria.
}

const produtos: Produto[] = []; // Alteração para tipagem do array

function adicionarProduto(produto: Produto) { //Tipagem do parâmetro adicionada
  produtos.push(produto)
}

function listarProdutos() {
  return produtos
}

function calcularTotal() {
  return produtos.reduce((acc, p) => acc + p.preco * p.quantidade, 0)
}
//Tipagem do parâmetro conforme string e comparar o valor do Enum armazenado já em Categoria
function filtrarPorCategoria(categoria: Categoria) {
  return produtos.filter(p => p.categoria === categoria)
}

export {
  produtos,
  adicionarProduto,
  listarProdutos,
  calcularTotal,
  filtrarPorCategoria,
  Categoria //Adicionado o export do Enum de Categoria para ser usado no app.ts
}
