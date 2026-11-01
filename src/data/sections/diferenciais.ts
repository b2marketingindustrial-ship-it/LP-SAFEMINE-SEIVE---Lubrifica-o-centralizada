/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * O layout é o da biblioteca B2: frase de autoridade e CTA ao lado de uma foto, e
 * os 5 diferenciais num painel navy. São 5 exatos: o painel é `lg:grid-cols-5`.
 *
 * `cenario.jpg`: articulação com a linha de lubrificação, do site da Safe Mine.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'
import { site } from '@data/site'

import cenario from '@assets/diferenciais/cenario.jpg'

export interface Reason {
  icon: IconName
  title: string
  description: string
}

export const why = {
  eyebrow: `Diferenciais ${site.brandShort}`,
  /** Cada item é uma linha do H2 (quebra forçada); a segunda sai em verde. 3–6 palavras no total. */
  titleLines: ['A quantidade certa,', 'no ponto certo.'],
  text: `A ${site.brandShort} conecta a tecnologia SEIVE à sua operação, considerando o equipamento, os pontos de lubrificação e as condições de trabalho.`,
  /** Linha de apoio sob o botão. */
  help: 'Descreva a máquina. Nós ajudamos na escolha da solução.',
  scene: {
    src: cenario,
    alt: 'Linha de lubrificação ligada à articulação de um cilindro em máquina pesada',
  },
  reasons: [
    {
      icon: 'user',
      title: 'Atendimento consultivo',
      description: 'Entende a máquina e a operação antes de indicar o sistema.',
    },
    {
      icon: 'sliders',
      title: 'Projeto personalizado',
      description: 'Adequado às características de cada equipamento.',
    },
    {
      icon: 'refresh',
      title: 'Processo automático',
      description: 'Lubrificação precisa, contínua e uniforme durante a operação.',
    },
    {
      icon: 'file-text',
      title: 'Gestão dos sistemas',
      description: 'Relatórios e consulta online dos sistemas instalados.',
    },
    {
      icon: 'gear',
      title: 'Tecnologia SEIVE',
      description: 'Sistema progressivo desenvolvido pela própria fabricante.',
    },
  ],
} as const satisfies {
  eyebrow: string
  titleLines: readonly string[]
  text: string
  help: string
  scene: Photo
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
