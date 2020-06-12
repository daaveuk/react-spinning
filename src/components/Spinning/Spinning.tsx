import * as React from 'react'
import styles from './Spinning.module.css'

export interface SpinningProps {}

const Spinning: React.SFC<SpinningProps> = ({ children }) => {
  return <div className={styles.spinning}>{children}</div>
}

export default Spinning
