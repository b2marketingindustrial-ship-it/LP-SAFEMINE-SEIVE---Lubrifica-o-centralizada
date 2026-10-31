/**
 * Dados da seção "Aplicações" (biblioteca B2, fase: prova).
 *
 * 4 cards-botão com foto 4:3. O card inteiro é o CTA.
 *
 * O layout é o da LP de compressores. As aplicações são as da página de Lubrificação
 * Centralizada do site da Safe Mine; portuário e industrial ficam na faixa de ajuda porque
 * não há foto desses setores no material.
 *
 * Fotos 1 a 3: as mesmas da LP de supressão SEIVE, com direito de uso a confirmar.
 * Foto 4: site da Safe Mine.
 */
import type { Photo } from '@data/types'

import app1 from '@assets/aplicacoes/aplicacao-1.png'
import app2 from '@assets/aplicacoes/aplicacao-2.png'
import app3 from '@assets/aplicacoes/aplicacao-3.png'
import app4 from '@assets/aplicacoes/aplicacao-4.png'

export interface Application {
  id: string
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
  /** Faixa abaixo dos cards, para quem não se vê nas 4 aplicações. */
  help: {
    title: 'Sua máquina não está aqui?',
    text: 'Portuária, industrial ou outra: descreva o equipamento e a Safe Mine ajuda na seleção.',
  },
  items: [
    {
      id: 'mineracao',
      label: 'Mineração',
      description: 'Para máquinas que operam em alta exigência e não podem parar.',
      photo: { src: app1, alt: 'Caminhão fora de estrada em operação de mineração' },
    },
    {
      id: 'agricola',
      label: 'Equipamentos agrícolas',
      description: 'Lubrificação contínua para preservar componentes durante a safra.',
      photo: { src: app2, alt: 'Colheitadeira em operação na lavoura' },
    },
    {
      id: 'florestal',
      label: 'Máquinas florestais',
      description: 'Menos intervenção manual em articulações e pontos de difícil acesso.',
      photo: { src: app3, alt: 'Máquina florestal em pátio de toras' },
    },
    {
      id: 'moveis-e-pesados',
      label: 'Equipamentos móveis e pesados',
      description: 'Projeto adaptado aos pontos de lubrificação de cada equipamento.',
      photo: { src: app4, alt: 'Pá carregadeira ao lado de correia transportadora' },
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  titleHighlight: string
  text: string
  cardCta: string
  help: { title: string; text: string }
  items: readonly [Application, Application, Application, Application]
}
