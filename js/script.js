"use strict";

// Ativar links menu

const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Ativar items orçamento

const parametros = new URLSearchParams(location.search);

function ativarProdutos(parametro) {
  const element = document.getElementById(parametro);
  if (element) {
    element.checked = true;
  }
}

parametros.forEach(ativarProdutos);

// Ativar perguntas frenquentes de seguros

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPerguntas(e) {
  const pergunta = e.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function abrirPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPerguntas);
}

perguntas.forEach(abrirPerguntas);

// GALERIA BICICLETAS

const galeria = document.querySelectorAll(".galeria img");
const galeriaContainer = document.querySelector(".galeria");

function trocarImagem(e) {
  const img = e.currentTarget;
  const media = matchMedia("(min-width: 920px)").matches;
  console.log(media);
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

//  ANIMAÇÃO

if (window.SimpleAnime) {
  new SimpleAnime();
}
