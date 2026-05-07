import { type WineTag } from './tags'
import binaryBlendImg from '../assets/Binary-Blend.png'
import protocol7Img from '../assets/Protocol-7.png'
import helixReserveImg from '../assets/Helix-Reserve.png'
import chateauNovaPrimeImg from '../assets/ChÂteau-Nova-Prime.png'
import neonFermentImg from '../assets/Neon-Ferment.png'

export type Wine = {
  id: string
  name: string
  varietal: string
  region: string
  description: string
  profileTags: WineTag[]
  whyTemplate: string
  // Import the image at the top of this file and assign here:
  // import binaryBlendImg from '../assets/binary-blend.png'
  // then: image: binaryBlendImg
  image?: string
}

// Placeholder wine profiles — host should replace name/varietal/region/description
// with the actual bottles that will be available at the bar before the event.
export const WINES: Wine[] = [
    {
    id: 'Neon Ferment',
    name: 'Neon Ferment',
    varietal: 'Merlot',
    region: 'France',
    description:
      'This is the taste of a back-alley rave in Neo-Tokyo Sector 9. A bootleg Vin Naturel that was never meant to be authorized, NEON FERMENT is a pulsing, chaotic light-show for your senses. It boots up with an illegal mod of pixelated blackberries and glitching raspberries, then flash-renders a phantom signal through the noise: a stunning, holographic projection of jasmine flowers floating over a baseline of herbal static. Drink it before the authorities shut it down.',
    profileTags: ['crisp', 'acidic', 'light', 'mineral', 'lean', 'dry'],
    whyTemplate:
      'You signal {TAGS} — the kind of clarity that cuts right through noise. This wine moves the same way you do: fast, precise, unforgettable.',
    image: neonFermentImg,
  },
  {
    id: 'Cabernet Sauvignon',
    name: 'Binary Blend',
    varietal: 'Grüner veltliner',
    region: 'Austria',
    description:
      'What you\'re looking at is the raw data stream of flavor, hash verified for purity. When you drink it, your palate becomes the processor, decoding the liquid light. The stream begins with a cascade of 1s and 0s that render as juicy yellow pear and bright pineapple, structured by a crisp grapefruit framework. That colorful glitch you see isn\'t an error, it\'s a spicy spark of white pepper that makes the whole system buzz. The ghost in the machine? A final, fragrant echo of mimosa flowers.',
    profileTags: ['bold', 'tannic', 'intense', 'earthy', 'complex', 'aged'],
    whyTemplate:
      'Your profile radiates {TAGS} — a presence that calls for something commanding and unapologetic. This wine doesn\'t ask permission.',
    image: binaryBlendImg,
  },
    {
    id: 'Helix Reserve',
    name: 'Helix Reserve',
    varietal: 'Albariño',
    region: 'Rías Baixas',
    description:
      'You see those golden, branching threads on the bottle? That’s not just art, it’s a map of the flavor inside. In the labs of 2112, we didn’t just refine the grape; we programmed it to grow these luminous, delicious pathways. With every sip, the network activates on your palate: Golden tendrils of juicy pear and pineapple unfurl, weaving through sharper, energetic branches of crisp green apple and lime. The entire beautiful system is connected by an aromatic, fragrant current of fresh herbs. It’s a living, branching network of flavor, designed to be as elegant as it looks.',
    profileTags: ['bold', 'intense', 'tannic', 'earthy', 'spicy'],
    whyTemplate:
      'The signals you\'ve sent — {TAGS} — point to someone who doesn\'t settle for the predictable. This is the wine for people who leave a mark.',
    image: helixReserveImg,
  },
    {
    id: 'ChÂteau Nova Prime',
    name: 'ChÂteau Nova Prime',
    varietal: 'Malbec',
    region: 'Mendoza',
    description:
      'Behold, a wine from the first terraformed vineyards of Mars, grown under the shimmering glow of two moons. You can taste the starlight in every sip. The iridescent light you see on the label\'s vineyard rows translates directly to the palate: it begins with a deep, cosmic flavor of dark cherry and wild raspberry. Then, a fragrant, holographic note of violet materializes, a signature of the Martian soil. The finish is the true marvel: a bright, stunning pulse of blood orange, the signature citrus of the Red Planet. It’s elegant, otherworldly, and unforgettable.',
    profileTags: ['fruity', 'bold', 'sweet', 'rich', 'floral'],
    whyTemplate:
      'Your {TAGS} profile suggests someone who brings warmth to every room. This wine has the same effect — it makes everything feel better.',
    image: chateauNovaPrimeImg,
  },
  {
    id: 'Protocol 7',
    name: 'Protocol 7',
    varietal: 'Barbera, dolcetto and nebbiolo',
    region: 'Langhe',
    description:
      'From the Earth Central Biolab comes wine designed with algorithmic perfection. With every sip, its core flavor program executes a flawless sequence across your palate. It begins by booting the primary \'Red Fruit\' subroutines, transmitting a high-fidelity stream of raspberry, strawberry, and cherry. A secondary \'Aromatic\' data-layer then gently loads, rendering a delicate, fragrant note of lavender. Finally, a complex \'Spice\' algorithm runs in the background, leaving a sophisticated, spicy trace. It\'s the most delicious program ever written.',
    profileTags: ['elegant', 'fruity', 'earthy', 'dry', 'light', 'floral'],
    whyTemplate:
      'You carry {TAGS} in equal measure — the rare kind of complexity that doesn\'t shout. This wine understands that subtlety is its own power.',
    image: protocol7Img,
  }
]
