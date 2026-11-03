/**
 * Dados da seção "A solução" (fase: oferta). Seção própria desta LP, fora da biblioteca
 * B2 (02/11/2026, docs/BRIEFING.md): apresenta o SEIVE LUB logo depois do hero, antes
 * dos componentes.
 *
 * Fonte: texto do site da SEIVE e catálogo SEIVE LUB 2024 (p. 8, 9 e 11). O esquemático
 * é o da p. 10 do catálogo, com fundo transparente.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'

import trator from '@assets/solucao/trator.jpg'

export interface Purpose {
  icon: IconName
  title: string
  description: string
}

export interface Fact {
  label: string
  value: string
}

export const solution = {
  eyebrow: 'A solução',
  title: 'O que é o SEIVE LUB',
  /** Trecho do título em verde. */
  titleHighlight: 'SEIVE LUB',
  lead: 'Um sistema progressivo de lubrificação automática que leva o lubrificante certo a cada ponto da máquina, sem intervenção manual.',
  purposes: [
    { icon: 'wrench', title: 'Prevenir o desgaste', description: 'De componentes e articulações.' },
    {
      icon: 'clock',
      title: 'Manter a máquina operando',
      description: 'Menos paradas não programadas.',
    },
    {
      icon: 'sliders',
      title: 'Projeto sob medida',
      description: 'Para qualquer tipo de equipamento.',
    },
    {
      icon: 'file-text',
      title: 'Acompanhamento online',
      description: 'Relatórios de cada sistema.',
    },
  ],
  scheme: {
    src: trator,
    alt: 'Bomba SEIVE LUB em destaque ao lado de um trator agrícola azul, em pátio de terra cercado de árvores',
  },
  /** Ficha técnica curta, em selos sob o esquemático. */
  facts: [
    { label: 'Sistema', value: 'Progressivo' },
    { label: 'Operação', value: 'Automática' },
    { label: 'Alimentação', value: '12 VCC' },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  titleHighlight: string
  lead: string
  purposes: readonly [Purpose, Purpose, Purpose, Purpose]
  scheme: Photo
  facts: readonly [Fact, Fact, Fact]
}
