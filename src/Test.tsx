import { useState } from 'react'

export default function Test() {
  const [testNum, setTestNum] = useState(0)

  return (
    <div>
      <button onClick={() => setTestNum((prevTestNum) => prevTestNum + 1)}>
        inc test {testNum}
      </button>
      <p>Yo</p>
      <p>Yo</p>
      <p>Yo</p>
      <p>Yo</p>
      <p>Yo</p>
      <p>Yo</p>
    </div>
  )
}
