import { useState } from 'react'

const useHideButton = () => {
  const [isHide, setIsHide] = useState(0)

  const set = () => setIsHide(!isHide)

  return { isHide, set }
}

export default useHideButton
