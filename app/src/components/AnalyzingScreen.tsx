import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { screenVariants } from './screenVariants'

type Props = {
  onComplete: () => void
}

const STATUS_MESSAGES = [
  'Reading your signals...',
  'Cross-referencing profiles...',
  'Mapping flavour dimensions...',
  'Calibrating pairing matrix...',
  'Finalising your match...',
]

export function AnalyzingScreen({ onComplete }: Props) {
  const [statusIndex, setStatusIndex] = useState(0)

  useEffect(() => {
    // Cycle through status messages
    const msgInterval = setInterval(() => {
      setStatusIndex((i) => (i + 1) % STATUS_MESSAGES.length)
    }, 500)

    // Complete after 2.8 seconds
    const done = setTimeout(() => {
      clearInterval(msgInterval)
      onComplete()
    }, 2800)

    return () => {
      clearInterval(msgInterval)
      clearTimeout(done)
    }
  }, [onComplete])

  const rings = [
    { size: 220, strokeWidth: 1.5, color: '#b44fff', duration: 4, offset: 0 },
    { size: 160, strokeWidth: 1.5, color: '#00f5d4', duration: 3, offset: 0.3 },
    { size: 100, strokeWidth: 2,   color: '#ff2d78', duration: 2.2, offset: 0.6 },
  ]

  return (
    <motion.div
      key="analyzing"
      variants={screenVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '40px',
      }}
    >
      {/* Spinning rings SVG */}
      <div style={{ position: 'relative', width: 240, height: 240 }}>
        {rings.map((ring, i) => {
          const r = ring.size / 2
          const circumference = 2 * Math.PI * r

          return (
            <motion.svg
              key={i}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              width={ring.size + ring.strokeWidth * 2}
              height={ring.size + ring.strokeWidth * 2}
              animate={{ rotate: 360 }}
              transition={{
                duration: ring.duration,
                repeat: Infinity,
                ease: 'linear',
                delay: ring.offset,
              }}
            >
              {/* Background track */}
              <circle
                cx={(ring.size + ring.strokeWidth * 2) / 2}
                cy={(ring.size + ring.strokeWidth * 2) / 2}
                r={r}
                fill="none"
                stroke={ring.color}
                strokeWidth={ring.strokeWidth}
                strokeOpacity={0.12}
              />
              {/* Animated arc */}
              <motion.circle
                cx={(ring.size + ring.strokeWidth * 2) / 2}
                cy={(ring.size + ring.strokeWidth * 2) / 2}
                r={r}
                fill="none"
                stroke={ring.color}
                strokeWidth={ring.strokeWidth}
                strokeLinecap="round"
                strokeDasharray={`${circumference * 0.3} ${circumference * 0.7}`}
                animate={{
                  filter: [
                    `drop-shadow(0 0 4px ${ring.color})`,
                    `drop-shadow(0 0 10px ${ring.color})`,
                    `drop-shadow(0 0 4px ${ring.color})`,
                  ],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.svg>
          )
        })}

        {/* Centre dot */}
        <motion.div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 12,
            height: 12,
            borderRadius: '50%',
            backgroundColor: '#b44fff',
          }}
          animate={{
            boxShadow: [
              '0 0 8px #b44fff',
              '0 0 20px #b44fff, 0 0 40px rgba(180,79,255,0.5)',
              '0 0 8px #b44fff',
            ],
            scale: [1, 1.4, 1],
          }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Status text */}
      <div style={{ textAlign: 'center' }}>
        <motion.p
          key={statusIndex}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.8rem',
            letterSpacing: '0.12em',
            color: 'rgba(240,240,248,0.6)',
            margin: 0,
          }}
        >
          {STATUS_MESSAGES[statusIndex]}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ marginTop: '12px', display: 'flex', gap: '6px', justifyContent: 'center' }}
        >
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={{ scaleY: [1, 2.5, 1] }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                width: 3,
                height: 14,
                borderRadius: 2,
                backgroundColor: '#b44fff',
                opacity: 0.7,
                transformOrigin: 'center',
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
