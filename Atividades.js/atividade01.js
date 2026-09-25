// ============================================================
// ETAPA 1 — Ficha do Item (variáveis, tipos e template strings)
// ============================================================

// Declaração das variáveis que representam um item do jogo.
// Usamos "const" por padrão, pois esses valores não serão
const nomeItem = 'Espada das Sombras';
const precoItem = 250;
const raridadeItem = 'Raro'; // "Comum", "Raro" ou "Lendário"
const quantidadeEstoque = 12;

  
// Exibição da "ficha do item" usando template strings (crases).
//console.log aparecer no console
console.log('=== FICHA DO ITEM ===');
console.log(`Nome: ${nomeItem}`);
console.log(`Preço: R$ ${precoItem}`);
console.log(`Raridade: ${raridadeItem}`);
console.log(`Estoque: ${quantidadeEstoque} unidades`);
console.log(''); // linha em branco para separar as etapas no console


// ============================================================
// ETAPA 2 — Regras de Negócio (operadores e condicionais)
// ============================================================

// Validação: o preço não pode ser negativo.
// Usamos um operador de comparação (>=) para checar a regra.
//if (se) else (senao)
if (precoItem >= 0) {
  console.log('Preço válido.');
} else {
  console.log('Erro: o preço do item não pode ser negativo!');
}

// Classificação automática do item por faixa de preço,
// usando if / else if / else.
//let a variavel pode ser mudada
let categoriaPorPreco;

if (precoItem < 100) {
  categoriaPorPreco = 'Comum';
} else if (precoItem >= 100 && precoItem < 500) { //&& é uma condição E
  categoriaPorPreco = 'Raro';
} else {
  categoriaPorPreco = 'Lendário';
}

console.log(`Categoria calculada pelo preço: ${categoriaPorPreco}`);

// Operador ternário: define se o item está "em destaque"
// (verdadeiro quando o preço é maior que 500).
// const a variavel nao pode ser mudada depois
const emDestaque = precoItem > 500 ? true : false;
console.log(`Em destaque: ${emDestaque}`);

// Operador lógico (&&): o item só está disponível para compra
// se houver estoque (maior que 0) E o preço for maior que 0.
const disponivelParaCompra = quantidadeEstoque > 0 && precoItem > 0;
console.log(`Disponível para compra: ${disponivelParaCompra}`);
console.log('');


// ============================================================
// ETAPA 3 — Cadastro em Lote (laço for)
// ============================================================

console.log('=== CADASTRO EM LOTE ===');

// Simula o cadastro de 5 itens usando um laço for com contador.
//for laço de repetição 
for (let i = 0; i < 5; i++) {
  const numeroDoItem = i + 1; // relatório numerado a partir de 1
  console.log(`Item ${numeroDoItem} cadastrado com sucesso!`);//juntar textos com valores ${

  // Operador módulo (%) é o resto da divisao: a cada índice par do laço (i),
  // exibe uma mensagem extra de promoção da semana.
  if (i % 2 === 0) {
    console.log('Item em promoção da semana!');
  }
}
console.log('');


// ============================================================
// ETAPA 4 — Controle de Estoque (laço while)
// ============================================================

console.log('=== CONTROLE DE ESTOQUE ===');

// Simula a venda de um item específico usando um laço while.
// Partimos de 12 unidades em estoque e vendemos 2 por vez,
// até o estoque chegar a 0.
//while laço de repetição enquanto
let estoqueAtual = 12;

while (estoqueAtual > 0) {
  estoqueAtual -= 2; // decrementa o estoque a cada "venda"
  console.log(`Estoque restante: ${estoqueAtual}`);
}

console.log('Item esgotado!');
console.log('');


// ============================================================
// ETAPA 5 — Catálogo de Itens (laço for...of)
// ============================================================

console.log('=== CATÁLOGO DE ITENS ===');

// Lista simples (array) com o nome de 5 itens do jogo.
//const a variavel nao pode ser mudada depois
const catalogo = [
  'Espada das Sombras',
  'Asas Douradas',
  'Capacete Neon',
  'Pet Dragão',
  'Skin Cyberpunk',
];

// Percorre o catálogo com for...of e imprime cada item
// como uma linha de vitrine da loja.
for (const item of catalogo) {
  console.log(`🛒 ${item}`);
}
