import styles from './Test.module.scss'

import { questions } from 'constants/questions'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { genderState } from 'store/atom'

const Test = () => {
  const navigate = useNavigate()
  const gender = useRecoilValue(genderState)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  useEffect(() => {
    if (currentQuestionIndex === questions.length) {
      navigate('/result')
    }
  }, [currentQuestionIndex, navigate])

  const handleButtonClick = () => {
    setCurrentQuestionIndex((prev) => prev + 1)
    // TODO: 점수 계산 로직
  }

  if (currentQuestionIndex === questions.length) {
    return <div>End!</div>
  }

  return (
    <div className={styles.root}>
      {gender}
      {currentQuestionIndex >= 0 && currentQuestionIndex <= questions.length && (
        <div className={styles.questionBox}>
          <div>{questions[currentQuestionIndex].question}</div>
          <button type='button' onClick={handleButtonClick}>
            {questions[currentQuestionIndex].answer1.text}
          </button>
          <button type='button' onClick={handleButtonClick}>
            {questions[currentQuestionIndex].answer2.text}
          </button>
        </div>
      )}
      <div>
        {currentQuestionIndex + 1} / {questions.length}
        <progress max={questions.length} value={currentQuestionIndex + 1} className={styles.progress} />
      </div>
    </div>
  )
}

export default Test
