# Registro da LP — Lubrificação centralizada SEIVE LUB

Este arquivo registra de onde veio cada coisa, para que o projeto possa ser retomado sem a conversa que o originou.

## Origem

| Campo      | Valor                                                                                                                                          |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Pedido     | Nova LP de lubrificação centralizada SEIVE, com a estrutura da LP de compressores portáteis, trocando conteúdo e fotos (30/10/2026)            |
| Estrutura  | Cópia da LP `LP-ATLAS-COPCO---Compressores-port-teis`, padrão B2 2.8.0, com o Hero, as seções e a composição dela                              |
| Fontes     | safeminesolucoes.com.br/produtos/lubrificacao-centralizada/10 (principal) e seive.com.br/sistema-supressor-de-incendio-lubrificaçao-automatica |
| Marca      | Safe Mine Soluções como anunciante e SEIVE como fabricante, por extenso, como nas LPs de compressores e de supressão                           |
| Publicação | Vercel, projeto `lp-seive-lubrificacao-centralizada`; branch `wp-build` gerada pelo GitHub Actions                                             |

## Campanha

Não houve briefing de campanha nesta LP. Os valores abaixo foram definidos na execução e precisam ser conferidos antes de ativar anúncios.

| Campo               | Valor                                                                                                                                  |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Palavra-chave       | `lubrificação centralizada SEIVE` — no H1 e no title                                                                                   |
| Negativas de oferta | troca de óleo, óleo de motor, lubrificante spray, lubrificante automotivo e doméstico, lubrificação de bicicleta                       |
| Claims proibidos    | fabricante, autorizado, exclusivo, superlativos, "primeira fornecedora" e promessas absolutas sobre paradas (ver `campaign.forbidden`) |

## Composição

`linhas · identificar · aplicacoes · diferenciais`, igual à LP de compressores.

| Seção          | O que virou nesta LP                                                                       |
| -------------- | ------------------------------------------------------------------------------------------ |
| Faixa do hero  | 4 prioridades da operação, no lugar das 4 linhas de produto                                |
| `linhas`       | 4 partes do sistema, porque o SEIVE LUB é um produto só, sob projeto, sem portes           |
| `identificar`  | Dados da máquina para a cotação, no lugar de vazão e pressão                               |
| `aplicacoes`   | Mineração, agrícola, florestal, móveis e pesados; portuário e industrial na faixa de ajuda |
| `diferenciais` | 5 diferenciais vindos da página da Safe Mine e da SEIVE                                    |

Único ajuste de componente: em `ProductLines.astro`, o ícone `engine` deu lugar a `check`, porque a terceira feature deixou de ser o motor.

## Assets

| Asset                    | Arquivo                                 | Origem                                                                         |
| ------------------------ | --------------------------------------- | ------------------------------------------------------------------------------ |
| Foto do hero             | `src/assets/heroBg.png`                 | Site da Safe Mine, bomba instalada (1280×853)                                  |
| Bomba                    | `src/assets/linhas/linha-1.png`         | Site da SEIVE, render com fundo transparente                                   |
| Distribuidor             | `src/assets/linhas/linha-2.png`         | Site da Safe Mine                                                              |
| Mangueiras               | `src/assets/linhas/linha-3.png`         | Site da Safe Mine                                                              |
| Painel da bomba          | `src/assets/linhas/marcas.png`          | Recorte do render da SEIVE                                                     |
| Mineração                | `src/assets/aplicacoes/aplicacao-1.png` | LP de supressão SEIVE                                                          |
| Agrícola                 | `src/assets/aplicacoes/aplicacao-2.png` | LP de supressão SEIVE                                                          |
| Florestal                | `src/assets/aplicacoes/aplicacao-3.png` | LP de supressão SEIVE (899 px de largura, abaixo dos 1200 px da especificação) |
| Móveis e pesados         | `src/assets/aplicacoes/aplicacao-4.png` | Site da Safe Mine                                                              |
| Cenário dos diferenciais | `src/assets/diferenciais/cenario.jpg`   | Site da Safe Mine                                                              |
| Logos                    | `LOGO.png`, `marca-safe-mine.png`       | Mantidos da LP de compressores                                                 |

## Pendências para validar

- **Partes do sistema:** as fontes não trazem lista técnica. "Bomba e reservatório", "Distribuidores progressivos" e "Linhas até os pontos" vêm das fotos e do conceito de sistema progressivo. Confirmar com a SEIVE.
- **Dados técnicos:** capacidade, pressão, lubrificantes aceitos e número de pontos ficaram fora, por não haver fonte.
- **Direito de uso:** confirmar as fotos de aplicações vindas da LP de supressão, que mostram marcas de terceiros.
- **Palavra-chave e negativas:** definidas sem briefing de campanha.

## Fora da página, de propósito

Certificações, patente, números da SEIVE, "primeira fornecedora brasileira", área de atendimento, telefones e e-mails da SEIVE. Na LP de supressão, esses itens também ficaram fora, à espera de confirmação.

## Limitações conhecidas

- `npm run ficha` e, com ele, `npm run verify` dependem da biblioteca `LP-STARTER-B2`, que não acompanha este repositório. Por isso, `ficha.json` e `docs/FICHA-LP.md` foram gerados a partir dos dados de `src/`, e a verificação é feita pelas etapas do CI: `check:lp`, `lint`, `format:check` e `build`.
- Na Vercel, o formulário aparece como texto do shortcode, e os CTAs `btn-slave-whats` não têm ação: ambos dependem do plugin de atendimento do WordPress. O botão flutuante do WhatsApp funciona em qualquer hospedagem.
