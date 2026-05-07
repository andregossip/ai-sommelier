import { type WineTag } from './tags'

export type Option = {
  label: string
  tags: WineTag[]
}

export type Question = {
  id: string
  prompt: string
  options: Option[]
}

// Pre-computed full-screen scatter positions for each question's options.
// x%, y% are viewport-percentage centres; size is in px.
// Positions are distributed across the full screen (y: 8–88%, x: 7–92%).
export type CirclePos = { x: number; y: number; size: number }

export const CIRCLE_POSITIONS: CirclePos[][] = [
  // Q0 – Mood (14 options)
  [
    { x: 12, y: 14, size: 110 },
    { x: 30, y: 13, size: 92  },
    { x: 53, y: 19, size: 118 },
    { x: 74, y: 13, size: 95  },
    { x: 88, y: 18, size: 88  },
    { x: 16, y: 40, size: 122 },
    { x: 40, y: 46, size: 98  },
    { x: 63, y: 39, size: 112 },
    { x: 85, y: 44, size: 90  },
    { x: 12, y: 64, size: 106 },
    { x: 30, y: 70, size: 94  },
    { x: 56, y: 63, size: 116 },
    { x: 78, y: 68, size: 100 },
    { x: 44, y: 86, size: 108 },
  ],
  // Q1 – Personality (14 options)
  [
    { x: 12, y: 13, size: 105 },
    { x: 35, y: 13, size: 88  },
    { x: 59, y: 14, size: 115 },
    { x: 82, y: 13, size: 92  },
    { x: 12, y: 38, size: 118 },
    { x: 29, y: 44, size: 96  },
    { x: 53, y: 40, size: 108 },
    { x: 76, y: 36, size: 90  },
    { x: 88, y: 47, size: 86  },
    { x: 17, y: 62, size: 110 },
    { x: 41, y: 66, size: 96  },
    { x: 65, y: 60, size: 114 },
    { x: 87, y: 65, size: 88  },
    { x: 33, y: 84, size: 102 },
  ],
  // Q2 – Future/Commute (9 options)
  [
    { x: 15, y: 14, size: 112 },
    { x: 50, y: 13, size: 98  },
    { x: 82, y: 17, size: 118 },
    { x: 12, y: 47, size: 106 },
    { x: 42, y: 50, size: 120 },
    { x: 74, y: 44, size: 96  },
    { x: 88, y: 52, size: 88  },
    { x: 24, y: 78, size: 110 },
    { x: 61, y: 80, size: 116 },
  ],
  // Q3 – Goals/Meeting (7 options)
  [
    { x: 16, y: 13, size: 114 },
    { x: 55, y: 13, size: 102 },
    { x: 85, y: 18, size: 118 },
    { x: 12, y: 50, size: 108 },
    { x: 42, y: 46, size: 120 },
    { x: 75, y: 52, size: 100 },
    { x: 32, y: 80, size: 112 },
  ],
  // Q4 – Environment (14 options)
  [
    { x: 13, y: 13, size: 112 },
    { x: 36, y: 13, size: 94  },
    { x: 60, y: 13, size: 106 },
    { x: 83, y: 13, size: 92  },
    { x: 12, y: 38, size: 118 },
    { x: 41, y: 44, size: 100 },
    { x: 65, y: 38, size: 112 },
    { x: 87, y: 44, size: 88  },
    { x: 12, y: 64, size: 108 },
    { x: 29, y: 68, size: 94  },
    { x: 53, y: 62, size: 120 },
    { x: 77, y: 66, size: 96  },
    { x: 88, y: 58, size: 86  },
    { x: 44, y: 86, size: 105 },
  ],
  // Q5 – Fears (7 options)
  [
    { x: 22, y: 14, size: 116 },
    { x: 72, y: 13, size: 108 },
    { x: 13, y: 50, size: 120 },
    { x: 48, y: 46, size: 112 },
    { x: 84, y: 52, size: 104 },
    { x: 30, y: 80, size: 118 },
    { x: 66, y: 83, size: 110 },
  ],
]

export const QUESTIONS: Question[] = [
  {
    id: 'mood',
    prompt: 'Your energy right now?',
    options: [
      { label: 'On Fire',      tags: ['bold', 'intense', 'tannic'] },
      { label: 'Slow & Steady',tags: ['elegant', 'dry', 'mineral'] },
      { label: 'Romantic',     tags: ['fruity', 'floral', 'rosé'] },
      { label: 'Celebratory',  tags: ['sparkling', 'playful', 'light'] },
      { label: 'Philosophical',tags: ['earthy', 'complex', 'aged'] },
      { label: 'Nostalgic',    tags: ['aged', 'complex', 'earthy'] },
      { label: 'Restless',     tags: ['crisp', 'acidic', 'intense'] },
      { label: 'At Peace',     tags: ['elegant', 'mineral', 'lean'] },
      { label: 'Mischievous',  tags: ['sparkling', 'playful', 'acidic'] },
      { label: 'Vulnerable',   tags: ['floral', 'light', 'sweet'] },
      { label: 'Electric',     tags: ['bold', 'crisp', 'intense'] },
      { label: 'Focused',      tags: ['precise', 'mineral', 'dry'] },
      { label: 'Warm & Open',  tags: ['fruity', 'rich', 'sweet'] },
      { label: 'Mysterious',   tags: ['earthy', 'tannic', 'complex'] },
    ],
  },
  {
    id: 'personality',
    prompt: 'You are...',
    options: [
      { label: 'The Rebel',     tags: ['bold', 'tannic', 'intense'] },
      { label: 'The Dreamer',   tags: ['floral', 'sweet', 'light'] },
      { label: 'The Architect', tags: ['mineral', 'dry', 'precise'] },
      { label: 'The Explorer',  tags: ['complex', 'earthy', 'aged'] },
      { label: 'The Host',      tags: ['sparkling', 'playful', 'fruity'] },
      { label: 'The Romantic',  tags: ['rosé', 'fruity', 'floral'] },
      { label: 'The Strategist',tags: ['precise', 'dry', 'mineral'] },
      { label: 'The Artist',    tags: ['floral', 'complex', 'elegant'] },
      { label: 'The Skeptic',   tags: ['lean', 'acidic', 'mineral'] },
      { label: 'The Leader',    tags: ['bold', 'rich', 'tannic'] },
      { label: 'The Wildcard',  tags: ['sparkling', 'intense', 'playful'] },
      { label: 'The Sage',      tags: ['aged', 'complex', 'earthy'] },
      { label: 'The Empath',    tags: ['fruity', 'sweet', 'light'] },
      { label: 'The Pioneer',   tags: ['crisp', 'bold', 'complex'] },
    ],
  },
  {
    id: 'future',
    prompt: 'How do you commute to work?',
    options: [
      { label: 'Gravity surfboard',    tags: ['crisp', 'light', 'acidic'] },
      { label: 'Teleportation capsule',      tags: ['earthy', 'aged', 'complex'] },
      { label: 'Jetpack',       tags: ['bold', 'intense', 'tannic'] },
      { label: 'Robot bus',     tags: ['elegant', 'dry', 'mineral'] },
      { label: 'Robot animal ride',       tags: ['sparkling', 'playful', 'fruity'] },
      { label: 'Floating bubble',      tags: ['complex', 'bold', 'earthy'] },
      { label: 'Portal',    tags: ['bold', 'rich', 'intense'] },
      { label: 'Swinging like Spiderman',  tags: ['floral', 'fruity', 'light'] },
      { label: 'Drone-link swarm hitching',    tags: ['mineral', 'lean', 'dry'] },
    ],
  },
  {
    id: 'goals',
    prompt: 'Your meeting energy?',
    options: [
      { label: '"Can everyone see my screen?" (they cannot)',     tags: ['aged', 'complex', 'earthy'] },
      { label: '"You\'re on mute\" — said for the fourth time', tags: ['fruity', 'sweet', 'floral'] },
      { label: 'Joining three minutes late and immediately asking what you missed',  tags: ['mineral', 'dry', 'lean'] },
      { label: 'Let\'s take this offline" (it never gets taken offline)',    tags: ['crisp', 'light', 'sparkling'] },
      { label: 'Typing so loudly during someone else\'s presentation',      tags: ['bold', 'tannic', 'intense'] },
      { label: 'Booking a 30-minute meeting that could have been a Slack message',     tags: ['floral', 'rosé', 'elegant'] },
      { label: 'Nodding confidently while having absolutely no idea what\'s being decided',    tags: ['complex', 'aged', 'precise'] },
    ],
  },
  {
    id: 'environment',
    prompt: 'Which vacation vibe fits you best?',
    options: [
      { label: 'Vineyard ',  tags: ['sparkling', 'light', 'crisp'] },
      { label: 'Dark Cellar',      tags: ['earthy', 'aged', 'complex'] },
      { label: 'Sunny Coast',      tags: ['crisp', 'acidic', 'mineral'] },
      { label: 'Candlelit Loft',   tags: ['elegant', 'fruity', 'floral'] },
      { label: 'Forest Edge',      tags: ['earthy', 'lean', 'dry'] },
      { label: 'City Night',       tags: ['bold', 'intense', 'tannic'] },
      { label: 'Mountain Peak',    tags: ['crisp', 'mineral', 'lean'] },
      { label: 'Desert at Dawn',   tags: ['earthy', 'complex', 'dry'] },
      { label: 'Hidden Library',   tags: ['aged', 'complex', 'elegant'] },
      { label: 'Night Market',     tags: ['spicy', 'bold', 'fruity'] },
      { label: 'Secret Garden',    tags: ['floral', 'light', 'elegant'] },
      { label: 'Arctic Aurora',    tags: ['crisp', 'mineral', 'precise'] },
      { label: 'Jazz Club',        tags: ['aged', 'earthy', 'complex'] },
      { label: 'Open Ocean',       tags: ['mineral', 'acidic', 'lean'] },
    ],
  },
  {
    id: 'fears',
    prompt: 'Your social kryptonite?',
    options: [
      { label: 'Pressing “reply all” by accident',                                  tags: ['precise', 'dry', 'mineral'] },
      { label: 'Not recognizing someone who clearly knows me',                      tags: ['crisp', 'light', 'acidic'] },
      { label: 'My headphones not being plugged in and everyone hears my music',    tags: ['elegant', 'lean', 'mineral'] },
      { label: 'Misjudging a handshake / hug situation',                            tags: ['fruity', 'playful', 'light'] },
      { label: 'Accidentally waving back at someone who wasn\'t waving at me',       tags: ['sparkling', 'playful', 'crisp'] },
      { label: 'Saying a joke and it not landing',                                  tags: ['bold', 'playful', 'fruity'] },
      { label: 'Running for the bus/train and the doors close right in front of you while everyone saw you sprint',    tags: ['intense', 'bold', 'acidic'] },
    ],
  },
]
