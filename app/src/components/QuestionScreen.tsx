import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { QUESTIONS, CIRCLE_POSITIONS, type Option } from '../data/questions'
import { CircleOption } from './CircleOption'
import { screenVariants } from './screenVariants'

type Props = {
  questionIndex: number
  onSelect: (option: Option) => void
}

export function QuestionScreen({ questionIndex, onSelect }: Props) {
  const question = QUESTIONS[questionIndex]
  const positions = CIRCLE_POSITIONS[questionIndex]
  const [selected, setSelected] = useState<number | null>(null)

  // Reset selected state when question changes
  useEffect(() => {
    setSelected(null)
  }, [questionIndex])

  const handleSelect = (index: number) => {
    if (selected !== null) return // prevent double-tap
    setSelected(index)
    // Brief delay so user sees the teal "selected" highlight before advancing
    setTimeout(() => {
      onSelect(question.options[index])
    }, 420)
  }

  const progressDots = QUESTIONS.map((_, i) => i)

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
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top bar: progress + question number */}
      <div
        style={{
          padding: '28px 40px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexShrink: 0,
        }}
      >
        {/* Progress dots */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {progressDots.map((i) => (
            <motion.div
              key={i}
              animate={{
                backgroundColor:
                  i < questionIndex
                    ? '#00f5d4'
                    : i === questionIndex
                    ? '#b44fff'
                    : 'rgba(255,255,255,0.15)',
                scale: i === questionIndex ? 1.3 : 1,
                boxShadow:
                  i === questionIndex
                    ? '0 0 8px #b44fff'
                    : i < questionIndex
                    ? '0 0 6px #00f5d4'
                    : 'none',
              }}
              transition={{ duration: 0.4 }}
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
              }}
            />
          ))}
        </div>

        {/* Question counter */}
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.7rem',
            color: 'rgba(240,240,248,0.35)',
            letterSpacing: '0.15em',
          }}
        >
          {String(questionIndex + 1).padStart(2, '0')} / {String(QUESTIONS.length).padStart(2, '0')}
        </span>
      </div>

      {/* Question text */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`prompt-${questionIndex}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4 }}
          style={{
            padding: '16px 40px 0',
            flexShrink: 0,
          }}
        >
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#b44fff',
              margin: '0 0 6px',
              opacity: 0.85,
            }}
          >
            {question.subtitle}
          </p>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
              fontWeight: 700,
              margin: 0,
              color: '#f0f0f8',
              letterSpacing: '-0.01em',
              lineHeight: 1.15,
            }}
          >
            {question.prompt}
          </h2>
        </motion.div>
      </AnimatePresence>

      {/* Circles area */}
      <div
        style={{
          position: 'relative',
          flex: 1,
          minHeight: 0,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`circles-${questionIndex}`}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.07 } },
            }}
            style={{
              position: 'absolute',
              inset: 0,
            }}
          >
            {question.options.map((option, i) => (
              <motion.div
                key={`${questionIndex}-${i}`}
                variants={{
                  hidden: { opacity: 0, scale: 0.6 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { type: 'spring', stiffness: 300, damping: 22 },
                  },
                }}
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
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
