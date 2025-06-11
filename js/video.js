const videoLinks = [
  {
    url: "https://www.youtube.com/watch?v=ZSIrMa7JYc8&t=215s",
    title: "Curso de Sustentabilidade na Prática",
    description: "Aprenda práticas sustentáveis para aplicar no dia a dia."
  },
  {
    url: "https://youtu.be/dQw4w9WgXcQ",
    title: "Introdução à Energia Renovável",
    description: "Conheça as principais fontes de energia limpa e suas vantagens."
  },
  {
    url: "https://vimeo.com/76979871",
    title: "Impacto Ambiental e Tecnologia",
    description: "Como a tecnologia pode ajudar a reduzir impactos ambientais."
  },
  {
    url: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
    title: "Reciclagem e Economia Circular",
    description: "Entenda o conceito de economia circular e reciclagem."
  },
  {
    url: "https://vimeo.com/22439234",
    title: "Proteção da Biodiversidade",
    description: "A importância da biodiversidade para o equilíbrio do planeta."
  },
  {
    url: "https://www.youtube.com/watch?v=V-_O7nl0Ii0",
    title: "Tecnologias Verdes em Ação",
    description: "Conheça tecnologias inovadoras para um futuro sustentável."
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
