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

/** Ponto da caixa de ícones do hero: `line1` e `line2` ficam sempre em duas linhas. */
export interface HeroPoint {
  icon: IconName
  line1: string
  line2: string
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
} as const

/* ------------------------------------------------------------------ header */

export const header = {
  /** Tagline central da barra (estrutura fixa 4.1.1): o produto principal. */
  tagline: 'Lubrificação centralizada',
} as const

/* -------------------------------------------------------------------- hero */

export const hero = {
  eyebrow: 'Sistema automático para operações exigentes',
  title: `${site.product} para ${site.context}`,
  /** Quebra de linha do H1 no desktop largo: o título vai em duas linhas. */
  titleBreakAfter: 'Lubrificação centralizada',
  /** Trecho do H1 em verde. */
  highlight: 'máquinas pesadas',
  text: 'Lubrificante levado a cada ponto da máquina de forma precisa,\nautomática e uniforme. A Safe Mine ajuda você a definir a solução para a sua máquina.',
  banner: {
    src: heroBg,
    alt: 'Bomba de lubrificação centralizada SEIVE LUB instalada em máquina pesada',
    /** Larguras geradas: as mesmas no <Picture> do Hero e no preload do Layout. */
    widths: [640, 1024, 1536, 1981],
    sizes: '(min-width: 1024px) 1700px, 100vw',
  },
  points: [
    { icon: 'trend-up', line1: 'Menos paradas', line2: 'por desgaste' },
    { icon: 'target', line1: 'Quantidade certa', line2: 'em cada ponto' },
    { icon: 'droplet', line1: 'Menos consumo', line2: 'de lubrificante' },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  highlight: string
  titleBreakAfter: string
  banner: Photo & { widths: readonly number[]; sizes: string }
  points: readonly [HeroPoint, HeroPoint, HeroPoint]
}

/* ----------------------------------------------------------------- cotação */

export const quote = {
  eyebrow: 'Solicite sua cotação',
  title: 'Fale com quem entende de lubrificação centralizada.',
  /** Trecho do título em verde, na segunda linha (layout do mockup de 29/10). */
  titleHighlight: 'lubrificação centralizada.',
  text: 'Descreva a máquina e a equipe indica a solução SEIVE LUB adequada à sua operação. Preencha o formulário ou fale direto conosco pelo WhatsApp.',
  /** Linha sob o botão de WhatsApp. */
  help: 'Atendemos pelo formulário ou pelo WhatsApp, como preferir.',
  trust: [
    { icon: 'users', label: 'Atendimento consultivo' },
    { icon: 'shield', label: 'Garantia 12 meses' },
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
