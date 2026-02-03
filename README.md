📝 Sistema de Gerenciamento de Frequência - Janeiro 2026

Este projeto consiste em um **módulo dinâmico de busca e visualização de dados de funcionários**, desenvolvido para otimizar o processo de conferência da folha de pagamento.  
O sistema foi pensado para lidar com jornadas complexas e observações específicas de dias trabalhados, oferecendo uma interface simples e eficiente.

 🚀 Tecnologias Utilizadas
- **HTML5** → Estruturação semântica da tabela e da interface de busca.  
- **CSS3** → Estilização personalizada com padrões visuais inspirados em planilhas de gestão, priorizando legibilidade e experiência do usuário (UX).  
- **JavaScript (ES6+)** → Motor de busca dinâmico, manipulação de DOM e filtragem de arrays em tempo real.  

⚙️ Funcionalidades
- 🔍 **Busca Instantânea**: Filtro de colaboradores conforme a digitação (keyup), utilizando os métodos `.filter()` e `.includes()`.  
- 📊 **Renderização Dinâmica**: Geração automática de linhas na tabela a partir de um objeto de dados (JSON-like).  
- 🛠️ **Tratamento de Exceções**: Exibição detalhada de observações de jornada, como turnos parciais e fracionados.  

🎯 Objetivo
O sistema tem como objetivo **facilitar a gestão de frequência de colaboradores**, permitindo que gestores e equipes de RH realizem consultas rápidas e precisas, reduzindo erros e aumentando a produtividade no fechamento da folha de pagamento.

---

## 📂 Estrutura do Projeto

│── **index.html**
│── **style.css**
│── **script.js**

✅ Como Usar
1. Abra o arquivo `index.html` em qualquer navegador.  
2. Digite o nome do colaborador no campo de busca.  
3. Veja os resultados filtrados em tempo real na tabela.  

📌 Observação
Este módulo pode ser facilmente integrado a sistemas maiores de **gestão de RH** ou **folha de pagamento**, funcionando como um componente independente e reutilizável.
