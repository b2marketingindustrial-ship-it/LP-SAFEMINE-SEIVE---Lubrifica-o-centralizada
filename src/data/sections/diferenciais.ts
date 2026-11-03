/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Layout da seção "Por que a Falanga" da LP Falanga Peças (pedido do usuário, 03/11/2026),
 * nas cores SEIVE: bloco verde-escuro em largura total com a frase de autoridade (última
 * linha em amarelo), texto e CTA, foto à direita, e os 5 diferenciais em cards brancos
 * sobrepostos à base do bloco. São 5 exatos: o grid é `xl:grid-cols-5`.
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
  /** Cada item é uma linha do H2 (quebra forçada no desktop); a última sai em amarelo. */
  titleLines: ['Tecnologia SEIVE,', 'feita no Brasil.'],
  text: `A ${site.brandShort} leva a lubrificação centralizada à sua operação, considerando o equipamento, os pontos de lubrificação e as condições de trabalho.`,
  scene: {
    src: cenario,
    alt: 'Linha de lubrificação ligada à articulação de um cilindro em máquina pesada',
  },
  /** Título em uma linha (até ~19 caracteres) e descrição em duas (até ~48) nos cards do desktop. */
  reasons: [
    {
      icon: 'user',
      title: 'Análise da máquina',
      description: 'Avalia a máquina antes de indicar o sistema.',
    },
    {
      icon: 'badge-check',
      title: 'Pioneira no Brasil',
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
  scene: Photo
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
