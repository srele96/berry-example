import { useEffect, useState } from 'react'
import Test from './Test'
import styles from './App.module.scss'

const a = () =>
  new Promise((resolve, reject) => {
    resolve('asd')
  })

export default function App() {
  const [s, setS] = useState(10)

  useEffect(() => {
    ;(async () => {
      const s = await a()
      console.log(s)
    })()
  })

  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={() => setS((prevS) => (prevS += 1))}>inc {s}</button>
      <Test />
      <p className={styles.red}>Yo</p>
      <p>Yo</p>
      <p>Yo</p>
      <p>Yo</p>
      <p>Yo</p>
      <p>Yo</p>
      <p>Yo</p>
    </div>
  )
}
