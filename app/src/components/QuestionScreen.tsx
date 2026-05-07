import { useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { QUESTIONS, CIRCLE_POSITIONS, type Option } from '../data/questions'
import { CircleOption } from './CircleOption'
import { screenVariants } from './screenVariants'

type Props = {
  questionIndex: number
  onSelect: (option: Option) => void
}

const circleContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
}

const circleItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 280, damping: 22 },
  },
}

export function QuestionScreen({ questionIndex, onSelect }: Props) {
  const question = QUESTIONS[questionIndex]
  const positions = CIRCLE_POSITIONS[questionIndex]
  const [selected, setSelected] = useState<number | null>(null)

  const handleSelect = (index: number) => {
    if (selected !== null) return
    setSelected(index)
    setTimeout(() => onSelect(question.options[index]), 420)
  }

  return (
    <motion.div
      key={`question-${questionIndex}`}
      variants={screenVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        height: '100%',
      }}
    >
      {/* Circles fill the ENTIRE screen */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={circleContainerVariants}
        style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}
      >
        {question.options.map((option, i) => (
          <motion.div
            key={`${questionIndex}-${i}`}
            variants={circleItemVariants}
            style={{
              position: 'absolute',
              left: `${positions[i].x}%`,
              top: `${positions[i].y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <CircleOption
              label={option.label}
              pos={positions[i]}
              isSelected={selected === i}
              onSelect={() => handleSelect(i)}
              index={i}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Floating header overlay — pointer-events: none so circles beneath are tappable */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          pointerEvents: 'none',
          background:
            'linear-gradient(to bottom, rgba(8,8,16,0.92) 0%, rgba(8,8,16,0.72) 40%, rgba(8,8,16,0.0) 100%)',
          padding: '22px 36px 52px',
        }}
      >
        {/* Progress dots + counter row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '14px',
          }}
        >
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {QUESTIONS.map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  backgroundColor:
                    i < questionIndex
                      ? '#00f5d4'
                      : i === questionIndex
                      ? '#b44fff'
                      : 'rgba(255,255,255,0.18)',
                  scale: i === questionIndex ? 1.35 : 1,
                  boxShadow:
                    i === questionIndex
                      ? '0 0 8px #b44fff'
                      : i < questionIndex
                      ? '0 0 6px #00f5d4'
                      : 'none',
                }}
                transition={{ duration: 0.4 }}
                style={{ width: 8, height: 8, borderRadius: '50%' }}
              />
            ))}
          </div>

          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.68rem',
              color: 'rgba(240,240,248,0.38)',
              letterSpacing: '0.15em',
            }}
          >
            {String(questionIndex + 1).padStart(2, '0')} /{' '}
            {String(QUESTIONS.length).padStart(2, '0')}
          </span>
        </div>

        {/* Question prompt */}
        <motion.h2
          key={`prompt-${questionIndex}`}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
            fontWeight: 700,
            margin: 0,
            color: '#f0f0f8',
            letterSpacing: '-0.01em',
            lineHeight: 1.15,
          }}
        >
          {question.prompt}
        </motion.h2>
      </div>
    </motion.div>
  )
}
