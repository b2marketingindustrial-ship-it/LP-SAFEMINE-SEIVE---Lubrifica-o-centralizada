/**
 * COPY DA ESTRUTURA FIXA.
 *
 * Só o que aparece em Header, Hero, Cotação e Footer — as quatro peças presentes
 * em toda LP do padrão. O copy das seções do meio vive em
 * `src/data/sections/<slug>.ts`, um arquivo por seção escolhida da biblioteca.
 *
 * Transcrito da ficha de execução (`docs/FICHA-LP.md`), campo `conteudo`. O conteúdo
 * que vem no template é o exemplo de referência, com imagens placeholder.
 */
import type { IconName } from './icons'
import type { Photo } from './types'
import { site } from './site'

import heroBg from '@assets/heroBg.png'

/* ------------------------------------------------------------------ tipos */

/** Linha da faixa "Encontre a linha" no pé do hero. Cada card é um CTA. */
export interface HeroLine {
  id: string
  icon: IconName
  title: string
  /** Dado de destaque sob o título; mais de um item entra separado por divisória. */
  spec: readonly string[]
  description: string
}

export interface TrustItem {
  icon: IconName
  label: string
}

/* ----------------------------------------------------------- vocabulário */

/** Vocabulário fixo de CTA (PROMPT-PADRAO-LP, item 8). Não variar. */
export const cta = {
  primary: 'Solicitar cotação',
  primaryShort: 'Cotação',
  secondary: 'Identifique sua máquina',
  card: 'Falar com especialista',
  whatsapp: 'Chamar no WhatsApp',
  /** Link do hero que rola até a seção de linhas. Não é CTA de atendimento. */
  findLine: 'Conhecer o sistema',
} as const

/* ------------------------------------------------------------------ header */

export const header = {
  /** Âncoras da barra (como na LP de compressores): rolam até as seções. */
  nav: [
    { id: 'sistema', label: 'Sistema SEIVE LUB', href: '#linhas' },
    { id: 'aplicacoes', label: 'Aplicações', href: '#aplicacoes' },
  ],
} as const

/* -------------------------------------------------------------------- hero */

export const hero = {
  eyebrow: 'Lubrificação automática para operações exigentes',
  title: `${site.product} para ${site.context}`,
  /** Trecho do H1 em verde. */
  highlight: 'máquinas pesadas',
  text: 'Sistema progressivo que fornece lubrificante de forma precisa, contínua e uniforme. A Safe Mine ajuda você a definir a solução para a sua máquina.',
  banner: {
    src: heroBg,
    alt: 'Bomba de lubrificação centralizada SEIVE LUB instalada em máquina pesada',
    /** Larguras geradas: as mesmas no <Picture> do Hero e no preload do Layout. */
    widths: [480, 768, 1020],
    sizes: '(min-width: 1024px) 46vw, 100vw',
  },
  help: {
    title: 'Não sabe quantos pontos lubrificar?',
    text: 'Descreva a máquina. Nós ajudamos na seleção.',
  },
  lines: {
    title: 'Escolha a prioridade da sua operação',
    note: 'Os resultados variam conforme o equipamento, o projeto e as condições de operação.',
    items: [
      {
        id: 'disponibilidade',
        icon: 'trend-up',
        title: 'Disponibilidade',
        spec: ['Menos paradas'],
        description: 'Reduz paradas ligadas ao desgaste e à falta de lubrificação.',
      },
      {
        id: 'precisao',
        icon: 'target',
        title: 'Precisão',
        spec: ['Quantidade certa'],
        description: 'Distribuição controlada do lubrificante nos pontos definidos.',
      },
      {
        id: 'desperdicio',
        icon: 'droplet',
        title: 'Menor desperdício',
        spec: ['Menos consumo'],
        description: 'Reduz o excesso de lubrificação e o consumo desnecessário.',
      },
      {
        id: 'seguranca',
        icon: 'shield',
        title: 'Mais segurança',
        spec: ['Menos intervenção manual'],
        description: 'Menor necessidade de acesso a pontos difíceis da máquina.',
      },
    ],
  },
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  highlight: string
  banner: Photo & { widths: readonly number[]; sizes: string }
  help: { title: string; text: string }
  lines: {
    title: string
    note: string
    items: readonly [HeroLine, HeroLine, HeroLine, HeroLine]
  }
}

/* ----------------------------------------------------------------- cotação */

export const quote = {
  eyebrow: 'Solicite sua cotação',
  title: 'Fale com quem entende de lubrificação centralizada.',
  /** Trecho do título em verde, na segunda linha (layout do mockup de 29/10). */
  titleHighlight: 'lubrificação centralizada.',
  text: 'Descreva a máquina e a equipe indica a solução SEIVE LUB adequada à sua operação. Preencha o formulário ou fale direto conosco pelo WhatsApp.',
  /** Linha sob o botão de WhatsApp. */
  help: 'Não sabe quantos pontos lubrificar? Basta descrever a máquina.',
  trust: [
    { icon: 'users', label: 'Atendimento consultivo' },
    { icon: 'clock', label: 'Resposta rápida' },
    { icon: 'file', label: 'Cotação pela descrição da máquina' },
  ],
  /** Nota de LGPD exibida abaixo do formulário. */
  lgpd: 'Seus dados serão usados apenas para responder à sua solicitação de cotação, conforme a LGPD.',
} as const satisfies {
  eyebrow: string
  title: string
  titleHighlight: string
  text: string
  help: string
  trust: readonly [TrustItem, TrustItem, TrustItem]
  lgpd: string
}

/* ------------------------------------------------------------------ footer */

export const footer = {
  credit: { label: 'B2 Marketing Industrial', url: 'https://b2marketingindustrial.com.br' },
} as const
