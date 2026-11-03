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

import esquema from '@assets/solucao/esquema.png'

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
  lead: 'Um sistema progressivo de lubrificação automática: uma central de bombeamento leva a graxa, na quantidade e no intervalo certos, a todos os pontos da máquina, sem intervenção manual.',
  text: 'Desenvolvido pela SEIVE para máquinas que operam em ciclos longos e exigentes, o sistema substitui a lubrificação manual por um processo contínuo e previsível.',
  /** Para que serve: 4 finalidades, em grade 2×2. */
  purposes: [
    {
      icon: 'wrench',
      title: 'Prevenir o desgaste',
      description: 'Medida preventiva contra o desgaste de componentes mecânicos e articulações.',
    },
    {
      icon: 'clock',
      title: 'Manter a máquina operando',
      description: 'Menos paradas não programadas e menos custo com manutenção corretiva.',
    },
    {
      icon: 'sliders',
      title: 'Projeto sob medida',
      description: 'Padroniza a instalação e adapta o projeto a qualquer tipo de equipamento.',
    },
    {
      icon: 'file-text',
      title: 'Acompanhamento online',
      description: 'Software de relatórios mostra a situação de cada sistema instalado.',
    },
  ],
  scheme: {
    src: esquema,
    alt: 'Esquemático de uma instalação SEIVE LUB: bomba, filtros, distribuidores e linhas até os pontos da máquina',
  },
  caption:
    'Instalação típica: bomba de 4 litros, filtros de graxa e distribuidores de 8 a 14 saídas levando o lubrificante a cada ponto.',
  /** Ficha técnica curta sob o esquemático. */
  facts: [
    { label: 'Sistema', value: 'Progressivo' },
    { label: 'Operação', value: 'Automática, 24 h' },
    { label: 'Alimentação', value: '12 VCC' },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  titleHighlight: string
  lead: string
  text: string
  purposes: readonly [Purpose, Purpose, Purpose, Purpose]
  scheme: Photo
  caption: string
  facts: readonly [Fact, Fact, Fact]
}
