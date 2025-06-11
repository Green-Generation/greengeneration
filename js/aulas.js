const videoLinks = [
  {
    url: "https://www.youtube.com/watch?v=ZSIrMa7JYc8&t=215s",
    title: "Etapa 1: O Que É Hardware? Entenda os Componentes do Seu PC",
    description: "Introdução aos conceitos básicos de hardware. Diferença entre hardware e software, exemplos de dispositivos (CPU, RAM, HD/SSD, placa-mãe, etc)."
  },
  {
    url: "https://www.youtube.com/watch?v=HNRb1vdE0bA&pp=ygU7Q29uaGXDp2EgYXMgUGXDp2FzOiBDb21wb25lbnRlcyBFc3NlbmNpYWlzIGRlIHVtIENvbXB1dGFkb3I%3D",
    title: "Etapa 2: Conheça as Peças: Componentes Essenciais de um Computador",
    description: "Explicação mais detalhada sobre os principais componentes internos de um PC. Função de cada peça e como elas se conectam (placa-mãe, processador, memória, armazenamento, placa de vídeo, fonte, gabinete)."
  },
  {
    url: "VIDEO",
    title: "Etapa3: Descarte Correto e Incorreto de Componentes Eletrônicos",
    description: "Impactos ambientais do lixo eletrônico. Como descartar corretamente peças velhas ou quebradas. Locais de coleta e reciclagem. Por que não jogar no lixo comum."
  },
  {
    url: "VIDEO",   
    title: "Etapa 4: Montando um PC Passo a Passo: O Que Você Precisa Saber",
    description: "Guia prático e introdutório de montagem de PC. Ordem das peças, dicas de cuidado (descarga eletrostática), uso de ferramentas básicas"
  },
  {
    url: "VCIDEO",
    title: "Etapa 5: Erros Comuns ao Montar um PC (e Como Evitar!)",
    description: "Lista dos principais erros de iniciantes: incompatibilidades de peças, fonte fraca, falta de pasta térmica, montagem sem aterramento, etc."
  },
  {
    url: "VIDEO",
    title: "Etapa 6: Manutenção, Upgrades e Dicas de Conservação do Seu PC",
    description: "Como cuidar do computador ao longo do tempo. Limpeza física, verificação de temperatura, troca de pasta térmica, quando e como fazer upgrades."
  }
];

function embedVideo(video) {
  const link = video.url;
  if (!link) return "";

  let embed = "";

  if (link.includes("youtube.com") || link.includes("youtu.be")) {
    const videoId = link.includes("youtu.be")
      ? link.split("/").pop().split('?')[0]
      : new URL(link).searchParams.get("v");

    embed = `<iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen loading="lazy" title="${video.title}"></iframe>`;
  } else if (link.includes("vimeo.com")) {
    const videoId = link.split("/").pop();
    embed = `<iframe src="https://player.vimeo.com/video/${videoId}" allowfullscreen loading="lazy" title="${video.title}"></iframe>`;
  }

  return `
    <div class="video-wrapper" tabindex="0" aria-label="Vídeo: ${video.title}">
      ${embed}
      <h3>${video.title}</h3>
      <p>${video.description}</p>
    </div>
  `;
}

window.onload = () => {
  const container = document.getElementById("videoContainer");
  videoLinks.forEach(video => {
    const videoHTML = embedVideo(video);
    if (videoHTML) container.innerHTML += videoHTML;
  });
};
