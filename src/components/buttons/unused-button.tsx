// export UnusedButton, used by ["./index.ts"]

import { useState } from 'react'

export const UnusedButton = () => {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  )
}
