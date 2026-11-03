/**
 * Dados da seção "Clientes e números" (biblioteca B2, fase: prova).
 *
 * Logos da página 5 do catálogo SEIVE LUB 2024: são clientes da fabricante, não da
 * Safe Mine, e entraram com o aval da B2 em 01/11/2026 (docs/BRIEFING.md). Vieram do PDF
 * em baixa resolução (cerca de 75×22 px cada); troque pelos arquivos originais quando
 * chegarem. Nesta LP são 18 logos em carrossel, acima dos 4–8 da biblioteca.
 *
 * Números: catálogo p. 2 (35 anos do fundador), p. 4 (7 segmentos) e p. 15 (garantia).
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'

import vale from '@assets/clientes/vale.png'
import komatsu from '@assets/clientes/komatsu.png'
import votorantim from '@assets/clientes/votorantim.png'
import nexa from '@assets/clientes/nexa.png'
import epiroc from '@assets/clientes/epiroc.png'
import csn from '@assets/clientes/csn.png'
import angloAmerican from '@assets/clientes/anglo-american.png'
import anglogold from '@assets/clientes/anglogold-ashanti.png'
import raizen from '@assets/clientes/raizen.png'
import bunge from '@assets/clientes/bunge.png'
import saoMartinho from '@assets/clientes/sao-martinho.png'
import suzano from '@assets/clientes/suzano.png'
import klabin from '@assets/clientes/klabin.png'
import johnDeere from '@assets/clientes/john-deere.png'
import gerdau from '@assets/clientes/gerdau.png'
import usiminas from '@assets/clientes/usiminas.png'
import arcelor from '@assets/clientes/arcelormittal.png'
import vallourec from '@assets/clientes/vallourec.png'

export interface Metric {
  icon: IconName
  value: string
  label: string
}

const logo = (src: Photo['src'], name: string) => ({ src, alt: name })

export const clients = {
  eyebrow: 'Clientes SEIVE',
  title: 'Quem já usa a tecnologia SEIVE',
  /** Trecho do título em verde. */
  titleHighlight: 'tecnologia SEIVE',
  text: 'A SEIVE atende grandes operações de mineração, sucroenergia, florestal e siderurgia no Brasil e na América do Sul.',
  logos: [
    logo(vale, 'Vale'),
    logo(komatsu, 'Komatsu'),
    logo(votorantim, 'Votorantim'),
    logo(nexa, 'Nexa'),
    logo(epiroc, 'Epiroc'),
    logo(csn, 'CSN'),
    logo(angloAmerican, 'Anglo American'),
    logo(anglogold, 'AngloGold Ashanti'),
    logo(raizen, 'Raízen'),
    logo(bunge, 'Bunge'),
    logo(saoMartinho, 'São Martinho'),
    logo(suzano, 'Suzano'),
    logo(klabin, 'Klabin'),
    logo(johnDeere, 'John Deere'),
    logo(gerdau, 'Gerdau'),
    logo(usiminas, 'Usiminas'),
    logo(arcelor, 'ArcelorMittal'),
    logo(vallourec, 'Vallourec'),
  ],
  metrics: [
    { icon: 'user', value: '35+', label: 'anos de engenharia do fundador' },
    { icon: 'layers', value: '7', label: 'segmentos atendidos' },
    { icon: 'shield', value: '24 meses', label: 'de garantia nos distribuidores' },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  titleHighlight: string
  text: string
  logos: readonly Photo[]
  metrics: readonly [Metric, Metric, Metric]
}
