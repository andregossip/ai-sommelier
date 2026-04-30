import { type Option } from '../data/questions'
import { WINES, type Wine } from '../data/wines'

export type MatchResult = {
  wine: Wine
  matchedTags: string[]
  explanation: string
  score: number
}

// Human-readable labels for each tag used in the "why you" explanation
const TAG_LABELS: Record<string, string> = {
  bold: 'bold character',
  tannic: 'structural depth',
  intense: 'raw intensity',
  earthy: 'earthy depth',
  complex: 'layered complexity',
  aged: 'appreciation for time',
  elegant: 'effortless elegance',
  fruity: 'vibrant warmth',
  dry: 'dry precision',
  light: 'effortless lightness',
  floral: 'floral grace',
  mineral: 'mineral clarity',
  lean: 'sharp focus',
  crisp: 'crisp energy',
  acidic: 'bright acidity',
  sweet: 'generous sweetness',
  rich: 'lush richness',
  sparkling: 'a celebratory spirit',
  playful: 'playful energy',
  rosé: 'refined charm',
  spicy: 'spicy edge',
  precise: 'laser precision',
  intense2: 'relentless intensity',
}

function formatTags(tags: string[]): string {
  const labels = tags.map((t) => TAG_LABELS[t] ?? t)
  if (labels.length === 0) return 'a unique combination of qualities'
  if (labels.length === 1) return labels[0]
  if (labels.length === 2) return `${labels[0]} and ${labels[1]}`
  return `${labels.slice(0, -1).join(', ')}, and ${labels[labels.length - 1]}`
}

export function matchWine(selections: Option[]): MatchResult {
  // Flatten all tags from all selections (duplicates preserved for weighting)
  const userTags = selections.flatMap((o) => o.tags)

  // Score each wine
  const scored = WINES.map((wine) => {
    const score = wine.profileTags.reduce(
      (acc, tag) => acc + userTags.filter((t) => t === tag).length,
      0,
    )
    return { wine, score }
  })

  // Sort descending; ties broken by array position (rarer wines are placed later)
  scored.sort((a, b) => b.score - a.score)

  const best = scored[0]

  // Collect the overlapping tags (de-duplicated), ranked by frequency in userTags
  const overlapTags = best.wine.profileTags.filter((t) => userTags.includes(t))
  const ranked = [...new Set(overlapTags)].sort(
    (a, b) =>
      userTags.filter((t) => t === b).length -
      userTags.filter((t) => t === a).length,
  )
  const topTags = ranked.slice(0, 3)

  // Build explanation from the wine's template
  const explanation = best.wine.whyTemplate.replace(
    '{TAGS}',
    formatTags(topTags),
  )

  return {
    wine: best.wine,
    matchedTags: topTags,
    explanation,
    score: best.score,
  }
}
