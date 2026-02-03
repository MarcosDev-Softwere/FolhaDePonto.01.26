// Dados extraídos da sua folha de Janeiro 2026
const funcionarios = [
    { nome: "Domingos", obs: "19 Dias" },
    { nome: "Antônio Soares", obs: "11 Dias" },
    { nome: "Betowem", obs: "13 Dias" },
    { nome: "Alberte", obs: "21 Dias" },
    { nome: "Genilson", obs: "26 Dias" },
    { nome: "Renilson", obs: "05 Dias" },
    { nome: "Rogério", obs: "07 até 12h e 17 todo" },
    { nome: "Cláudio", obs: "25 Dias" },
    { nome: "Florisvaldo", obs: "23 Dias" },
    { nome: "José Gersso", obs: "02 Dias" },
    { nome: "Alan", obs: "05 Dias" },
    { nome: "Humberto", obs: "18 Dias" },
    { nome: "Messias", obs: "24 e meio" },
    { nome: "Evandro", obs: "22 Dias" }
];

const corpoTabela = document.getElementById('corpoTabela');

// Função para renderizar a tabela
function exibirFuncionarios(lista) {
    corpoTabela.innerHTML = lista.map(f => `
        <tr>
            <td>${f.nome}</td>
            <td>${f.obs}</td>
        </tr>
    `).join('');
}

// Função de busca
function filtrarFuncionarios() {
    const termo = document.getElementById('inputBusca').value.toLowerCase();
    const filtrados = funcionarios.filter(f => 
        f.nome.toLowerCase().includes(termo)
    );
    exibirFuncionarios(filtrados);
}

// Inicializa a tabela
exibirFuncionarios(funcionarios);