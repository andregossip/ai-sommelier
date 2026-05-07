import { motion, type Variants } from 'framer-motion'
import { screenVariants } from './screenVariants'
import type { MatchResult } from '../logic/matcher'

type Props = {
  result: MatchResult
  onReset: () => void
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export function ResultScreen({ result, onReset }: Props) {
  const { wine, explanation, matchedTags } = result

  return (
    <motion.div
      key="result"
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
        padding: '40px',
        textAlign: 'center',
      }}
    >
      {/* Radial glow behind result */}
      <div
        style={{
          position: 'absolute',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(0,245,212,0.1) 0%, rgba(180,79,255,0.06) 50%, transparent 75%)',
          pointerEvents: 'none',
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: 'relative',
          maxWidth: '620px',
          width: '100%',
        }}
      >
        {/* Wine image */}
        {wine.image && (
          <motion.div variants={itemVariants} style={{ marginBottom: '28px', display: 'flex', justifyContent: 'center' }}>
            <img
              src={wine.image}
              alt={wine.name}
              style={{
                height: '220px',
                width: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 24px rgba(0,245,212,0.25))',
              }}
            />
          </motion.div>
        )}

        {/* Eyebrow */}
        <motion.p variants={itemVariants} style={{ margin: '0 0 12px' }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.65rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#00f5d4',
              opacity: 0.9,
            }}
          >
            ◈ Your Perfect Match ◈
          </span>
        </motion.p>

        {/* Wine name */}
        <motion.h1
          variants={itemVariants}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.2rem, 6vw, 4rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            margin: '0 0 6px',
            background: 'linear-gradient(135deg, #ffffff 20%, #00f5d4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {wine.name}
        </motion.h1>

        {/* Varietal + region */}
        <motion.p
          variants={itemVariants}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.95rem',
            fontWeight: 400,
            color: 'rgba(240,240,248,0.5)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            margin: '0 0 28px',
          }}
        >
          {wine.varietal} — {wine.region}
        </motion.p>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          style={{
            width: '60px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #b44fff, transparent)',
            margin: '0 auto 28px',
          }}
        />

        {/* Tasting description */}
        <motion.p
          variants={itemVariants}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            fontWeight: 300,
            lineHeight: 1.7,
            color: 'rgba(240,240,248,0.75)',
            margin: '0 0 24px',
          }}
        >
          {wine.description}
        </motion.p>

        {/* "Why you" explanation */}
        <motion.div
          variants={itemVariants}
          style={{
            background: 'rgba(180,79,255,0.08)',
            border: '1px solid rgba(180,79,255,0.2)',
            borderRadius: '12px',
            padding: '20px 24px',
            marginBottom: '28px',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        >
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(0.85rem, 1.8vw, 1rem)',
              fontWeight: 400,
              lineHeight: 1.65,
              color: 'rgba(240,240,248,0.85)',
              margin: 0,
              fontStyle: 'italic',
            }}
          >
            {explanation}
          </p>
        </motion.div>

        {/* Matched tags */}
        {matchedTags.length > 0 && (
          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              gap: '10px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginBottom: '40px',
            }}
          >
            {matchedTags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.65rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#00f5d4',
                  border: '1px solid rgba(0,245,212,0.3)',
                  borderRadius: '20px',
                  padding: '4px 14px',
                  backgroundColor: 'rgba(0,245,212,0.06)',
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>
        )}

        {/* Reset button */}
        <motion.button
          variants={itemVariants}
          whileHover={{
            opacity: 1,
            borderColor: 'rgba(255,255,255,0.3)',
          }}
          whileTap={{ scale: 0.96 }}
          onClick={onReset}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(240,240,248,0.4)',
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '50px',
            padding: '12px 28px',
            cursor: 'pointer',
            opacity: 0.7,
            touchAction: 'manipulation',
            WebkitAppearance: 'none',
            transition: 'opacity 0.2s',
          }}
        >
          New Guest →
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
