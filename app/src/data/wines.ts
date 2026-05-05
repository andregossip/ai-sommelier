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
    id: 'bold-red',
    name: 'Phantom Reserve',
    varietal: 'Cabernet Sauvignon',
    region: 'Napa Valley',
    description:
      'Deep garnet with layers of dark cherry, cedar, and graphite. Full-bodied, commanding tannins, and a long smoky finish that lingers like a promise.',
    profileTags: ['bold', 'tannic', 'intense', 'earthy', 'complex', 'aged'],
    whyTemplate:
      'Your profile radiates {TAGS} — a presence that calls for something commanding and unapologetic. This wine doesn\'t ask permission.',
  },
  {
    id: 'elegant-red',
    name: 'Velvet Meridian',
    varietal: 'Pinot Noir',
    region: 'Burgundy',
    description:
      'Translucent ruby with silky red berry, forest floor, and delicate spice. Effortlessly elegant — a wine of restraint and precision.',
    profileTags: ['elegant', 'fruity', 'earthy', 'dry', 'light', 'floral'],
    whyTemplate:
      'You carry {TAGS} in equal measure — the rare kind of complexity that doesn\'t shout. This wine understands that subtlety is its own power.',
  },
  {
    id: 'spicy-red',
    name: 'Iron Latitude',
    varietal: 'Syrah',
    region: 'Northern Rhône',
    description:
      'Inky violet with cracked pepper, dark plum, and smoked meat. A wine with raw energy and an unmistakable backbone.',
    profileTags: ['bold', 'intense', 'tannic', 'earthy', 'spicy'],
    whyTemplate:
      'The signals you\'ve sent — {TAGS} — point to someone who doesn\'t settle for the predictable. This is the wine for people who leave a mark.',
  },
  {
    id: 'fruity-red',
    name: 'Ember Dusk',
    varietal: 'Malbec',
    region: 'Mendoza',
    description:
      'Velvety deep purple with ripe plum, violet, and a hint of cocoa. Generous, warm, and impossibly smooth.',
    profileTags: ['fruity', 'bold', 'sweet', 'rich', 'floral'],
    whyTemplate:
      'Your {TAGS} profile suggests someone who brings warmth to every room. This wine has the same effect — it makes everything feel better.',
  },
  {
    id: 'crisp-white',
    name: 'Prism Coast',
    varietal: 'Sauvignon Blanc',
    region: 'Marlborough',
    description:
      'Brilliant pale gold with electrifying citrus, passionfruit, and fresh-cut grass. A white that\'s all velocity and clarity.',
    profileTags: ['crisp', 'acidic', 'light', 'mineral', 'lean', 'dry'],
    whyTemplate:
      'You signal {TAGS} — the kind of clarity that cuts right through noise. This wine moves the same way you do: fast, precise, unforgettable.',
  },
  {
    id: 'rich-white',
    name: 'Golden Parallax',
    varietal: 'Chardonnay',
    region: 'Burgundy',
    description:
      'Burnished gold with ripe peach, toasted hazelnut, and a creamy mineral finish. Confidence in a glass.',
    profileTags: ['rich', 'fruity', 'elegant', 'complex', 'dry'],
    whyTemplate:
      'The {TAGS} in your selection reveals a refined palate and a measured approach. This is a wine for people who know what they want.',
  },
  {
    id: 'aromatic-white',
    name: 'Glass Horizon',
    varietal: 'Riesling',
    region: 'Mosel',
    description:
      'Crystal clear with lime blossom, white peach, and a thrilling tension between sweetness and acidity. Deceptively complex.',
    profileTags: ['sweet', 'floral', 'light', 'fruity', 'acidic'],
    whyTemplate:
      'Your {TAGS} nature is layered — playful on the surface, depth underneath. This wine keeps revealing new dimensions the longer you sit with it.',
  },
  {
    id: 'mineral-white',
    name: 'Zero Point',
    varietal: 'Chablis',
    region: 'Chablis, France',
    description:
      'Pure silver with oyster shell, lemon zest, and a steely, almost electric finish. Bone dry and utterly focused.',
    profileTags: ['mineral', 'dry', 'lean', 'crisp', 'acidic', 'precise'],
    whyTemplate:
      'Your {TAGS} profile is rare — the kind of focus and precision that most people talk about but few achieve. So is this wine.',
  },
  {
    id: 'rosé',
    name: 'Signal Pink',
    varietal: 'Provence Rosé',
    region: 'Provence',
    description:
      'Pale salmon with strawberry, rose petal, and a whisper of white pepper. Effortlessly chic — the wine equivalent of not trying too hard.',
    profileTags: ['rosé', 'floral', 'fruity', 'light', 'crisp', 'elegant'],
    whyTemplate:
      'You carry {TAGS} as your natural frequency. This wine was essentially designed for someone exactly like you.',
  },
  {
    id: 'sparkling',
    name: 'Static Rise',
    varietal: 'Champagne',
    region: 'Champagne, France',
    description:
      'Fine persistent bubbles with toasted brioche, green apple, and chalky minerality. The sound of a room coming alive.',
    profileTags: ['sparkling', 'playful', 'light', 'crisp', 'fruity'],
    whyTemplate:
      'The {TAGS} in you is magnetic — people orbit around your energy. This wine belongs in a glass that\'s being raised.',
  },
  {
    id: 'orange',
    name: 'Amber Protocol',
    varietal: 'Orange Wine',
    region: 'Friuli, Italy',
    description:
      'Deep amber with dried apricot, walnut, and a fascinating tannic grip. Ancient winemaking technique, radical results.',
    profileTags: ['earthy', 'complex', 'tannic', 'dry', 'aged', 'mineral'],
    whyTemplate:
      'The signals you\'ve given — {TAGS} — suggest someone who digs deeper than the surface. This wine rewards exactly that kind of curiosity.',
  },
]
