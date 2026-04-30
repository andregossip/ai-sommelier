export type Option = {
  label: string
  tags: string[]
}

export type Question = {
  id: string
  prompt: string
  subtitle: string
  options: Option[]
}

// Pre-computed scatter positions for each question's options
// Each entry: { x: percent-from-left, y: percent-from-top, size: px }
export type CirclePos = { x: number; y: number; size: number }

export const CIRCLE_POSITIONS: CirclePos[][] = [
  // Q0 - Taste (5 options)
  [
    { x: 18, y: 28, size: 145 },
    { x: 70, y: 22, size: 120 },
    { x: 45, y: 55, size: 155 },
    { x: 14, y: 72, size: 110 },
    { x: 78, y: 65, size: 130 },
  ],
  // Q1 - Mood (5 options)
  [
    { x: 22, y: 25, size: 130 },
    { x: 68, y: 18, size: 115 },
    { x: 42, y: 52, size: 148 },
    { x: 12, y: 70, size: 120 },
    { x: 76, y: 62, size: 138 },
  ],
  // Q2 - Personality (6 options)
  [
    { x: 15, y: 22, size: 125 },
    { x: 58, y: 15, size: 108 },
    { x: 84, y: 30, size: 100 },
    { x: 35, y: 55, size: 145 },
    { x: 10, y: 68, size: 115 },
    { x: 72, y: 60, size: 128 },
  ],
  // Q3 - Future Vision (5 options)
  [
    { x: 20, y: 30, size: 138 },
    { x: 65, y: 22, size: 118 },
    { x: 40, y: 58, size: 150 },
    { x: 16, y: 75, size: 108 },
    { x: 80, y: 68, size: 125 },
  ],
  // Q4 - Goals (6 options)
  [
    { x: 18, y: 20, size: 122 },
    { x: 62, y: 14, size: 110 },
    { x: 86, y: 28, size: 98 },
    { x: 38, y: 52, size: 148 },
    { x: 12, y: 65, size: 118 },
    { x: 70, y: 62, size: 130 },
  ],
  // Q5 - Environment (6 options)
  [
    { x: 16, y: 24, size: 128 },
    { x: 60, y: 18, size: 112 },
    { x: 82, y: 32, size: 102 },
    { x: 36, y: 56, size: 150 },
    { x: 14, y: 70, size: 116 },
    { x: 74, y: 64, size: 134 },
  ],
]

export const QUESTIONS: Question[] = [
  {
    id: 'palate',
    prompt: 'Your palate tonight?',
    subtitle: 'What sensation are you craving',
    options: [
      { label: 'Bold & Smoky',   tags: ['bold', 'tannic', 'earthy'] },
      { label: 'Fresh & Citrus', tags: ['crisp', 'acidic', 'light'] },
      { label: 'Sweet & Lush',   tags: ['sweet', 'rich', 'fruity'] },
      { label: 'Dry & Mineral',  tags: ['mineral', 'dry', 'lean'] },
      { label: 'Fizz & Fun',     tags: ['sparkling', 'light', 'playful'] },
    ],
  },
  {
    id: 'mood',
    prompt: 'Your energy right now?',
    subtitle: 'Tune into this exact moment',
    options: [
      { label: 'On Fire',       tags: ['bold', 'intense', 'tannic'] },
      { label: 'Slow & Steady', tags: ['elegant', 'dry', 'mineral'] },
      { label: 'Romantic',      tags: ['fruity', 'floral', 'rosé'] },
      { label: 'Celebratory',   tags: ['sparkling', 'playful', 'light'] },
      { label: 'Philosophical', tags: ['earthy', 'complex', 'aged'] },
    ],
  },
  {
    id: 'personality',
    prompt: 'You are...',
    subtitle: 'Pick the archetype that fits tonight',
    options: [
      { label: 'The Rebel',     tags: ['bold', 'tannic', 'intense'] },
      { label: 'The Dreamer',   tags: ['floral', 'sweet', 'light'] },
      { label: 'The Architect', tags: ['mineral', 'dry', 'precise'] },
      { label: 'The Explorer',  tags: ['complex', 'earthy', 'aged'] },
      { label: 'The Host',      tags: ['sparkling', 'playful', 'fruity'] },
      { label: 'The Romantic',  tags: ['rosé', 'fruity', 'floral'] },
    ],
  },
  {
    id: 'future',
    prompt: 'Your next chapter?',
    subtitle: 'Where is your story heading',
    options: [
      { label: 'New Horizons',     tags: ['crisp', 'light', 'acidic'] },
      { label: 'Deep Roots',       tags: ['earthy', 'aged', 'complex'] },
      { label: 'Peak Performance', tags: ['bold', 'intense', 'tannic'] },
      { label: 'Quiet Grace',      tags: ['elegant', 'dry', 'mineral'] },
      { label: 'Wild Card',        tags: ['sparkling', 'playful', 'fruity'] },
    ],
  },
  {
    id: 'goals',
    prompt: 'What drives you?',
    subtitle: 'Your deepest fuel source',
    options: [
      { label: 'Legacy',     tags: ['aged', 'complex', 'earthy'] },
      { label: 'Connection', tags: ['fruity', 'sweet', 'floral'] },
      { label: 'Precision',  tags: ['mineral', 'dry', 'lean'] },
      { label: 'Freedom',    tags: ['crisp', 'light', 'sparkling'] },
      { label: 'Power',      tags: ['bold', 'tannic', 'intense'] },
      { label: 'Beauty',     tags: ['floral', 'rosé', 'elegant'] },
    ],
  },
  {
    id: 'environment',
    prompt: 'Your ideal scene?',
    subtitle: 'Where do you feel most alive',
    options: [
      { label: 'Rooftop at Dusk',     tags: ['sparkling', 'light', 'crisp'] },
      { label: 'Dark Cellar',         tags: ['earthy', 'aged', 'complex'] },
      { label: 'Sun-Drenched Coast',  tags: ['crisp', 'acidic', 'mineral'] },
      { label: 'Candlelit Loft',      tags: ['elegant', 'fruity', 'floral'] },
      { label: 'Forest Edge',         tags: ['earthy', 'lean', 'dry'] },
      { label: 'Loud City Night',     tags: ['bold', 'intense', 'tannic'] },
    ],
  },
]
