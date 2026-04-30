import { AnimatePresence } from 'framer-motion'
import { useAppState } from './hooks/useAppState'
import { ParticleField } from './components/ParticleField'
import { WelcomeScreen } from './components/WelcomeScreen'
import { QuestionScreen } from './components/QuestionScreen'
import { AnalyzingScreen } from './components/AnalyzingScreen'
import { ResultScreen } from './components/ResultScreen'

export default function App() {
  const {
    screen,
    currentQuestion,
    matchedWine,
    handleStart,
    handleSelect,
    handleAnalysisComplete,
    handleReset,
  } = useAppState()

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#080810',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient particle background — always rendered */}
      <ParticleField />

      {/* Subtle grid overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          backgroundImage: `
            linear-gradient(rgba(180,79,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(180,79,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      {/* Screen container */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          height: '100%',
        }}
      >
        <AnimatePresence mode="wait">
          {screen === 'welcome' && (
            <WelcomeScreen key="welcome" onStart={handleStart} />
          )}

          {screen === 'question' && (
            <QuestionScreen
              key={`question-${currentQuestion}`}
              questionIndex={currentQuestion}
              onSelect={handleSelect}
            />
          )}

          {screen === 'analyzing' && (
            <AnalyzingScreen key="analyzing" onComplete={handleAnalysisComplete} />
          )}

          {screen === 'result' && matchedWine && (
            <ResultScreen key="result" result={matchedWine} onReset={handleReset} />
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
