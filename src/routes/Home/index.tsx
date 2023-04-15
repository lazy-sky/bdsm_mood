import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'

import { genderState } from 'store/atom'
import Logo from 'assets/logo_pastel.png'
import ArrowIcon from 'assets/arrow.png'

import styles from './Home.module.scss'

const Home = () => {
  const navigate = useNavigate()
  const setGender = useSetRecoilState(genderState)

  const handleButtonClick = (gender: string) => {
    setGender(gender)
    navigate('/test')
  }

  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <img src={Logo} alt='BDSM' />
      </div>
      <h1 className={styles.title}>나만의 섹슈얼 무드</h1>
      <h2 className={styles.subTitle}>타고난 나의 매력적인 분위기는?</h2>

      <div className={styles.bottom}>
        <div className={styles.warning}>성적 지향 테스트로 문항 내 성적 상황 묘사가 있습니다.</div>
        <div className={styles.btns}>
          <button type='button' onClick={() => handleButtonClick('그')} className={styles.male}>
            <div>그가 보는 나는?</div>
            <img src={ArrowIcon} alt='' />
          </button>
          <button type='button' onClick={() => handleButtonClick('그녀')} className={styles.female}>
            <div>그녀가 보는 나는?</div>
            <img src={ArrowIcon} alt='' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
