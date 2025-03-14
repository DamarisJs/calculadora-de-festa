// Bolo - 100gr por pessoa 
// Docinhos - 8 uni por pessoa 
// Salgados - 12 uni por pessoa 
// Bebidas - 1000 ml por pessoa 

// crianças valem por 0,5

document.addEventListener('DOMContentLoaded', function() {
    // Selecionando os elementos dos inputs
    const numCriancasInput = document.getElementById('numeroConvidadosCriancas');
    const numAdultosInput = document.getElementById('numeroConvidadosAdultos');
    const qtdSalgadosInput = document.getElementById('qtdSalgados');
    const qtdDocesInput = document.getElementById('qtdDoces');
    const qtdBoloInput = document.getElementById('qtdBolo');
    const qtdBebidaInput = document.getElementById('qtdBebida');

    // Função para calcular as quantidades
    function calcularQuantidades() {
        // Obtenha os valores dos inputs
        const numCriancas = parseFloat(numCriancasInput.value) || 0;
        const numAdultos = parseFloat(numAdultosInput.value) || 0;

        // As crianças valem como 0,5 (metade de um adulto)
        const numPessoas = numAdultos + (numCriancas * 0.5);

        // Cálculos
        const qtdSalgados = numPessoas * 12; // 12 salgados por pessoa
        const qtdDoces = numPessoas * 8; // 8 doces por pessoa
        const qtdBolo = numPessoas * 100; // 100g de bolo por pessoa
        const qtdBebida = numPessoas * 1000; // 1000 ml de bebida por pessoa

        // Atualizar os campos com as quantidades calculadas
        qtdSalgadosInput.value = Math.round(qtdSalgados);
        qtdDocesInput.value = Math.round(qtdDoces);
        qtdBoloInput.value = Math.round(qtdBolo);
        qtdBebidaInput.value = Math.round(qtdBebida);
    }

    // Adicionando um evento para recalcular as quantidades sempre que o número de convidados mudar
    numCriancasInput.addEventListener('input', calcularQuantidades);
    numAdultosInput.addEventListener('input', calcularQuantidades);
});
