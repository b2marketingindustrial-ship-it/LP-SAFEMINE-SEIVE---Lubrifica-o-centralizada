# Registro da LP — Lubrificação centralizada SEIVE LUB

Este arquivo registra de onde veio cada coisa, para que o projeto possa ser retomado sem a conversa que o originou.

## Origem

| Campo      | Valor                                                                                                                                                                               |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pedido     | Nova LP de lubrificação centralizada SEIVE, com a estrutura da LP de compressores portáteis, trocando conteúdo e fotos (30/10/2026)                                                 |
| Estrutura  | Cópia da LP `LP-ATLAS-COPCO---Compressores-port-teis`, padrão B2 2.8.0, com as seções e a composição dela. O Hero foi restaurado à estrutura fixa 4.1.2 em 01/11/2026 (ver Desvios) |
| Fontes     | safeminesolucoes.com.br/produtos/lubrificacao-centralizada/10 (principal) e seive.com.br/sistema-supressor-de-incendio-lubrificaçao-automatica                                      |
| Marca      | Safe Mine Soluções como anunciante e SEIVE como fabricante, por extenso, como nas LPs de compressores e de supressão                                                                |
| Publicação | Vercel, projeto `lp-seive-lubrificacao-centralizada`; branch `wp-build` gerada pelo GitHub Actions                                                                                  |

## Campanha

Não houve briefing de campanha nesta LP. Os valores abaixo foram definidos na execução e precisam ser conferidos antes de ativar anúncios.

| Campo               | Valor                                                                                                            |
| ------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Palavra-chave       | `lubrificação centralizada SEIVE` — no H1 e no title                                                             |
| Negativas de oferta | troca de óleo, óleo de motor, lubrificante spray, lubrificante automotivo e doméstico, lubrificação de bicicleta |
| Claims proibidos    | fabricante, autorizado, exclusivo, superlativos e promessas absolutas sobre paradas (ver `campaign.forbidden`)   |

## Composição

`linhas · identificar · aplicacoes · diferenciais`, igual à LP de compressores.

| Seção          | O que virou nesta LP                                                                       |
| -------------- | ------------------------------------------------------------------------------------------ |
| Hero           | 3 pontos da operação na caixa de ícones, no lugar do exemplo do template                   |
| `linhas`       | 4 partes do sistema, porque o SEIVE LUB é um produto só, sob projeto, sem portes           |
| `identificar`  | Dados da máquina para a cotação, no lugar de vazão e pressão                               |
| `aplicacoes`   | Mineração, agrícola, florestal, móveis e pesados; portuário e industrial na faixa de ajuda |
| `diferenciais` | 5 diferenciais vindos da página da Safe Mine e da SEIVE                                    |

Único ajuste de componente: em `ProductLines.astro`, o ícone `engine` deu lugar a `check`, porque a terceira feature deixou de ser o motor.

## Assets

| Asset                    | Arquivo                                 | Origem                                                                                                   |
| ------------------------ | --------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Foto do hero             | `src/assets/heroBg.png`                 | Site da Safe Mine, bomba instalada (1280×853), reenquadrada em 1981×900 com o assunto em ~70% da largura |
| Bomba                    | `src/assets/linhas/linha-1.png`         | Site da SEIVE, render com fundo transparente                                                             |
| Distribuidor             | `src/assets/linhas/linha-2.png`         | Site da Safe Mine                                                                                        |
| Mangueiras               | `src/assets/linhas/linha-3.png`         | Site da Safe Mine                                                                                        |
| Painel da bomba          | `src/assets/linhas/marcas.png`          | Recorte do render da SEIVE                                                                               |
| Mineração                | `src/assets/aplicacoes/aplicacao-1.png` | LP de supressão SEIVE                                                                                    |
| Agrícola                 | `src/assets/aplicacoes/aplicacao-2.png` | LP de supressão SEIVE                                                                                    |
| Florestal                | `src/assets/aplicacoes/aplicacao-3.png` | LP de supressão SEIVE (899 px de largura, abaixo dos 1200 px da especificação)                           |
| Móveis e pesados         | `src/assets/aplicacoes/aplicacao-4.png` | Site da Safe Mine                                                                                        |
| Cenário dos diferenciais | `src/assets/diferenciais/cenario.jpg`   | Site da Safe Mine                                                                                        |
| Logos                    | `LOGO.png`, `marca-safe-mine.png`       | Mantidos da LP de compressores                                                                           |

## Pendências para validar

- **Partes do sistema:** as fontes não trazem lista técnica. "Bomba e reservatório", "Distribuidores progressivos" e "Linhas até os pontos" vêm das fotos e do conceito de sistema progressivo. Confirmar com a SEIVE.
- **Dados técnicos:** capacidade, pressão, lubrificantes aceitos e número de pontos ficaram fora, por não haver fonte.
- **Direito de uso:** confirmar as fotos de aplicações vindas da LP de supressão, que mostram marcas de terceiros.
- **Palavra-chave e negativas:** definidas sem briefing de campanha.

## Fora da página, de propósito

Certificações do supressor (ABNT PE-223, NFPA, UL), área de atendimento, telefones e e-mails da SEIVE. Na LP de supressão, esses itens também ficaram fora, à espera de confirmação.

## Desvios do padrão

- **Header:** sem desvio. Restaurado em 01/11/2026 à estrutura fixa 4.1.1 (barra navy sticky, logo em placa pendurada, tagline central, CTA laranja, sem âncoras).
- **Hero:** sem desvio. O Hero da primeira versão (fundo claro, sem a coluna do chat) foi substituído em 01/11/2026 pelo da estrutura fixa 4.1.2: grid `1fr · 270px · 300px`, coluna 2 vazia, slot `shortcode` de 300px, foto de 1700px ancorada na borda do container. A faixa de quatro prioridades e o cartão de ajuda do hero saíram; a nota de resultados ficou sob os botões.
- **Linhas:** `ProductLines.astro` sem a faixa "Não sabe qual configuração escolher?" (01/11/2026), por repetir o bloco `identificar` logo abaixo. Recompor com `compose.mjs` sobrescreve o arquivo: guarde esta versão antes.
- **Paleta:** os véus do hero usam o azul `#0a1d4d` da marca no lugar do navy `#001830` do template. O token `accent-orange-light` (`#7ba249`) existe só para o destaque do H1 sobre o fundo escuro.

## Limitações conhecidas

- `npm run ficha` e, com ele, `npm run verify` dependem da biblioteca `LP-STARTER-B2`, que não acompanha este repositório. Por isso, `ficha.json` e `docs/FICHA-LP.md` foram gerados a partir dos dados de `src/`, e a verificação é feita pelas etapas do CI: `check:lp`, `lint`, `format:check` e `build`.
- Na Vercel, o formulário aparece como texto do shortcode, e os CTAs `btn-slave-whats` não têm ação: ambos dependem do plugin de atendimento do WordPress. O botão flutuante do WhatsApp funciona em qualquer hospedagem.

## Header restaurado ao padrão (01/11/2026)

A pedido do usuário, o Header deixou a barra branca flutuante do mockup de 29/10/2026 e voltou à estrutura fixa 4.1.1, como nas demais LPs da B2: barra navy `sticky`, a placa branca traz o logo SEIVE, um separador e o Safe Mine, tagline central "Lubrificação centralizada" e CTA laranja em caixa-alta ("Cotação" no celular). As âncoras do topo saíram. O Hero voltou ao padding do padrão (`py-20 lg:py-24`), já que o header não é mais sobreposto. A assinatura A8 do Header em `scripts/check-lp.mjs` voltou à da estrutura fixa.

## Conteúdo do catálogo SEIVE LUB 2024 e composição estendida (01/11/2026)

Fonte: `docs/briefing-cliente/Apresentação Seive LUB 2024.pdf` e o texto do site da SEIVE. Decisões tomadas com a B2, ponto a ponto:

| Ponto                                                                                                             | Decisão                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Benefícios (corretivas, disponibilidade, consumo e resíduos, segurança e incêndio, quantidade exata, baixo custo) | Nova seção `beneficios` ("Por que investir"), própria desta LP                                                                                                                                                          |
| Funcionamento (central → linha → distribuidores → pontos, dimensionado pelo manual)                               | Seção `processo` da biblioteca, em variante clara                                                                                                                                                                       |
| Garantia (12 meses; 24 nos distribuidores; canal técnico)                                                         | Selo na cotação, item dos diferenciais e resposta no FAQ                                                                                                                                                                |
| Fabricante                                                                                                        | Entram 100% brasileira, pioneira (primeira fornecedora brasileira), ISO 9001:2015 e patente nº 903706326. "primeira fornecedora" saiu da lista de claims proibidos. ABNT PE-223, NFPA e UL ficam fora: são do supressor |
| Segmentos                                                                                                         | `aplicacoes` vira carrossel com 8 cards: os 4 de antes e sucroenergético, algodão, portuário e estacionários, com fotos do catálogo em baixa resolução                                                                  |
| Clientes                                                                                                          | Nova seção `clientes` com 18 logos da p. 5 do catálogo em carrossel. São clientes da SEIVE, usados com o aval da B2; recortados do PDF em baixa resolução (trocar pelos originais)                                      |
| Estatísticas (p. 13)                                                                                              | Entram "+60% das falhas" e "+50% dos incêndios", atribuídas a fabricantes de componentes. O "95%" ficou fora por contradizer o 60%                                                                                      |
| Dúvidas de instalação                                                                                             | Nova seção `perguntas` (6 perguntas, JSON-LD FAQPage)                                                                                                                                                                   |

Composição: `linhas · beneficios · processo · identificar · aplicacoes · clientes · perguntas · diferenciais`, com tons e ritmos resolvidos por `resolveLayout` (`src/lib/rhythm.mjs`). Como a biblioteca não está nesta máquina, `index.astro` e `lp.manifest.json` foram estendidos à mão; `npm run compose` sobrescreveria as seções novas. Os contratos de `aplicacoes` (4–8 itens) e `clientes` (até 20 logos) foram ampliados no manifesto.
