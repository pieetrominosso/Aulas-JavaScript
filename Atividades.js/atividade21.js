const missoes = [["Derrotar Chefe", 500],
    ["Encontrar Tesouro", 200],
    ["Salvar Personagem", 800],
    ["Explorar Mapa",100],
]

for (const missao of missoes) {
    if (missao[1] >= 500) {
        missao[2] = "missao dificil";
    } else if (missao[1] >= 200) {
        missao[2] = "missao Media";
    } else {
        missao [2] = "missao facil";
    }
}

console.log(missoes);
    