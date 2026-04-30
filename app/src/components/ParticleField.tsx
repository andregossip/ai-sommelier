import { useMemo } from 'react'
import { motion } from 'framer-motion'

type Particle = {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  driftX: number
  driftY: number
  duration: number
}

// Seeded pseudo-random to ensure consistent layout across renders
function seededRandom(seed: number): () => number {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff
    return (s >>> 0) / 0xffffffff
  }
}

export function ParticleField() {
  const particles = useMemo<Particle[]>(() => {
    const rng = seededRandom(42)
    return Array.from({ length: 45 }, (_, i) => ({
      id: i,
      x: rng() * 100,
      y: rng() * 100,
      size: 1.5 + rng() * 2.5,
      opacity: 0.08 + rng() * 0.22,
      driftX: (rng() - 0.5) * 120,
      driftY: (rng() - 0.5) * 90,
      duration: 10 + rng() * 18,
    }))
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            backgroundColor: p.id % 3 === 0 ? '#b44fff' : p.id % 3 === 1 ? '#00f5d4' : '#ffffff',
            opacity: p.opacity,
          }}
          animate={{
            x: [0, p.driftX, 0],
            y: [0, p.driftY, 0],
            opacity: [p.opacity, p.opacity * 0.3, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
            delay: p.id * 0.15,
          }}
        />
      ))}
    </div>
  )
}
