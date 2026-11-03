/**
 * Dados da seção "Por que investir" (fase: prova). Seção própria desta LP, fora da
 * biblioteca B2 (01/11/2026, docs/BRIEFING.md).
 *
 * 6 benefícios do catálogo SEIVE LUB 2024 (p. 8, 12 e 14) e as duas estatísticas de
 * prevenção da p. 13. O catálogo traz também "95% das falhas", que contradiz os 60% da
 * mesma página: ficou de fora.
 */
import type { IconName } from '@data/icons'

export interface Benefit {
  id: string
  icon: IconName
  title: string
  description: string
}

export interface Stat {
  prefix: string
  value: string
  label: string
}

export const benefits = {
  eyebrow: 'Por que investir',
  title: 'Por que investir no SEIVE LUB',
  /** Trecho do título em verde. */
  titleHighlight: 'no SEIVE LUB',
  text: 'Lubrificação automática é manutenção preventiva: menos desgaste, menos paradas e mais segurança.',
  items: [
    {
      id: 'corretivas',
      icon: 'wrench',
      title: 'Menos corretivas',
      description: 'Menos troca de peças por desgaste.',
    },
    {
      id: 'disponibilidade',
      icon: 'trend-up',
      title: 'Mais disponibilidade',
      description: 'Menos paradas na produção.',
    },
    {
      id: 'consumo',
      icon: 'leaf',
      title: 'Menos consumo e resíduos',
      description: 'Sem excesso de graxa.',
    },
    {
      id: 'seguranca',
      icon: 'shield',
      title: 'Mais segurança',
      description: 'Previne acidentes e incêndios.',
    },
    {
      id: 'quantidade',
      icon: 'target',
      title: 'Quantidade exata',
      description: 'Inclusive nos pontos de difícil acesso.',
    },
    {
      id: 'custo',
      icon: 'tag',
      title: 'Baixo custo de manutenção',
      description: 'A equipe só faz a recarga.',
    },
  ],
  stats: {
    /** Título da faixa: deixa claro que os números são o problema, não o resultado. */
    title: 'O que a falta de lubrificação causa',
    items: [
      {
        prefix: 'mais de',
        value: '60%',
        label: 'das falhas de peças, engrenagens e rolamentos',
      },
      {
        prefix: 'mais de',
        value: '50%',
        label: 'dos incêndios em equipamentos, por atrito',
      },
    ],
    /** Fecho da faixa: o SEIVE LUB atua nessa causa. */
    answer: 'O SEIVE LUB elimina essa causa na origem.',
    source: 'Dados de fabricantes de componentes, citados no catálogo SEIVE LUB.',
  },
} as const satisfies {
  eyebrow: string
  title: string
  titleHighlight: string
  text: string
  items: readonly Benefit[]
  stats: { title: string; items: readonly [Stat, Stat]; answer: string; source: string }
}
