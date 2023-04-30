import { useRecoilValue } from 'recoil'

import { genderState } from 'store/atom'
import Logo from 'assets/logo_pastel.png'
import LinkIcon from 'assets/link_icon.png'
import RetryIcon from 'assets/retry_icon.png'

import styles from './Result.module.scss'

const result = {
  type: '부드러운 카리스마',
  typeLine: '나의 도움이 필요해? 무엇이든 해줄게.',
  mainImage: '',
  tags: ['부성애', '데디마미', '쏘스윗'],
}

const Result = () => {
  const gender = useRecoilValue(genderState)
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <img src={Logo} alt='BDSM' />
      </div>
      <div className={styles.subDesc}>{gender}가 느끼는 나는</div>
      <div className={styles.resultDigest}>
        <div className={styles.resultType}>{result.type}</div>
        <div className={styles.resultLine}>&quot;{result.typeLine}&quot;</div>
      </div>
      <div className={styles.mainMood}>
        <div>
          <h4 className={styles.menuTitle}>메인무드</h4>
          <div className={styles.menuDesc}>당신의 가장 강력한 분위기</div>
          {/* <img src={mainImage} alt='' /> */}
          <div style={{ height: 216, background: '#FDFFEF', margin: '16px' }} />
        </div>
        <div>
          <ul className={styles.tags}>
            {result.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>어울리는 토이</h4>
          <div>당신은 처음보자마자 그녀는 ..</div>
        </div>
        <div>
          <h4>어울리는 컬러 무드</h4>
          <div>당신을 처음 보자마자</div>
        </div>
      </div>
      <div className={styles.subMood}>
        <h4 className={styles.menuTitle}>서브무드</h4>
        <div className={styles.subDetails}>
          <div className={styles.menuDesc}>당신에게 은밀하게 풍기는 분위기</div>
        </div>
      </div>
      <div className={styles.buttons}>
        <button type='button'>
          <img src={LinkIcon} alt='' />
          <div>
            <div>링크 복사</div>
            <div>Link copy</div>
          </div>
        </button>
        <button type='button'>
          <img src={RetryIcon} alt='' />
          <div>
            <div>다시 하기</div>
            <div>Do it again</div>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Result
