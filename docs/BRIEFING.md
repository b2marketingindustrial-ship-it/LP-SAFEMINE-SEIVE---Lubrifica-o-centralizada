# Registro da LP — Lubrificação centralizada SEIVE LUB

Este arquivo registra de onde veio cada coisa, para que o projeto possa ser retomado sem a conversa que o originou.

## Origem

| Campo      | Valor                                                                                                                                                                                                                        |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pedido     | Nova LP de lubrificação centralizada SEIVE, com a estrutura da LP de compressores portáteis, trocando conteúdo e fotos (30/10/2026)                                                                                          |
| Estrutura  | Cópia da LP `LP-ATLAS-COPCO---Compressores-port-teis`, padrão B2 2.8.0, com as seções e a composição dela. O Hero foi restaurado à estrutura fixa 4.1.2 em 01/11/2026 (ver Desvios)                                          |
| Fontes     | safeminesolucoes.com.br/produtos/lubrificacao-centralizada/10 (principal) e seive.com.br/sistema-supressor-de-incendio-lubrificaçao-automatica                                                                               |
| Marca      | SEIVE em todos os textos e metadados (título, descrição, copyright, JSON-LD, og:image), no lugar da Safe Mine, a pedido do usuário em 03/11/2026. A logo da Safe Mine segue no header; o endereço do footer é o da Safe Mine |
| Publicação | Vercel, projeto `lp-seive-lubrificacao-centralizada`; branch `wp-build` gerada pelo GitHub Actions                                                                                                                           |

## Campanha

Não houve briefing de campanha nesta LP. Os valores abaixo foram definidos na execução e precisam ser conferidos antes de ativar anúncios.

| Campo               | Valor                                                                                                            |
| ------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Palavra-chave       | `lubrificação centralizada SEIVE` — no H1 e no title                                                             |
| Negativas de oferta | troca de óleo, óleo de motor, lubrificante spray, lubrificante automotivo e doméstico, lubrificação de bicicleta |
| Claims proibidos    | fabricante, autorizado, exclusivo, superlativos e promessas absolutas sobre paradas (ver `campaign.forbidden`)   |

## Composição

Composição inicial: `linhas · identificar · aplicacoes · diferenciais`, igual à LP de compressores. A atual, desde 02/11/2026, é `solucao · linhas · processo · identificar · aplicacoes · beneficios · clientes · perguntas · diferenciais` (ver as seções datadas abaixo). A tabela registra a primeira versão.

| Seção          | O que virou nesta LP                                                                       |
| -------------- | ------------------------------------------------------------------------------------------ |
| Hero           | 3 pontos da operação na caixa de ícones, no lugar do exemplo do template                   |
| `linhas`       | 4 partes do sistema, porque o SEIVE LUB é um produto só, sob projeto, sem portes           |
| `identificar`  | Dados da máquina para a cotação, no lugar de vazão e pressão                               |
| `aplicacoes`   | Mineração, agrícola, florestal, móveis e pesados; portuário e industrial na faixa de ajuda |
| `diferenciais` | 5 diferenciais vindos da página da Safe Mine e da SEIVE                                    |

Único ajuste de componente: em `ProductLines.astro`, o ícone `engine` deu lugar a `check`, porque a terceira feature deixou de ser o motor.

## Assets

| Asset                    | Arquivo                                 | Origem                                                                                                                                 |
| ------------------------ | --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Foto do hero             | `src/assets/heroBg.jpg`                 | Bombas SEIVE LUB sobre plataforma em mina (1877×838, enviada em 03/11/2026), reenquadrada em 1981×900 com o assunto em ~70% da largura |
| Bomba                    | `src/assets/linhas/linha-1.png`         | Site da SEIVE, render com fundo transparente                                                                                           |
| Distribuidor             | `src/assets/linhas/linha-2.png`         | Site da Safe Mine                                                                                                                      |
| Mangueiras               | `src/assets/linhas/linha-3.png`         | Site da Safe Mine                                                                                                                      |
| Painel da bomba          | `src/assets/linhas/marcas.png`          | Recorte do render da SEIVE                                                                                                             |
| Mineração                | `src/assets/aplicacoes/aplicacao-1.png` | LP de supressão SEIVE                                                                                                                  |
| Agrícola                 | `src/assets/aplicacoes/aplicacao-2.png` | LP de supressão SEIVE                                                                                                                  |
| Florestal                | `src/assets/aplicacoes/aplicacao-3.png` | LP de supressão SEIVE (899 px de largura, abaixo dos 1200 px da especificação)                                                         |
| Móveis e pesados         | `src/assets/aplicacoes/aplicacao-4.png` | Site da Safe Mine                                                                                                                      |
| Cenário dos diferenciais | `src/assets/diferenciais/cenario.jpg`   | Site da Safe Mine                                                                                                                      |
| Logos                    | `LOGO.png`, `marca-safe-mine.png`       | Mantidos da LP de compressores                                                                                                         |

## Pendências para validar

- **Partes do sistema:** as fontes não trazem lista técnica. "Bomba e reservatório", "Distribuidores progressivos" e "Linhas até os pontos" vêm das fotos e do conceito de sistema progressivo. Confirmar com a SEIVE.
- **Dados técnicos:** capacidade, pressão, lubrificantes aceitos e número de pontos ficaram fora, por não haver fonte.
- **Direito de uso:** confirmar as fotos de aplicações vindas da LP de supressão, que mostram marcas de terceiros.
- **Palavra-chave e negativas:** definidas sem briefing de campanha.

## Fora da página, de propósito

Certificações do supressor (ABNT PE-223, NFPA, UL), área de atendimento, telefones e e-mails da SEIVE. Na LP de supressão, esses itens também ficaram fora, à espera de confirmação.

## Desvios do padrão

- **Header:** desvio pedido pelo usuário em 03/11/2026: mesmo estilo e layout do header das LPs Falanga. Barra branca sticky com as logos SEIVE e Safe Mine dentro dela (sem a placa pendurada), filete verde-azul da marca no topo, tagline central com selo verde, CTA verde e sombra só ao rolar. Sem menu (regra 1). Assinatura A8 do `check-lp.mjs` repinada.
- **Hero:** sem desvio. O Hero da primeira versão (fundo claro, sem a coluna do chat) foi substituído em 01/11/2026 pelo da estrutura fixa 4.1.2: grid `1fr · 270px · 300px`, coluna 2 vazia, slot `shortcode` de 300px, foto de 1700px ancorada na borda do container. A faixa de quatro prioridades e o cartão de ajuda do hero saíram; a nota de resultados ficou sob os botões.
- **Linhas:** `ProductLines.astro` sem CTA sob o grid, só a nota (03/11/2026), e sem a faixa "Não sabe qual configuração escolher?" (01/11/2026), por repetir o bloco `identificar` logo abaixo. Recompor com `compose.mjs` sobrescreve o arquivo: guarde esta versão antes.
- **Clientes:** `ClientLogos.astro` com cabeçalho próprio, centrado e empilhado (rótulo em pill, título e descrição, cada um numa linha a partir do tablet), no lugar do `SplitHeader` (03/11/2026). Recompor com `compose.mjs` sobrescreve o arquivo: guarde esta versão antes.
- **Fundos:** desvio pedido pelo usuário em 03/11/2026: branco e cinza alternam seção a seção, no lugar da troca única no meio. Sequência: solução branco · componentes e como funciona cinza (mesmo fundo, a pedido) · identificar branco · aplicações cinza · benefícios branco · clientes cinza · perguntas e diferenciais branco · cotação cinza. Perguntas e diferenciais dividem o fundo porque o respiro de troca (mín. 96px) não fecha antes do `overlap` dos diferenciais. Aplicações passou de `centered-lead` a `even` pelo mesmo motivo, e benefícios perdeu o topo arredondado que marcava a troca única. Regra B3 do `check-lp.mjs` reescrita.
- **Respiro:** desvio pedido pelo usuário em 03/11/2026: o mesmo espaço em cima e embaixo de toda seção do meio e da Cotação (ritmo `uniform`, `--section-space` = 70px em todas as larguras), como nas LPs Falanga, no lugar dos pares assimétricos do padrão. Teto do respiro entre seções de mesmo fundo subiu de 128 para 140px no `rhythm.mjs`. A faixa verde de aplicações cancela o respiro com margem negativa.
- **Paleta:** sem azul na LP (pedido do usuário, 03/11/2026), na identidade da logo SEIVE. Os tokens do padrão mantêm os nomes, com valores novos: superfícies escuras e títulos em verde profundo (`primary-dark-900` `#04291b`, tom médio `#0d4a30`), ação em verde da logo escurecido (`accent-orange` `#00824b`, 4,9:1 com branco), destaques e ícones sobre fundo escuro no amarelo da folha (`accent-orange-light` `#f5c518`), cinza das seções e texto puxados para o verde (`#f3f6f3`, `#13201a`, `#4a5a51`). Hero e banner usam os tokens `seive-*` (verde profundo `#012218` da arte, verde `#00a85a`, amarelo `#ffd23a`). Só a logo da Safe Mine no header mantém as cores dela.

## Limitações conhecidas

- `npm run ficha` e, com ele, `npm run verify` dependem da biblioteca `LP-STARTER-B2`, que não acompanha este repositório. Por isso, `ficha.json` e `docs/FICHA-LP.md` foram gerados a partir dos dados de `src/`, e a verificação é feita pelas etapas do CI: `check:lp`, `lint`, `format:check` e `build`.
- Na Vercel, o formulário aparece como texto do shortcode, e os CTAs `btn-slave-whats` não têm ação: ambos dependem do plugin de atendimento do WordPress. O botão flutuante do WhatsApp funciona em qualquer hospedagem.

## Header restaurado ao padrão (01/11/2026)

A pedido do usuário, o Header deixou a barra branca flutuante do mockup de 29/10/2026 e voltou à estrutura fixa 4.1.1, como nas demais LPs da B2: barra navy `sticky`, a placa branca traz o logo SEIVE, um separador e o Safe Mine, tagline central "Lubrificação centralizada" e CTA laranja em caixa-alta ("Cotação" no celular). As âncoras do topo saíram. O Hero voltou ao padding do padrão (`py-20 lg:py-24`), já que o header não é mais sobreposto. A assinatura A8 do Header em `scripts/check-lp.mjs` voltou à da estrutura fixa.

## Conteúdo do catálogo SEIVE LUB 2024 e composição estendida (01/11/2026)

Fonte: `docs/briefing-cliente/Apresentação Seive LUB 2024.pdf` e o texto do site da SEIVE. Decisões tomadas com a B2, ponto a ponto:

| Ponto                                                                                                             | Decisão                                                                                                                                                                                                                                      |
| ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Benefícios (corretivas, disponibilidade, consumo e resíduos, segurança e incêndio, quantidade exata, baixo custo) | Nova seção `beneficios` ("Por que investir"), própria desta LP                                                                                                                                                                               |
| Funcionamento (central → linha → distribuidores → pontos, dimensionado pelo manual)                               | Seção `processo` da biblioteca, em variante clara                                                                                                                                                                                            |
| Garantia (12 meses; 24 nos distribuidores; canal técnico)                                                         | Selo na cotação, item dos diferenciais e resposta no FAQ                                                                                                                                                                                     |
| Fabricante                                                                                                        | Entram 100% brasileira, pioneira (primeira fornecedora brasileira), ISO 9001:2015 e patente nº 903706326. "primeira fornecedora" saiu da lista de claims proibidos. ABNT PE-223, NFPA e UL ficam fora: são do supressor                      |
| Segmentos                                                                                                         | `aplicacoes` vira carrossel com 8 cards: os 4 de antes e sucroenergético, algodão, portuário e estacionários, com fotos do catálogo em baixa resolução                                                                                       |
| Clientes                                                                                                          | Nova seção `clientes` com os logos da p. 5 do catálogo em carrossel (hoje 17: o da AngloGold Ashanti saiu por ficar ilegível). São clientes da SEIVE, usados com o aval da B2; recortados do PDF em baixa resolução (trocar pelos originais) |
| Estatísticas (p. 13)                                                                                              | Entram "+60% das falhas" e "+50% dos incêndios", atribuídas a fabricantes de componentes. O "95%" ficou fora por contradizer o 60%                                                                                                           |
| Dúvidas de instalação                                                                                             | Nova seção `perguntas` (6 perguntas, JSON-LD FAQPage)                                                                                                                                                                                        |

Composição: `linhas · beneficios · processo · identificar · aplicacoes · clientes · perguntas · diferenciais`, com tons e ritmos resolvidos por `resolveLayout` (`src/lib/rhythm.mjs`). Como a biblioteca não está nesta máquina, `index.astro` e `lp.manifest.json` foram estendidos à mão; `npm run compose` sobrescreveria as seções novas. Os contratos de `aplicacoes` (4–8 itens) e `clientes` (até 20 logos) foram ampliados no manifesto.

## Acabamento visual das seções do meio (02/11/2026)

Linguagem "folha técnica", a pedido do usuário, só nas seções entre o hero e a cotação: malha de pontos (`dot-grid`, `dot-grid-fade`) e de blueprint clara (`blueprint-light`) como textura, placa texturizada sob as fotos de produto (`surface-plate`), linha de fluxo tracejada ligando as etapas, cantos técnicos e malha de blueprint nos dois painéis navy, títulos sobre a foto nos cards de aplicação, logos em cinza que ganham cor no hover. Cabeçalho único (`SplitHeader.astro`) em todas as seções. Benefícios saíram do grid de cards iguais para lista + painel de estatísticas. Sombras padronizadas em `card-shadow`. O detector da skill Impeccable aponta a malha de blueprint como padrão genérico; aqui é intencional (superfície de desenho técnico).

## Seção "A solução" abaixo do hero (02/11/2026)

A pedido do usuário, a página ganhou uma introdução logo abaixo do hero: o que é o SEIVE LUB (sistema progressivo de lubrificação automática), para que serve (prevenir desgaste, manter a máquina operando, projeto sob medida, acompanhamento online), o esquemático de uma instalação (catálogo p. 10, com fundo transparente, em `src/assets/solucao/esquema.png`) e uma ficha curta (progressivo · automática 24 h · 12 VCC). Seção própria `solucao`, na fase de oferta. Para caber no máximo de 2 seções por fase, `beneficios` passou para a fase de prova, e o resolvedor moveu a troca de fundo para ela: `solucao · linhas · processo · identificar · aplicacoes` em branco, `beneficios · clientes · perguntas · diferenciais` em cinza.

## Referências da COAIR aplicadas em "Como funciona" e "Aplicações" (02/11/2026)

A pedido do usuário, com capturas da LP da COAIR como referência: o "Como funciona" virou um painel navy (cantos técnicos, malha de blueprint, esquemático em marca d'água, CTA em pílula à direita e as 4 etapas em pílulas numa linha). Com isso ele passou a ser o bloco navy da fase de apoio, e o "Dados para cotação" ficou com a placa clara. As "Aplicações" viraram uma faixa de largura total em verde escuro da marca (a "cor diferente" pedida; não é navy, então os dois blocos navy do padrão continuam sendo processo e diferenciais), com cabeçalho centrado e cards cuja foto se dissolve no corpo escuro, com ícone, título e seta. A faixa anula o padding do ritmo `centered-lead` com margens negativas e repõe o respiro por dentro.

## Padronização de cores e estilos (03/11/2026)

- Tokens novos em `global.css`: `--color-surface` (placa clara), `--color-brand-green-700/800/900` (faixa de aplicações). Nenhuma cor fixa sobra nos componentes, fora transparências de branco e navy.
- Utilitários: `navy-panel` (um único gradiente para Como funciona, faixa de números e Diferenciais), `panel-shadow` (painéis e fotos grandes), `card-shadow` (cards), `icon-chip` (selo de ícone das listas sobre fundo claro).
- `Eyebrow.astro` é a fonte única do rótulo acima dos títulos: traço de 36px, 12/13px, tracking 0.18em; `tone="light"` sobre fundos escuros. Substituiu as 9 versões escritas à mão.
- Destaque do título: `accent-orange` em fundo claro, `accent-orange-light` em fundo escuro. Parágrafo de abertura das seções em 16/17px. Raio de 1.5rem em painéis e fotos grandes, 1rem em cards. Todos os CTAs com cantos retos.

## Paleta enxuta, cotação e clientes (03/11/2026)

- Paleta: superfícies escuras sempre em navy 900, com gradiente só até o navy médio (`primary-dark`); o azul 800 saiu dos fundos (hero, rodapé, painéis). Verde: ação `#4d7f22` (hover `#3f6a1b`), verde da marca `#7ba249` só sobre fundo escuro, e a faixa de aplicações em dois tons (`brand-green-900` fundo, `800` cards). Um único cinza claro (`neutral-gray-100`), no lugar do `#f3f5fa` quase idêntico.
- Cotação: só o espaço do shortcode, sem card branco, e sem a nota de LGPD, a pedido do usuário. O formulário do plugin deve trazer o próprio aviso de privacidade.
- Tipografia: títulos com `text-wrap: balance` e textos com `pretty`, para não deixar palavra sozinha na última linha.
- Clientes: saíram os números (35+ anos e 24 meses); o card tem o carrossel e, no pé, uma linha de texto com o CTA. Depois, a seção ficou só com o cabeçalho e duas faixas de logos em carrossel contínuo, sem rótulos de setor nem CTA.

## Revisão de coerência do conteúdo (03/11/2026)

Análise geral da página atrás de repetições, incoerências e conflitos. Cada ajuste foi decidido com o usuário, ponto a ponto:

- **Marca:** os Diferenciais deixaram de se chamar "Diferenciais Safe Mine", o que fazia pioneirismo e fabricação nacional parecerem atributos da Safe Mine. Agora o eyebrow é "Safe Mine + SEIVE", o título é "Tecnologia SEIVE, feita no Brasil." (sem citar a Safe Mine, a pedido do usuário), e os itens de fabricante nomeiam a SEIVE. "Garantia estendida" passou a "Garantia de fábrica". "Gestão online", que já aparecia em três seções, deu lugar a "Suporte técnico" (canal direto com um técnico durante a garantia, catálogo p. 15).
- **Claims:** o fecho dos números ("elimina essa causa na origem") virou "atua nessa causa". Os 60% e 50% continuam sem linha de fonte, por decisão do usuário. "Previne acidentes e incêndios" ficou como estava.
- **Técnica:** "Automática, 24 h" virou "Automática, com a máquina em operação", porque a ligação é no pós-chave. "Contínua" saiu do hero, porque o sistema progressivo trabalha em ciclos. "Graxa" virou "lubrificante" até a SEIVE confirmar os lubrificantes aceitos.
- **Estrutura:** a seção `linhas` deixou de se chamar "Como o sistema funciona", nome que colidia com o "Como funciona" do processo; agora é "Componentes" / "O que compõe o SEIVE LUB". Inverter a ordem para processo → componentes foi descartado: `processo` é o bloco navy obrigatório da fase de apoio, e a fase de oferta vem antes. Os 4 botões dos cards deram lugar a um CTA único (`linhas-cta`) sob o grid, porque as partes não são vendidas separadas. A "Função" de cada card virou verbo, para não repetir o tag.
- **Repetições:**
  - "Descreva a máquina" ficou em Identificar, Aplicações e Cotação.
  - A linha sob o WhatsApp da Cotação não repete mais o título do Identificar.
  - O Identificar perdeu o microcopy, que duplicava o texto da lista, e o botão passou a usar `cta.card`, já que "Receber indicação e cotação" estava fora do vocabulário fixo.
  - O benefício "Baixo custo de manutenção" deixou de repetir "só faz a recarga".
- **Nomes:** o FAQ lista os 8 segmentos com os nomes dos cards de Aplicações. A faixa "Sua máquina não está aqui?" cita a siderurgia, que tem clientes mas não tem card. O texto dos Clientes deixou de dizer "grandes operações no Brasil e na América do Sul", porque a lista também tem fabricantes de máquinas. O título de Aplicações usa "lubrificação centralizada", a palavra-chave.
- **Ficaram como estavam:** a marca d'água do esquemático no processo, os 3 pontos do hero, o botão "Identifique sua máquina" e a resposta do FAQ sobre instalação.

Pendências para o cliente: quem faz a instalação (o FAQ fala de um técnico da equipe do cliente, e a garantia cobre "instalação"), se existe versão de 24 VCC, se o sistema aceita óleo ou só graxa, e a fonte dos números de 60% e 50%.
