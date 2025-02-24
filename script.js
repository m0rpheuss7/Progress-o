function iniciarProgresso() {
    clearInterval(window.interval);

    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);

    if (isNaN(valor1) || isNaN(valor2) || valor2 <= valor1) {
        alert('Por favor, insira valores válidos onde Valor 2 seja maior que Valor 1.');
        return;
    }

    const progressBar = document.getElementById('progress-bar');
    const progressContainer = document.getElementById('progress-container');

    const total = valor2 - valor1;
    let atual = valor1;

    progressBar.style.width = '0%';
    progressBar.textContent = '0%';

    const tempoTotal = 3000; // 3 segundos
    const passos = 100; // Número de etapas para a animação
    const incremento = total / passos;
    const intervaloTempo = tempoTotal / passos;

    let larguraAtual = 0;
    const larguraMaxima = progressContainer.clientWidth;

    window.interval = setInterval(() => {
        atual += incremento;
        larguraAtual += larguraMaxima / passos;

        if (atual >= valor2) {
            atual = valor2;
            larguraAtual = larguraMaxima;
            clearInterval(window.interval);
        }

        const percent = ((larguraAtual / larguraMaxima) * 100).toFixed(2);
        progressBar.style.width = percent + '%';
        progressBar.textContent = Math.floor(percent) + '%';

    }, intervaloTempo);
}
