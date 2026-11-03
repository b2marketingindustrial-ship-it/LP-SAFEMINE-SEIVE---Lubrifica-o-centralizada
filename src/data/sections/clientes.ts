/**
 * Dados da seção "Clientes e números" (biblioteca B2, fase: prova).
 *
 * Logos da página 5 do catálogo SEIVE LUB 2024: são clientes da fabricante, não da
 * Safe Mine, e entraram com o aval da B2 em 01/11/2026 (docs/BRIEFING.md). Vieram do PDF
 * em baixa resolução (cerca de 75×22 px cada); troque pelos arquivos originais quando
 * chegarem. Nesta LP são 17 logos agrupados por setor, como no catálogo, acima dos 4–8 da
 * biblioteca, e sem os números (saíram a pedido do usuário em 03/11/2026). O logo da
 * AngloGold Ashanti saiu por ficar ilegível na resolução do PDF.
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

export type Sector = 'mineracao' | 'sucroenergia' | 'florestal' | 'siderurgia'

export interface ClientLogo extends Photo {
  sector: Sector
}

const logo = (src: Photo['src'], alt: string, sector: Sector): ClientLogo => ({ src, alt, sector })

export const clients = {
  eyebrow: 'Clientes SEIVE',
  title: 'Quem já usa a tecnologia SEIVE',
  /** Trecho do título em verde. */
  titleHighlight: 'tecnologia SEIVE',
  text: 'Grandes operações no Brasil e na América do Sul já confiam na tecnologia SEIVE.',
  /** Linha acima do CTA. */
  ctaText: 'Leve a mesma tecnologia para a sua operação.',
  /** Setores na ordem da página 5 do catálogo; cada um vira uma linha de logos. */
  sectors: [
    { id: 'mineracao', label: 'Mineração', icon: 'mountain' },
    { id: 'sucroenergia', label: 'Sucroenergia', icon: 'factory' },
    { id: 'florestal', label: 'Florestal', icon: 'leaf' },
    { id: 'siderurgia', label: 'Siderurgia', icon: 'flame' },
  ],
  logos: [
    logo(vale, 'Vale', 'mineracao'),
    logo(komatsu, 'Komatsu', 'mineracao'),
    logo(votorantim, 'Votorantim', 'mineracao'),
    logo(nexa, 'Nexa', 'mineracao'),
    logo(epiroc, 'Epiroc', 'mineracao'),
    logo(csn, 'CSN', 'mineracao'),
    logo(angloAmerican, 'Anglo American', 'mineracao'),
    logo(raizen, 'Raízen', 'sucroenergia'),
    logo(bunge, 'Bunge', 'sucroenergia'),
    logo(saoMartinho, 'São Martinho', 'sucroenergia'),
    logo(suzano, 'Suzano', 'florestal'),
    logo(klabin, 'Klabin', 'florestal'),
    logo(johnDeere, 'John Deere', 'florestal'),
    logo(gerdau, 'Gerdau', 'siderurgia'),
    logo(usiminas, 'Usiminas', 'siderurgia'),
    logo(arcelor, 'ArcelorMittal', 'siderurgia'),
    logo(vallourec, 'Vallourec', 'siderurgia'),
  ],
} as const satisfies {
  eyebrow: string
  title: string
  titleHighlight: string
  text: string
  ctaText: string
  sectors: readonly { id: Sector; label: string; icon: IconName }[]
  logos: readonly ClientLogo[]
}
