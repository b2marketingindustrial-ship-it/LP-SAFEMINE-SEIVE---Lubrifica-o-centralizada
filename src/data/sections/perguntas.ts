/**
 * Dados da seção "Perguntas frequentes" (biblioteca B2, fase: autoridade).
 *
 * Respostas do catálogo SEIVE LUB 2024: dimensionamento e instalação (p. 11), manutenção
 * (p. 8 e 12), garantia (p. 15), software (texto do site) e segmentos (p. 4).
 */
export interface Question {
  question: string
  answer: string
}

export const faq = {
  eyebrow: 'Perguntas frequentes',
  title: 'Dúvidas antes de cotar',
  /** Trecho do título em verde. */
  titleHighlight: 'antes de cotar',
  text: 'O que mais perguntam sobre projeto, instalação e garantia do SEIVE LUB.',
  items: [
    {
      question: 'Como o sistema é dimensionado para a minha máquina?',
      answer:
        'O projeto parte do manual de lubrificação do equipamento, que define os pontos e a quantidade certa para cada um. Por isso cada instalação é personalizada.',
    },
    {
      question: 'O que preciso providenciar para a instalação?',
      answer:
        'Um técnico capacitado da sua equipe para fazer a ligação elétrica do sistema no pós-chave do equipamento, em 12 VCC.',
    },
    {
      question: 'Qual manutenção o sistema exige?',
      answer:
        'O processo é automático: a equipe de manutenção só faz a recarga da unidade de bombeamento. O sistema tem baixo custo de manutenção e reparos.',
    },
    {
      question: 'Qual é a garantia?',
      answer:
        '12 meses contra defeito de fabricação na bomba, conectores, mangueiras, demais componentes e instalação, e 24 meses nos distribuidores. Durante a garantia, há um canal direto com um técnico de suporte.',
    },
    {
      question: 'Como acompanho os sistemas instalados?',
      answer:
        'Pelo software de relatórios e manutenção online, que mostra a situação de cada sistema SEIVE LUB instalado.',
    },
    {
      question: 'Serve para o meu tipo de máquina?',
      answer:
        'O SEIVE LUB atende mineração, agronegócio, sucroenergia, florestal, algodão, portos e máquinas estacionárias. Descreva a sua máquina e a Safe Mine avalia o projeto.',
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  titleHighlight: string
  text: string
  items: readonly Question[]
}
