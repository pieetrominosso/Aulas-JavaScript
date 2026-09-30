let totalGlobal = 0;

// Efeito colateral: altera estado externo
const adicionar = (valor) => {
  totalGlobal += valor;
};