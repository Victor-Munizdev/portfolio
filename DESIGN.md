---
name: Victor Muniz — Portfólio
description: Página única escura em que o trilho de entrega (do problema à manutenção) é a única cor e a única ornamentação.
colors:
  canvas: "#101010"
  surface: "#151515"
  surface-2: "#1b1b1b"
  bone: "#fffdf9"
  text-2: "#c6c8c9"
  fog: "#8fa3b5"
  line: "rgba(255, 253, 249, 0.1)"
  line-strong: "rgba(255, 253, 249, 0.22)"
  line-draw: "rgba(255, 253, 249, 0.45)"
  signal-a: "#19c8ff"
  signal-b: "#8f5bff"
  signal-c: "#ff2bd6"
typography:
  display:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.5rem + 4vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.25rem + 2vw, 2.75rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  figure:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.75rem + 2vw, 3.25rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontFeature: "tnum"
  heading:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.43
  label:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  control: "0.375rem"
  frame: "0.75rem"
  full: "999px"
spacing:
  gutter-compact: "1.25rem"
  gutter: "2.5rem"
  column-gap: "2.5rem"
  section-top: "4rem"
  section-top-md: "5rem"
  section-bottom: "5rem"
  section-bottom-md: "7rem"
  header-h: "4.5rem"
  container-page: "76rem"
  container-prose: "40rem"
components:
  button-primary:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.canvas}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.control}"
    padding: "0 1.25rem"
    height: "2.75rem"
  button-primary-hover:
    backgroundColor: "#ffffff"
    textColor: "{colors.canvas}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.control}"
    padding: "0 1.25rem"
    height: "2.75rem"
  button-secondary-hover:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.bone}"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.text-2}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "0.25rem 0.75rem"
  nav-link:
    textColor: "{colors.text-2}"
    typography: "{typography.body-sm}"
  nav-link-hover:
    textColor: "{colors.bone}"
  locale-trigger:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.control}"
    padding: "0 0.75rem"
    height: "2.75rem"
  locale-menu:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-2}"
    rounded: "{rounded.frame}"
    padding: "0.25rem"
    width: "12rem"
  rail-node:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.full}"
    size: "7px"
---

# Design System: Victor Muniz — Portfólio

## Overview

**Creative North Star: "O Trilho de Entrega"**

A página é o próprio pipeline de entrega. Um trilho de 1px atravessa o vazio escuro: abre o hero com as nove etapas de uma entrega (do problema à manutenção) e volta como o palco de "Como eu trabalho". Sobre esse trilho corre um sinal de 2px com o espectro do logo, e esse sinal é a única cor do sistema. Todo o resto é osso sobre carvão, organizado como um livro-razão: linhas separadas por hairlines, números tabulares, rótulos pequenos em névoa azulada.

A densidade é de documento técnico, não de vitrine. Não há cartões, sombras, gradientes de fundo nem ilustração; a hierarquia vem do tamanho da tipografia (Geist em peso 400, grande e apertada) e de dois pesos de hairline. O movimento serve ao trilho: ele se desenha uma vez no hero, avança com o scroll no processo, e os topos de seção são traços neutros que o scroll completa.

A página existe inteira no HTML do servidor. Sem JavaScript tudo aparece desenhado e legível; com `prefers-reduced-motion` não há suavização, pin nem scrub.

**Key Characteristics:**
- Canvas quase preto (#101010) com texto osso; contraste de 18,7:1 no texto principal.
- Uma única cor: o espectro ciano → violeta → magenta do logo, restrito a dois trilhos.
- Geist como única família; títulos em peso 400, peso 500 só em rótulos, nomes e controles.
- Estrutura de livro-razão: linhas com hairline no topo, grade de 12 colunas, alinhamento à esquerda.
- Zero sombras; profundidade por três tons de superfície e dois pesos de linha.
- Movimento contido e dirigido pelo scroll, com variante completa para movimento reduzido.

## Colors

Paleta de vazio escuro com neutros levemente quentes e um único espectro frio-quente herdado do logo.

### Primary
- **Sinal Ciano** (`signal-a`), **Sinal Violeta** (`signal-b`, parada em 55%) e **Sinal Magenta** (`signal-c`): as três paradas de um gradiente linear único. Nunca aparecem isoladas nem como cor de texto, fundo ou borda de componente. O gradiente corre a 90° no trilho horizontal e a 180° no trilho vertical do processo em telas compactas. No hero, cada uma das nove etapas mostra a sua fatia do espectro, de modo que os segmentos formam um sinal contínuo.

### Neutral
- **Carvão do Vazio** (`canvas`): fundo da página, do header e do painel do menu mobile; também é o texto do botão primário.
- **Superfície** (`surface`): menu do seletor de idioma, hover de linhas clicáveis (canais de contato, itens do menu mobile) e fundo de moldura de imagem escura.
- **Superfície 2** (`surface-2`): hover de controles com contorno (botão secundário, seletor de idioma, botão do menu, links sociais do hero).
- **Osso** (`bone`): texto principal, títulos, números, preenchimento do botão primário, anel de foco e borda dos nós do trilho.
- **Texto Secundário** (`text-2`): parágrafos de apoio, leads, descrições e tags; 11,3:1 sobre o canvas.
- **Névoa** (`fog`): rótulos de campo, anos, períodos, notas e ícones em repouso; 7,3:1 sobre o canvas, por isso é segura em 13px e 14px.
- **Linha** (`line`): hairline padrão entre linhas de um mesmo bloco e borda de tags.
- **Linha Forte** (`line-strong`): trilho base, topo de blocos principais (estudo de caso, cargo atual, rodapé) e contorno de controles.
- **Linha Desenhada** (`line-draw`): o traço neutro que o scroll desenha sobre o hairline do topo de cada seção.

### Named Rules
**Regra do Sinal Único.** Fora da própria marca no header, o espectro aparece em exatamente dois lugares: o trilho do hero e o trilho do processo, sempre como faixa de 2px sobre o trilho de 1px. Topo de seção, link, botão, ícone e texto são neutros.

**Regra dos Dois Pesos de Linha.** Linha Forte abre um bloco ou contorna um controle; Linha separa as fileiras dentro dele. Não há terceiro peso além do traço que o scroll desenha.

**Regra do Hover por Superfície.** O hover muda de tom de superfície, de cor de borda ou desenha um sublinhado de 1px. Nunca é só uma variação de opacidade.

## Typography

**Display Font:** Geist (com system-ui, sans-serif)
**Body Font:** Geist (com system-ui, sans-serif)
**Label/Mono Font:** não há família distinta; rótulos usam Geist em peso 500.

**Character:** Uma família só, em peso regular mesmo nos tamanhos grandes. A autoridade vem da escala e do tracking negativo, não do negrito; o resultado é técnico e calmo.

### Hierarchy
- **Display** (400, clamp de 2.5rem a 4.5rem, 1.04, -0.035em): o h1 do hero e o título do contato. Só nas duas pontas da página.
- **Title** (400, clamp de 1.75rem a 2.75rem, 1.12, -0.025em): h2 de cada seção.
- **Figure** (400, clamp de 2.25rem a 3.25rem, 1, -0.03em, numerais tabulares): métricas medidas, sempre com rótulo e contexto ao lado.
- **Heading** (400, 1.5rem, 1.25, -0.015em): h3 de casos, cargos, etapas do processo e grupos da stack; h2 de seções de apoio; contagens do hero; itens do menu mobile.
- **Lead** (400, 1.125rem, 1.65): parágrafo de abertura de seção, limitado a 40rem.
- **Body** (400, 1rem, 1.6): texto corrido e descrições, limitado a 40rem quando é prosa.
- **Body pequeno** (400, 0.875rem): navegação, metadados (cliente, período, local), notas, legendas de figura e listas de certificações.
- **Label** (500, 0.8125rem, 1.4, sem caixa alta): termo de um campo (Problema, Solução, Resultado). Em peso 400 no mesmo tamanho: tags e nomes de etapa do trilho do hero.

### Named Rules
**Regra do Peso 400.** Todo título, do display ao heading, é peso 400. O peso 500 fica para o que nomeia ou aciona: rótulos de campo, nome de cliente e empresa, botões e links externos. Não existem pesos 600 ou 700.

**Regra do Rótulo com Dono.** Um rótulo pequeno sempre nomeia um campo ou uma lista que vem logo abaixo. Nenhum título de seção leva texto pequeno acima dele: a seção abre no hairline e vai direto ao h2.

**Regra do Número Tabular.** Métricas, contagens, anos e períodos usam numerais tabulares. Toda métrica em Figure vem acompanhada de rótulo e de contexto com origem e período.

## Layout

Coluna única de até 76rem, centrada, com margem lateral de 1.25rem que passa a 2.5rem a partir de 768px. O header é fixo, com 4.5rem de altura, e as seções compensam essa altura na navegação por âncora.

A partir de 1024px cada bloco usa uma grade de 12 colunas com vão horizontal de 2.5rem. A divisão recorrente é 4 + 8: identificação à esquerda (título, cliente, período, resultado), detalhe à direita. As listas em fileira repetem a mesma grade com outras proporções (3 + 5 + 2 + 2 nos projetos compactos, 1 + 5 + 4 + 2 nas certificações, 7 + 5 no contato). Abaixo de 1024px tudo empilha em uma coluna, na mesma ordem de leitura.

Toda seção tem a mesma moldura: hairline no topo, 4rem de respiro acima do título (5rem a partir de 768px) e 5rem abaixo do conteúdo (7rem a partir de 768px). O conteúdo começa de 2.5rem a 3.5rem depois do cabeçalho da seção. Blocos grandes dentro de uma seção se separam por 5rem a 7rem; fileiras de lista têm de 1rem a 1.75rem de respiro vertical. O ritmo é deliberadamente desigual: muito ar entre seções, fileiras compactas dentro delas.

Tudo é alinhado à esquerda. A única exceção é a última coluna das listas, alinhada à direita em desktop para ancorar o link de saída.

O trilho do hero é uma linha única de nove etapas a partir de 1024px e uma grade 3 × 3 abaixo disso. O trilho do processo é horizontal com cinco colunas em desktop e vertical, à esquerda do texto, em telas compactas.

**Movimento.** Em desktop sem restrição de movimento, o scroll é suavizado (ScrollSmoother, 0.8) e o palco do processo fica fixado enquanto o trilho avança com scrub por cerca de 110% da altura da tela; o pin só acontece se o palco couber na área útil abaixo do header. Em telas compactas o scroll é nativo e o trilho vertical acompanha a leitura sem pin. Blocos abaixo da dobra sobem 24px e aparecem uma vez (0.8s, expo.out, defasagem de 0.08s). O trilho do hero se desenha uma única vez, em traço contínuo (1.5s em desktop, 1.1s em compacto). Etapas do processo ainda não alcançadas ficam a 75% de opacidade, o que mantém o menor texto delas em 4,6:1. Transições de estado duram 200ms com `cubic-bezier(0.16, 1, 0.3, 1)`. Com `prefers-reduced-motion` nada disso roda: a página fica desenhada e só a navegação por âncoras continua ativa.

## Elevation & Depth

O sistema é plano. Não existe nenhuma sombra no código, nem em repouso nem em estado. A profundidade vem de três tons de superfície (canvas, surface, surface-2) e de bordas de 1px: o menu do seletor de idioma, o único elemento flutuante, se destaca por fundo em Superfície e contorno em Linha Forte. O header é a única superfície translúcida (canvas a 90% com desfoque de fundo), para que o conteúdo passe por baixo dele sem perder a leitura da navegação.

### Named Rules
**Regra da Sombra Zero.** Nada projeta sombra. Um elemento que precisa se separar do fundo sobe um tom de superfície e ganha um contorno de 1px.

## Shapes

Três raios, cada um com uma função. Controles (botões, seletor de idioma, botão do menu, itens do dropdown) têm cantos discretamente suavizados (0.375rem). Molduras que contêm algo (figura de estudo de caso, menu do seletor) têm cantos mais abertos (0.75rem). Pílula completa (999px) fica para tags e para os nós do trilho. Fileiras, seções e o rodapé não têm raio nem caixa: são delimitados só por hairlines horizontais.

O nó do trilho é a forma-assinatura: um círculo de 7px, vazado em canvas com borda de 1px em osso, que se preenche de osso quando a etapa é alcançada no processo. Itens de lista dentro de um campo usam um traço horizontal de 8px por 1px em névoa no lugar de marcador.

Ícones são de linha (Lucide), traço de 1.5, com 16px ao lado de texto e 20px quando são o próprio controle.

## Components

### Buttons
Diretos e sem ornamento: um retângulo de 44px de altura mínima, texto de 14px em peso 500.
- **Shape:** cantos discretamente suavizados (0.375rem), respiro horizontal de 1.25rem, vão de 0.5rem entre texto e ícone.
- **Primary:** preenchido em osso com texto em canvas. É a ação principal de um bloco: ver os casos, falar por e-mail, o CTA do header.
- **Secondary:** transparente com contorno de 1px em Linha Forte e texto em osso. Acompanha o primário como segunda saída.
- **Hover / Focus:** o primário clareia para branco puro; o secundário ganha contorno em osso e fundo em Superfície 2. Ao pressionar, ambos descem 1px. Foco visível é um anel de 2px em osso com afastamento de 3px, igual para todo elemento interativo. Transição de 200ms.

### Chips
- **Style:** pílula transparente com contorno de 1px em Linha, texto de 13px em Texto Secundário, respiro de 0.25rem por 0.75rem, vão de 0.5rem entre tags.
- **State:** estáticas. Listam tecnologias de um caso ou cargo; não filtram nem são clicáveis.

### Cards / Containers
Não há cartões. O contêiner do sistema é a fileira de livro-razão.
- **Corner Style:** nenhum; a fileira não tem caixa.
- **Background:** transparente sobre o canvas. Só fileiras que são um link inteiro (canais de contato, itens do menu mobile) ganham Superfície no hover.
- **Shadow Strategy:** nenhuma (ver Elevation & Depth).
- **Border:** hairline no topo de cada fileira em Linha; o bloco fecha com um hairline na base. Blocos principais abrem em Linha Forte.
- **Internal Padding:** de 1rem a 1.75rem na vertical, zero na horizontal.
- **Campo:** dentro de um estudo de caso, cada campo é um hairline no topo, um rótulo em névoa (13px, peso 500) e o valor em Texto Secundário, em duas colunas a partir de 640px.
- **Moldura de figura:** a única caixa com raio (0.75rem) e contorno em Linha; a legenda fica dentro, separada por um hairline, em 14px.

### Navigation
- **Header:** fixo, 4.5rem, hairline na base. Marca à esquerda (logo de 28px e nome em peso 500), links ao centro, e à direita o seletor de idioma, o CTA primário e, abaixo de 1024px, o botão de menu.
- **Links:** 14px em Texto Secundário; no hover passam a osso e um sublinhado de 1px cresce da esquerda em 220ms.
- **Seletor de idioma:** controle com contorno (bandeira, sigla em caixa alta, chevron que gira ao abrir). O menu tem 12rem, fundo em Superfície, contorno em Linha Forte e raio de moldura; cada opção tem 44px de altura, e a ativa leva um check em osso.
- **Mobile:** botão quadrado de 44px com contorno. O painel ocupa a tela abaixo do header, em canvas opaco, com cada destino em Heading numa fileira de 64px separada por hairline.
- **Rodapé:** hairline em Linha Forte, três colunas em 14px, links com o mesmo sublinhado que cresce.

### Link externo
Texto de 14px em peso 500 com o sublinhado que cresce e uma seta diagonal de 16px em névoa; no hover a seta passa a osso e se desloca 2px para cima e para a direita. Sempre anuncia a nova aba para leitores de tela.

### Trilho de Entrega
O componente-assinatura. Um trilho base de 1px em Linha Forte, um sinal espectral de 2px sobreposto e nós de 7px nas etapas.
- **No hero:** nove etapas com o nome abaixo de cada nó. O sinal se desenha uma vez, da esquerda para a direita, e cada nó acende ao ser alcançado.
- **No processo:** cinco etapas numeradas (número em névoa, nome em Heading, descrição e entregáveis). O sinal avança com o scroll e o nó se preenche de osso quando a etapa é alcançada.
- **Topo de seção:** a versão neutra do mesmo gesto, um hairline em Linha Forte sobre o qual o scroll desenha um traço em Linha Desenhada. Sem espectro.

## Do's and Don'ts

### Do:
- **Faça** o espectro aparecer só como sinal de 2px sobre o trilho de 1px, no hero e no processo.
- **Faça** todo título em Geist peso 400 com tracking negativo; use peso 500 só em rótulos, nomes e controles.
- **Faça** blocos novos como fileiras de livro-razão: hairline no topo, grade de 12 colunas, identificação à esquerda e detalhe à direita.
- **Faça** o botão primário preenchido em osso com texto em canvas e o secundário com contorno em Linha Forte; no máximo um primário por bloco.
- **Faça** toda métrica vir com rótulo, contexto, origem e período, em numerais tabulares.
- **Faça** texto pequeno em névoa ou mais claro; névoa é o limite inferior de contraste do sistema (7,3:1).
- **Faça** todo alvo interativo ter pelo menos 44px de altura e o anel de foco de 2px em osso.
- **Faça** toda animação ter estado final legível sem JavaScript e uma variante sem suavização, pin ou scrub para movimento reduzido.

### Don't:
- **Não** use ciano, violeta ou magenta em texto, botão, link, ícone, borda ou fundo.
- **Não** adicione sombra, brilho ou gradiente de fundo; separe por tom de superfície e contorno de 1px.
- **Não** embrulhe conteúdo em cartões; a fileira com hairline é o contêiner.
- **Não** use pesos 600 ou 700, caixa alta em títulos, nem uma segunda família tipográfica.
- **Não** coloque texto pequeno acima de um título de seção; rótulos só nomeiam campos e listas.
- **Não** centralize blocos de texto; o sistema é alinhado à esquerda.
- **Não** sinalize hover só com opacidade; mude superfície, borda ou sublinhado.
- **Não** use emoji no lugar de ícone; ícones são Lucide de linha com traço de 1.5.
