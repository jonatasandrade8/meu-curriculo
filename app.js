function switchLanguage(lang) {
    // Esconde/Mostra as seções de conteúdo
    document.getElementById('pt').style.display = (lang === 'pt') ? 'block' : 'none';
    document.getElementById('en').style.display = (lang === 'en') ? 'block' : 'none';

    // Esconde/Mostra os botões de download correspondentes
    document.getElementById('download-pt').style.display = (lang === 'pt') ? 'inline-block' : 'none';
    document.getElementById('download-en').style.display = (lang === 'en') ? 'inline-block' : 'none';
}

function downloadCV(lang) {
    // 1. Alterna para o idioma desejado (caso não esteja visível)
    switchLanguage(lang); 

    // 2. Oculta todos os botões de troca de idioma/download antes de imprimir (para o @media print)
    const switchButtons = document.querySelector('.language-switch');
    switchButtons.style.display = 'none';

    // 3. Abre a caixa de diálogo de impressão do navegador
    // O usuário poderá escolher "Salvar como PDF" nas opções de destino.
    window.print();

    // 4. Reexibe os botões após um pequeno atraso (depois que a caixa de impressão é aberta)
    // O setTimeout é crucial para garantir que a função print seja executada primeiro.
    setTimeout(() => {
        switchButtons.style.display = 'flex'; // Reexibe o bloco de botões
    }, 500); 
}

// Inicializa a visibilidade correta ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    switchLanguage('pt');
});
