// Array com os vídeos
const videoLinks = [{
        url: https://youtu.be/zexNDie8Sp4?si=yGNHN9i_YIAmqq0m,
        title: "Etapa 1: O Que É Hardware? Entenda os Componentes do Seu PC",
        description: "Introdução aos conceitos básicos de hardware. Diferença entre hardware e software, exemplos de dispositivos (CPU, RAM, HD/SSD, placa-mãe, etc)."
    },
    {
        url: https://youtu.be/aOoiMeUWA_8?si=FUxAzA1sA3RYu7fj,
        title: "Etapa 2: Conheça as Peças: Componentes Essenciais de um Computador",
        description: "Explicação mais detalhada sobre os principais componentes internos de um PC. Função de cada peça e como elas se conectam (placa-mãe, processador, memória, armazenamento, placa de vídeo, fonte, gabinete)."
    },
    {
        url: https://youtu.be/dzFfnvtnFTc?si=5SxuC4KhJ6nVjA_Z,
        title: "Etapa 3: Descarte Correto e Incorreto de Componentes Eletrônicos",
        description: "Impactos ambientais do lixo eletrônico. Como descartar corretamente peças velhas ou quebradas. Locais de coleta e reciclagem. Por que não jogar no lixo comum."
    },
    {
        url: https://youtu.be/UURtjMluM6w?si=Bq3VvpuHV50HNcgm,
        title: "Etapa 4: Montando um PC Passo a Passo: O Que Você Precisa Saber",
        description: "Guia prático e introdutório de montagem de PC. Ordem das peças, dicas de cuidado (descarga eletrostática), uso de ferramentas básicas."
    },
    {
        url: https://youtu.be/m8lBkrIkIuI?si=m1TetU6QjNsgDc_4,
        title: "Etapa 5: Erros Comuns ao Montar um PC (e Como Evitar!)",
        description: "Lista dos principais erros de iniciantes: incompatibilidades de peças, fonte fraca, falta de pasta térmica, montagem sem aterramento, etc."
    },
    {
        url: https://youtu.be/RTOogns6ljY?si=ZWP5D7Q9ZoHQBw3z,
        title: "Etapa 6: Manutenção, Upgrades e Dicas de Conservação do Seu PC",
        description: "Como cuidar do computador ao longo do tempo. Limpeza física, verificação de temperatura, troca de pasta térmica, quando e como fazer upgrades."
    }
];

// Função para extrair o ID do vídeo do YouTube
function getYouTubeID(url) {
    if (url.includes("youtu.be")) {
        return url.split("youtu.be/")[1].split(/[?&]/)[0];
    } else if (url.includes("youtube.com")) {
        const urlObj = new URL(url);
        return urlObj.searchParams.get("v");
    }
    return null;
}

// Função que cria o HTML do vídeo
function embedVideo(video) {
    const videoId = getYouTubeID(video.url);
    if (!videoId) return "";

    return `
    <div class="video-wrapper" tabindex="0" aria-label="Vídeo: ${video.title}">
      <iframe
        src="https://www.youtube.com/embed/${videoId}"
        title="${video.title}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loading="lazy"
      ></iframe>
      <h3>${video.title}</h3>
      <p>${video.description}</p>
    </div>
  `;
}

// Quando a página carregar
window.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("videoContainer");

    // Verificar se o container existe
    if (container) {
        videoLinks.forEach(video => {
            const videoHTML = embedVideo(video);
            if (videoHTML) container.insertAdjacentHTML('beforeend', videoHTML);
        });

        // Animação fade-in dos vídeos ao entrar no viewport
        const videos = document.querySelectorAll(".video-wrapper");

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, { threshold: 0.1 });

        videos.forEach(video => observer.observe(video));
    } else {
        console.error("O container de vídeos não foi encontrado!");
    }
});

const darkModeBtn = document.getElementById('darkModeBtn');
const icon = darkModeBtn.querySelector('i');

// Função pra carregar o tema salvo no localStorage
function carregarTema() {
    const modoEscuroAtivo = localStorage.getItem('darkMode') === 'true';
    document.body.classList.toggle('dark-mode', modoEscuroAtivo);
    atualizarIcone(modoEscuroAtivo);
}

// Função pra atualizar o ícone do botão
function atualizarIcone(escuro) {
    if (escuro) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Alterna o tema ao clicar no botão
darkModeBtn.addEventListener('click', () => {
    const modoEscuroAtivo = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', modoEscuroAtivo);
    atualizarIcone(modoEscuroAtivo);
});

// Carrega o tema assim que a página abre
window.addEventListener('DOMContentLoaded', carregarTema);

