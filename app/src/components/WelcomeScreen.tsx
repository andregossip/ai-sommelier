import { motion } from 'framer-motion'
import { screenVariants } from './screenVariants'

type Props = {
  onStart: () => void
}

export function WelcomeScreen({ onStart }: Props) {
  const titleChars = 'AI Sommelier'.split('')

  return (
    <motion.div
      key="welcome"
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
        gap: '0',
        padding: '40px',
      }}
    >
      {/* Glowing orb behind title */}
      <div
        style={{
          position: 'absolute',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(180,79,255,0.15) 0%, rgba(0,245,212,0.05) 60%, transparent 80%)',
          pointerEvents: 'none',
        }}
      />

      {/* Eyebrow label */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.7rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: '#00f5d4',
          marginBottom: '20px',
          opacity: 0.9,
        }}
      >
        ◈ Neural Pairing Engine v2.1 ◈
      </motion.p>

      {/* Main title */}
      <motion.h1
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(3rem, 8vw, 5.5rem)',
          fontWeight: 700,
          margin: 0,
          marginBottom: '8px',
          letterSpacing: '-0.02em',
          overflow: 'hidden',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {titleChars.map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4 + i * 0.04,
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{
              display: 'inline-block',
              background:
                char === ' '
                  ? 'transparent'
                  : 'linear-gradient(135deg, #ffffff 30%, #b44fff 100%)',
              WebkitBackgroundClip: char === ' ' ? undefined : 'text',
              WebkitTextFillColor: char === ' ' ? 'transparent' : 'transparent',
              backgroundClip: char === ' ' ? undefined : 'text',
              color: char === ' ' ? 'transparent' : undefined,
              width: char === ' ' ? '0.3em' : undefined,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.7 }}
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
          fontWeight: 300,
          color: 'rgba(240, 240, 248, 0.55)',
          marginBottom: '52px',
          letterSpacing: '0.02em',
          textAlign: 'center',
          maxWidth: '420px',
          lineHeight: 1.6,
        }}
      >
        Six questions. Infinite data points.
        <br />
        One perfect wine, calibrated to you.
      </motion.p>

      {/* CTA Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5, type: 'spring', stiffness: 300 }}
        whileHover={{
          scale: 1.05,
          boxShadow: '0 0 32px #b44fff, 0 0 64px rgba(180, 79, 255, 0.3)',
        }}
        whileTap={{ scale: 0.97 }}
        onClick={onStart}
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '1rem',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#ffffff',
          background: 'linear-gradient(135deg, rgba(180,79,255,0.2) 0%, rgba(0,245,212,0.2) 100%)',
          border: '1.5px solid rgba(180, 79, 255, 0.6)',
          borderRadius: '50px',
          padding: '18px 48px',
          cursor: 'pointer',
          boxShadow: '0 0 20px rgba(180, 79, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          touchAction: 'manipulation',
          WebkitAppearance: 'none',
        }}
      >
        Begin Analysis
      </motion.button>

      {/* Bottom decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '32px',
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
        }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, delay: i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: 4,
              height: 4,
              borderRadius: '50%',
              backgroundColor: '#b44fff',
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}
