import {
  adicionarProduto,
  listarProdutos,
  calcularTotal,
  filtrarPorCategoria,
  Categoria //Adição do import do Enum de Categoria para ser usado aqui no app.ts
} from './produtos.js';

//Alteração da categoria para ao invés de repassar uma string, repassar o valor exato do Enum
adicionarProduto({ nome: 'Notebook', preco: 3000, quantidade: 2, categoria: Categoria.Eletronicos });
adicionarProduto({ nome: 'Camiseta', preco: 50, quantidade: 5, categoria: Categoria.Vestuario });
adicionarProduto({ nome: 'Fone de Ouvido', preco: 200, quantidade: 3, categoria: Categoria.Eletronicos });

console.log('Todos os produtos:');
console.log(listarProdutos());

console.log('\nTotal em estoque:');
console.log(calcularTotal());

console.log('\nFiltrar por Eletrônicos:');
console.log(filtrarPorCategoria(Categoria.Eletronicos));
// Filtragem pelo tipo da Categoria que está armazenado no Enum para evitar erros
