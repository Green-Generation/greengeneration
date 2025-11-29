// Labels do gráfico
const labels = [
    "Reciclar/Doar Eletrônicos",
    "Pilhas Recarregáveis",
    "Economizar Energia",
    "Peças de Segunda Mão",
    "Fazer Upgrades",
    "Conscientizar Pessoas"
];

// Valores reais estimados (%)
const valores = [30, 10, 15, 12, 18, 15];

// Cores do gráfico
const cores = [
    "#E69A00",
    "#56B4E9",
    "#009E73",
    "#F0E442",
    "#0072B2",
    "#D55E00"
];

// Criação do gráfico
const ctx = document.getElementById('meuGrafico').getContext('2d');

const meuGrafico = new Chart(ctx, {
    type: 'pie', // Você pode trocar por "bar"
    data: {
        labels: labels,
        datasets: [{
            label: "Práticas Sustentáveis (%)",
            data: valores,
            backgroundColor: cores,
            borderColor: "#ffffff",
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
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
