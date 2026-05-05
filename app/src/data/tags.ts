export const WINE_TAGS = [
  // Body & structure
  'bold',
  'light',
  'rich',
  'lean',
  'tannic',

  // Acidity & freshness
  'crisp',
  'acidic',
  'sparkling',

  // Flavour profile
  'fruity',
  'floral',
  'earthy',
  'spicy',
  'sweet',
  'mineral',

  // Finish & style
  'dry',
  'elegant',
  'complex',
  'intense',
  'aged',
  'precise',
  'playful',
  'rosé',
] as const

export type WineTag = (typeof WINE_TAGS)[number]
