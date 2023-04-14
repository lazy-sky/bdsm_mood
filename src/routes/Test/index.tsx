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
  const [progress, setProgress] = useState((1 * 100) / questions.length)

  useEffect(() => {
    if (currentQuestionIndex === questions.length) {
      navigate('/result')
    }
  }, [currentQuestionIndex, navigate])

  useEffect(() => {
    if (currentQuestionIndex === 0) return
    setProgress((prev) => prev + 20)
  }, [currentQuestionIndex])

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
          <div className={styles.question}>{questions[currentQuestionIndex].question}</div>
          <div className={styles.answers}>
            <button type='button' onClick={handleButtonClick}>
              <div className={styles.card}>
                <img src='' alt='' />
              </div>
              <div>{questions[currentQuestionIndex].answer1.text}</div>
            </button>
            <button type='button' onClick={handleButtonClick}>
              <div className={styles.card}>
                <img src='' alt='' />
              </div>
              <div>{questions[currentQuestionIndex].answer2.text}</div>
            </button>
          </div>
        </div>
      )}
      <div className={styles.progress}>
        <div className={styles.number}>
          {currentQuestionIndex + 1} / {questions.length}
        </div>
        <div className={styles.progressBar}>
          <div
            style={{
              backgroundColor: 'white',
              width: `${progress}%`,
              height: '10px',
              borderRadius: '8px',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Test
