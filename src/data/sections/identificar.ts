/**
 * Dados da seção "Painel de apoio" (biblioteca B2, fase: apoio).
 *
 * Painel navy com 6 dados que o visitante pode enviar sem ter a especificação em
 * mãos. São 6 exatos: a faixa é um grid de 2/3/6 colunas com divisórias, e
 * qualquer outro número deixa célula órfã.
 *
 * O layout é o da biblioteca B2: bloco navy com o CTA à esquerda e, à direita, os
 * 6 dados em dois grupos.
 *
 * Os 3 primeiros dados bastam para começar. Pontos, lubrificante e regime entram como
 * opcionais: quem não os sabe pede cotação descrevendo a máquina.
 */
import type { IconName } from '@data/icons'

export interface SupportItem {
  icon: IconName
  label: string
  hint: string
}

export const supportPanel = {
  eyebrow: 'Dados para cotação',
  title: 'Não sabe quantos pontos lubrificar?',
  text: 'Descreva a máquina. A Safe Mine avalia o equipamento, os pontos de lubrificação e as condições de operação para indicar a solução.',
  microcopy: 'Você pode pedir cotação sem os dados técnicos.',
  /** Rótulo do botão do bloco navy. */
  ctaLabel: 'Receber indicação e cotação',
  /** Lado claro: os 3 primeiros itens são o essencial; os demais, "se souber". */
  list: {
    title: 'O que ajuda na sua cotação',
    text: 'Comece pela máquina. Os dados técnicos podem ficar para depois.',
    optionalLabel: 'Se souber, envie também',
    optionalFrom: 3,
  },
  items: [
    { icon: 'file', label: 'Equipamento', hint: 'Informe o tipo, a marca e o modelo da máquina.' },
    { icon: 'pin', label: 'Cidade/UF', hint: 'Local da operação' },
    { icon: 'truck', label: 'Quantidade', hint: 'Máquinas que receberão o sistema' },
    { icon: 'target', label: 'Pontos', hint: 'de lubrificação' },
    { icon: 'droplet', label: 'Lubrificante', hint: 'o que usa hoje' },
    { icon: 'clock', label: 'Regime', hint: 'horas de operação' },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  microcopy: string
  ctaLabel: string
  list: { title: string; text: string; optionalLabel: string; optionalFrom: number }
  items: readonly [SupportItem, SupportItem, SupportItem, SupportItem, SupportItem, SupportItem]
}
