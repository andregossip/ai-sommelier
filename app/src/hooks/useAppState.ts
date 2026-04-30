import { useState } from 'react'
import { QUESTIONS, type Option } from '../data/questions'
import { matchWine, type MatchResult } from '../logic/matcher'

export type Screen = 'welcome' | 'question' | 'analyzing' | 'result'

export function useAppState() {
  const [screen, setScreen] = useState<Screen>('welcome')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selections, setSelections] = useState<Option[]>([])
  const [matchedWine, setMatchedWine] = useState<MatchResult | null>(null)

  const handleStart = () => {
    setScreen('question')
  }

  const handleSelect = (option: Option) => {
    const next = [...selections, option]
    setSelections(next)

    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion((q) => q + 1)
    } else {
      // All questions answered — show analyzing screen
      setScreen('analyzing')
    }
  }

  const handleAnalysisComplete = () => {
    const result = matchWine(selections)
    setMatchedWine(result)
    setScreen('result')
  }

  const handleReset = () => {
    setScreen('welcome')
    setCurrentQuestion(0)
    setSelections([])
    setMatchedWine(null)
  }

  return {
    screen,
    currentQuestion,
    matchedWine,
    handleStart,
    handleSelect,
    handleAnalysisComplete,
    handleReset,
  }
}
