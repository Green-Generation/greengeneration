window.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('grafico1').getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['China', 'EUA', 'Índia', 'Japão', 'Brasil'],
            datasets: [{
                label: 'tonelada (t)',
                data: [12000, 7000, 4000, 2500, 2500],
                backgroundColor: '#39ff14'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { color: 'white' },
                    grid: { color: '#005c3b' }
                },
                x: {
                    ticks: { color: 'white' },
                    grid: { color: '#005c3b' }
                }
            },
            plugins: {
                legend: { labels: { color: 'white' } }
            }
        }
    });
});

function corrigir() {
    let acertos = 0;

    if (document.querySelector('input[name="q1"]:checked')?.value === "certo") acertos++;
    if (document.querySelector('input[name="q2"]:checked')?.value === "certo") acertos++;
    if (document.querySelector('input[name="q3"]:checked')?.value === "certo") acertos++;
    if (document.querySelector('input[name="q4"]:checked')?.value === "certo") acertos++;
    if (document.querySelector('input[name="q5"]:checked')?.value === "certo") acertos++;

    document.getElementById("resultado").innerText = "Você acertou " + acertos + " de 5 perguntas.";
}
