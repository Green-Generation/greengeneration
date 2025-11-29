
const ctx = document.getElementById('tipsChart').getContext('2d');

new Chart(ctx, {
    type: 'pie',
    data: {
        labels: [
            "1. Limpeza externa e interna",
            "2. Uso correto da energia",
            "3. Programas leves e sistema limpo",
            "4. Evitar superaquecimento",
            "5. Usar filtro de linha (não estabilizador)",
            "6. Backups e armazenamento leve",
            "Reaproveitamento e sustentabilidade"
        ],
        datasets: [{
            data: [15, 15, 15, 15, 10, 15, 15],
            borderWidth: 1
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
