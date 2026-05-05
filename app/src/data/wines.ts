import { type WineTag } from './tags'

export type Wine = {
  id: string
  name: string
  varietal: string
  region: string
  description: string
  profileTags: WineTag[]
  whyTemplate: string
}

// Placeholder wine profiles — host should replace name/varietal/region/description
// with the actual bottles that will be available at the bar before the event.
export const WINES: Wine[] = [
  {
    id: 'Cabernet Sauvignon',
    name: 'Binary Blend',
    varietal: 'Cabernet Sauvignon',
    region: 'Napa Valley',
    description:
      'Deep garnet with layers of dark cherry, cedar, and graphite. Full-bodied, commanding tannins, and a long smoky finish that lingers like a promise.',
    profileTags: ['bold', 'tannic', 'intense', 'earthy', 'complex', 'aged'],
    whyTemplate:
      'Your profile radiates {TAGS} — a presence that calls for something commanding and unapologetic. This wine doesn\'t ask permission.',
  },
  {
    id: 'Protocol 7',
    name: 'Protocol 7',
    varietal: 'Pinot Noir',
    region: 'Burgundy',
    description:
      'Translucent ruby with silky red berry, forest floor, and delicate spice. Effortlessly elegant — a wine of restraint and precision.',
    profileTags: ['elegant', 'fruity', 'earthy', 'dry', 'light', 'floral'],
    whyTemplate:
      'You carry {TAGS} in equal measure — the rare kind of complexity that doesn\'t shout. This wine understands that subtlety is its own power.',
  },
  {
    id: 'Helix Reserve',
    name: 'Helix Reserve',
    varietal: 'Syrah',
    region: 'Northern Rhône',
    description:
      'Inky violet with cracked pepper, dark plum, and smoked meat. A wine with raw energy and an unmistakable backbone.',
    profileTags: ['bold', 'intense', 'tannic', 'earthy', 'spicy'],
    whyTemplate:
      'The signals you\'ve sent — {TAGS} — point to someone who doesn\'t settle for the predictable. This is the wine for people who leave a mark.',
  },
  {
    id: 'ChÂteau Nova Prime',
    name: 'ChÂteau Nova Prime',
    varietal: 'Malbec',
    region: 'Mendoza',
    description:
      'Velvety deep purple with ripe plum, violet, and a hint of cocoa. Generous, warm, and impossibly smooth.',
    profileTags: ['fruity', 'bold', 'sweet', 'rich', 'floral'],
    whyTemplate:
      'Your {TAGS} profile suggests someone who brings warmth to every room. This wine has the same effect — it makes everything feel better.',
  },
  {
    id: 'Neon Ferment',
    name: 'Neon Ferment',
    varietal: 'Sauvignon Blanc',
    region: 'Marlborough',
    description:
      'Brilliant pale gold with electrifying citrus, passionfruit, and fresh-cut grass. A white that\'s all velocity and clarity.',
    profileTags: ['crisp', 'acidic', 'light', 'mineral', 'lean', 'dry'],
    whyTemplate:
      'You signal {TAGS} — the kind of clarity that cuts right through noise. This wine moves the same way you do: fast, precise, unforgettable.',
  }
]
