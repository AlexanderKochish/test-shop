import React from 'react'
import styles from './MyButton.module.css'

const MyButton = (props) => {
  return (
    <div>
      <button onClick={props.logout} className={styles.btn}>Logout</button>
    </div>
  )
}

export default MyButton