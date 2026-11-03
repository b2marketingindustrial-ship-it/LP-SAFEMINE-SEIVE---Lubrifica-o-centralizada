/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * O layout é o da biblioteca B2: frase de autoridade e CTA ao lado de uma foto, e
 * os 5 diferenciais num painel navy. São 5 exatos: o painel é `lg:grid-cols-5`.
 *
 * `cenario.jpg`: articulação com a linha de lubrificação, do site da Safe Mine.
 * Itens 2 a 4 do catálogo SEIVE LUB 2024 (p. 2, 3 e 15), com o aval da B2 em 01/11/2026.
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
  eyebrow: `Por que a ${site.brandShort}`,
  /** Cada item é uma linha do H2 (quebra forçada); a segunda sai em verde. 3–6 palavras no total. */
  titleLines: ['Tecnologia SEIVE,', 'feita no Brasil.'],
  text: `A ${site.brandShort} leva a lubrificação centralizada à sua operação, considerando o equipamento, os pontos de lubrificação e as condições de trabalho.`,
  /** Linha de apoio sob o botão. */
  help: 'Da escolha à instalação, a SEIVE acompanha o projeto.',
  scene: {
    src: cenario,
    alt: 'Linha de lubrificação ligada à articulação de um cilindro em máquina pesada',
  },
  /** Descrições curtas (até ~48 caracteres): duas linhas em cada coluna do painel no desktop. */
  reasons: [
    {
      icon: 'user',
      title: 'Atendimento consultivo',
      description: 'Avalia a máquina antes de indicar o sistema.',
    },
    {
      icon: 'badge-check',
      title: 'SEIVE, pioneira no Brasil',
      description: 'Primeira brasileira em lubrificação progressiva.',
    },
    {
      icon: 'factory',
      title: 'Fabricação nacional',
      description: 'Feito no Brasil, com ISO 9001:2015 e patente.',
    },
    {
      icon: 'shield',
      title: 'Garantia de fábrica',
      description: '12 meses no sistema e 24 nos distribuidores.',
    },
    {
      icon: 'wrench',
      title: 'Suporte técnico',
      description: 'Canal direto com um técnico durante a garantia.',
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
