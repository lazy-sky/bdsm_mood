import { useRecoilValue } from 'recoil'

import { genderState } from 'store/atom'
import Logo from 'assets/logo_pastel.png'

import styles from './Result.module.scss'

const Result = () => {
  const gender = useRecoilValue(genderState)
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <img src={Logo} alt='BDSM' />
      </div>
      <div className={styles.subDesc}>{gender}가 느끼는 나는</div>
      <div className={styles.resultDigest}>
        <div className={styles.resultType}>결과 타입1</div>
        <div className={styles.resultLine}>&quot;대사1&quot;</div>
      </div>
    </div>
  )
}

export default Result
