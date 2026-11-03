/**
 * Dados da seção "Como funciona" (biblioteca B2, fase: apoio).
 *
 * Variante clara nesta LP: o bloco navy da fase de apoio continua sendo o "identificar".
 * Sem prazos (o cliente não assume nenhum): as etapas descrevem o caminho do lubrificante,
 * do dimensionamento à aplicação. Fonte: catálogo SEIVE LUB 2024, p. 8, 9 e 11.
 */
import type { IconName } from '@data/icons'

export interface Step {
  icon: IconName
  title: string
  description: string
}

export const processSteps = {
  eyebrow: 'Como funciona',
  title: 'Como o SEIVE LUB funciona',
  /** Trecho do título em verde. */
  titleHighlight: 'funciona',
  text: 'Uma central de bombeamento envia o lubrificante, de forma automática, até cada ponto definido no projeto da máquina.',
  microcopy: 'Sua equipe só faz a recarga da bomba.',
  items: [
    {
      icon: 'clipboard-check',
      title: 'Dimensionamento',
      description: 'Pelo manual da máquina, define os pontos e a quantidade de cada um.',
    },
    {
      icon: 'droplet',
      title: 'Bombeamento',
      description: 'A central fornece o lubrificante na proporção e no intervalo corretos.',
    },
    {
      icon: 'layers',
      title: 'Distribuição',
      description: 'A linha de alimentação leva o lubrificante aos distribuidores progressivos.',
    },
    {
      icon: 'target',
      title: 'Aplicação',
      description: 'Cada ponto recebe a dose certa, sem excesso nem escassez, e fica protegido.',
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  titleHighlight: string
  text: string
  microcopy: string
  items: readonly Step[]
}
