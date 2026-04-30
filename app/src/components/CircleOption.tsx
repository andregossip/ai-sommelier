import { useState } from 'react'
import { motion } from 'framer-motion'
import type { CirclePos } from '../data/questions'

type Props = {
  label: string
  pos: CirclePos
  isSelected: boolean
  onSelect: () => void
  index: number
}

export function CircleOption({ label, pos, isSelected, onSelect, index }: Props) {
  const [isHovered, setIsHovered] = useState(false)

  const getVariant = () => {
    if (isSelected) return 'selected'
    if (isHovered) return 'hover'
    return 'idle'
  }

  return (
    <motion.button
      style={{
        width: pos.size,
        height: pos.size,
        borderRadius: '50%',
        border: '1.5px solid',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '12px',
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: '0.01em',
        fontSize: `clamp(0.6rem, ${pos.size * 0.055}px, 0.85rem)`,
        backgroundColor: 'transparent',
        outline: 'none',
        WebkitAppearance: 'none',
        touchAction: 'manipulation',
      }}
      variants={{
        idle: {
          scale: 1,
          boxShadow: '0 0 0px transparent',
          borderColor: 'rgba(180, 79, 255, 0.35)',
          color: 'rgba(240, 240, 248, 0.7)',
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
        },
        hover: {
          scale: 1.08,
          boxShadow: '0 0 18px #b44fff, 0 0 36px rgba(180, 79, 255, 0.3)',
          borderColor: '#b44fff',
          color: '#ffffff',
          backgroundColor: 'rgba(180, 79, 255, 0.1)',
          transition: { type: 'spring', stiffness: 400, damping: 20 },
        },
        selected: {
          scale: 1.12,
          boxShadow: '0 0 28px #00f5d4, 0 0 56px rgba(0, 245, 212, 0.35)',
          borderColor: '#00f5d4',
          color: '#00f5d4',
          backgroundColor: 'rgba(0, 245, 212, 0.1)',
          transition: { type: 'spring', stiffness: 500, damping: 15 },
        },
      }}
      initial="idle"
      animate={getVariant()}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTapStart={() => setIsHovered(true)}
      onTap={() => {
        setIsHovered(false)
        onSelect()
      }}
      custom={index}
    >
      {label}
    </motion.button>
  )
}
