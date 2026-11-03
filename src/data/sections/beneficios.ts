/**
 * Dados da seção "Por que investir" (fase: oferta). Seção própria desta LP, fora da
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
  value: string
  label: string
}

export const benefits = {
  eyebrow: 'Por que investir',
  title: 'Por que investir no SEIVE LUB',
  /** Trecho do título em verde. */
  titleHighlight: 'no SEIVE LUB',
  text: 'A falta de lubrificação desgasta componentes, para a produção e aumenta o risco de incêndio. O SEIVE LUB atua como medida preventiva em cada ponto da máquina.',
  items: [
    {
      id: 'corretivas',
      icon: 'wrench',
      title: 'Menos corretivas',
      description: 'Menos manutenção corretiva, troca e estoque de peças por desgaste.',
    },
    {
      id: 'disponibilidade',
      icon: 'trend-up',
      title: 'Mais disponibilidade',
      description: 'Menos paradas programadas e não programadas na produção.',
    },
    {
      id: 'consumo',
      icon: 'leaf',
      title: 'Menos consumo e resíduos',
      description: 'Sem excesso de graxa: menor consumo de lubrificante e de resíduos.',
    },
    {
      id: 'seguranca',
      icon: 'shield',
      title: 'Mais segurança',
      description: 'Previne acidentes mecânicos e incêndios ligados à falta de lubrificação.',
    },
    {
      id: 'quantidade',
      icon: 'target',
      title: 'Quantidade exata',
      description: 'A dose certa em todos os pontos, inclusive os de difícil acesso.',
    },
    {
      id: 'custo',
      icon: 'tag',
      title: 'Baixo custo de manutenção',
      description: 'Sistema simples: a equipe só faz a recarga da bomba.',
    },
  ],
  stats: {
    items: [
      {
        value: '+60%',
        label:
          'das falhas de peças, engrenagens e rolamentos estão ligadas à falta de lubrificação',
      },
      {
        value: '+50%',
        label: 'dos incêndios em equipamentos vêm de atrito e fricção sem lubrificação',
      },
    ],
    source: 'Dados de fabricantes de componentes, citados no catálogo SEIVE LUB.',
  },
} as const satisfies {
  eyebrow: string
  title: string
  titleHighlight: string
  text: string
  items: readonly Benefit[]
  stats: { items: readonly [Stat, Stat]; source: string }
}
