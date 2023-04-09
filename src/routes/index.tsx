import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Test from './Test'
import Result from './Result'

import styles from './routes.module.scss'

const App = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/test' element={<Test />} />
          {/* TODO: Loading 컴포넌트 */}
          <Route path='/result/:type' element={<Result />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
