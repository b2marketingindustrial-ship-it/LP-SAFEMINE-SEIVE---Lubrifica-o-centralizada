/**
 * Dados da seção "Linhas de produto" (biblioteca B2, fase: oferta).
 *
 * 3 ou 4 cards, exatamente um deles escuro — normalmente o card de marcas, que
 * fecha o grid com peso visual. Cada linha tem 3 features de 2–4 palavras.
 *
 * Aqui os cards são as partes do sistema SEIVE LUB, que é um produto só, sob projeto. O
 * layout é o da LP de compressores: os 4 cards são claros, e `dark` fica só para o contrato
 * da biblioteca. `features` é posicional: função, atuação, resultado.
 *
 * Fotos do site da Safe Mine e da SEIVE: bomba e painel recortados do render do SEIVE LUB.
 */
import type { Photo } from '@data/types'

import linha1 from '@assets/linhas/linha-1.png'
import linha2 from '@assets/linhas/linha-2.png'
import linha3 from '@assets/linhas/linha-3.png'
import marcasPhoto from '@assets/linhas/marcas.png'

export interface ProductLine {
  id: string
  tag: string
  title: string
  description: string
  photo: Photo
  features: readonly [string, string, string]
  /** Exatamente um card escuro por grid. Informe sempre (true/false). */
  dark: boolean
}

export const productLines = {
  eyebrow: 'Como o sistema funciona',
  title: 'Um sistema progressivo para cada ponto da máquina',
  /** Trecho do título em verde, na segunda linha. */
  titleHighlight: 'cada ponto da máquina',
  text: 'O SEIVE LUB leva o lubrificante do reservatório até os pontos definidos, de forma automática, e permite acompanhar os sistemas instalados.',
  /** Rótulos das duas primeiras features de cada card. */
  specLabels: ['Função', 'Atuação'],
  help: {
    title: 'Não sabe qual configuração escolher?',
    text: 'Descreva sua máquina. A Safe Mine ajuda na seleção.',
    cta: 'Receber orientação',
  },
  note: 'A configuração varia conforme o equipamento e os pontos de lubrificação.',
  items: [
    {
      id: 'bomba',
      tag: 'Alimentação',
      title: 'Bomba e reservatório',
      description: 'Armazenam o lubrificante e alimentam o circuito de forma automática.',
      photo: { src: linha1, alt: 'Bomba SEIVE LUB com reservatório transparente' },
      features: ['Alimentação', 'Contínua', 'Processo automático'],
      dark: false,
    },
    {
      id: 'distribuidores',
      tag: 'Distribuição',
      title: 'Distribuidores progressivos',
      description: 'Dividem o lubrificante de maneira controlada entre os pontos definidos.',
      photo: { src: linha2, alt: 'Bloco distribuidor SEIVE LUB instalado na máquina' },
      features: ['Dosagem', 'Precisa', 'Quantidade certa por ponto'],
      dark: false,
    },
    {
      id: 'linhas-de-lubrificacao',
      tag: 'Condução',
      title: 'Linhas até os pontos',
      description: 'Levam o lubrificante às articulações e aos componentes do equipamento.',
      photo: { src: linha3, alt: 'Mangueiras do sistema de lubrificação em máquina pesada' },
      features: ['Condução', 'Uniforme', 'Projeto por equipamento'],
      dark: false,
    },
    {
      id: 'gestao',
      tag: 'Gestão',
      title: 'Software e relatórios',
      description: 'Permitem consultar informações e relatórios dos sistemas instalados.',
      photo: { src: marcasPhoto, alt: 'Painel eletrônico da bomba SEIVE LUB' },
      features: ['Consulta', 'Online', 'Mais controle da manutenção'],
      dark: true,
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  titleHighlight: string
  text: string
  specLabels: readonly [string, string]
  help: { title: string; text: string; cta: string }
  note: string
  items:
    | readonly [ProductLine, ProductLine, ProductLine]
    | readonly [ProductLine, ProductLine, ProductLine, ProductLine]
}
