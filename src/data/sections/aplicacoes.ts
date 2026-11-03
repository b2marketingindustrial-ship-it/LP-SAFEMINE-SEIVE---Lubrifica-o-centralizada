/**
 * Dados da seção "Aplicações" (biblioteca B2, fase: prova).
 *
 * Nesta LP, 8 cards-botão num carrossel (01/11/2026, docs/BRIEFING.md), acima dos 4 da
 * biblioteca. O card inteiro é o CTA. Os segmentos são os do catálogo SEIVE LUB 2024 (p. 4).
 *
 * Fotos 1 a 3: as mesmas da LP de supressão SEIVE, com direito de uso a confirmar.
 * Foto 4: site da Safe Mine.
 * Fotos 5 a 8: catálogo SEIVE LUB 2024, p. 4, em baixa resolução (210 a 348 px de largura);
 * troque pelos originais quando chegarem.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'

import app1 from '@assets/aplicacoes/aplicacao-1.png'
import app2 from '@assets/aplicacoes/aplicacao-2.png'
import app3 from '@assets/aplicacoes/aplicacao-3.png'
import app4 from '@assets/aplicacoes/aplicacao-4.png'
import app5 from '@assets/aplicacoes/aplicacao-5.jpg'
import app6 from '@assets/aplicacoes/aplicacao-6.jpg'
import app7 from '@assets/aplicacoes/aplicacao-7.jpg'
import app8 from '@assets/aplicacoes/aplicacao-8.jpg'

export interface Application {
  id: string
  icon: IconName
  label: string
  description: string
  photo: Photo
}

export const applications = {
  eyebrow: 'Aplicações',
  title: 'Lubrificação automática para cada tipo de operação',
  /** Trecho do título em verde, na segunda linha. */
  titleHighlight: 'para cada tipo de operação',
  text: 'O projeto se adapta aos pontos de lubrificação e às características de cada equipamento. Escolha a aplicação e fale com a equipe.',
  /** Chamada no pé de cada card (o card inteiro é o botão). */
  cardCta: 'Cotar para esta aplicação',
  /** Faixa abaixo dos cards, para quem não se vê nas aplicações. */
  help: {
    title: 'Sua máquina não está aqui?',
    text: 'Industrial ou outra: descreva o equipamento e a Safe Mine ajuda na seleção.',
  },
  items: [
    {
      id: 'mineracao',
      icon: 'mountain',
      label: 'Mineração',
      description: 'Para máquinas que operam em alta exigência e não podem parar.',
      photo: { src: app1, alt: 'Caminhão fora de estrada em operação de mineração' },
    },
    {
      id: 'agricola',
      icon: 'leaf',
      label: 'Equipamentos agrícolas',
      description: 'Lubrificação contínua para preservar componentes durante a safra.',
      photo: { src: app2, alt: 'Colheitadeira em operação na lavoura' },
    },
    {
      id: 'sucroenergetico',
      icon: 'factory',
      label: 'Sucroenergético',
      description: 'Para colhedoras e equipamentos que operam em turnos longos na safra.',
      photo: { src: app5, alt: 'Colhedora de cana em operação no canavial' },
    },
    {
      id: 'algodao',
      icon: 'layers',
      label: 'Algodão',
      description: 'Pontos protegidos da contaminação por pó e resíduos da colheita.',
      photo: { src: app6, alt: 'Colhedora de algodão em operação na lavoura' },
    },
    {
      id: 'florestal',
      icon: 'engine',
      label: 'Máquinas florestais',
      description: 'Menos intervenção manual em articulações e pontos de difícil acesso.',
      photo: { src: app3, alt: 'Máquina florestal em pátio de toras' },
    },
    {
      id: 'moveis-e-pesados',
      icon: 'truck',
      label: 'Equipamentos móveis e pesados',
      description: 'Projeto adaptado aos pontos de lubrificação de cada equipamento.',
      photo: { src: app4, alt: 'Pá carregadeira ao lado de correia transportadora' },
    },
    {
      id: 'portuario',
      icon: 'box',
      label: 'Portuário',
      description: 'Para reach stackers e equipamentos de movimentação de contêineres.',
      photo: { src: app8, alt: 'Reach stacker movimentando contêiner em terminal portuário' },
    },
    {
      id: 'estacionarios',
      icon: 'cylinder',
      label: 'Estacionários',
      description: 'Para equipamentos fixos de pátio, com pontos de difícil acesso.',
      photo: { src: app7, alt: 'Empilhadeira de pátio sobre pilha de minério' },
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  titleHighlight: string
  text: string
  cardCta: string
  help: { title: string; text: string }
  items: readonly Application[]
}
