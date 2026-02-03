/**
 * Data extracted from the January 2026 payroll spreadsheet.
 * Represents employee names and their respective work days/observations.
 */
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

// Selecting the table body element to inject dynamic data
const corpoTabela = document.getElementById('corpoTabela');

/**
 * Function to render the employee list into the HTML table.
 * Uses .map() to create table rows dynamically.
 * @param {Array} lista - The array of employees to be displayed.
 */
function exibirFuncionarios(lista) {
    corpoTabela.innerHTML = lista.map(f => `
        <tr>
            <td>${f.nome}</td>
            <td>${f.obs}</td>
        </tr>
    `).join('');
}

/**
 * Search function triggered by the 'keyup' event.
 * Filters the employee array based on the input text.
 */
function filtrarFuncionarios() {
    // Get search term and convert to lowercase for case-insensitive matching
    const termo = document.getElementById('inputBusca').value.toLowerCase();
    
    // Filter the original array checking if the name includes the search term
    const filtrados = funcionarios.filter(f => 
        f.nome.toLowerCase().includes(termo)
    );
    
    // Update the table with the filtered results
    exibirFuncionarios(filtrados);
}

// Initial table rendering when the script loads
exibirFuncionarios(funcionarios);
