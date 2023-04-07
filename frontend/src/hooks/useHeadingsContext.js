import { useContext } from 'react'
import HeadingsContext from '../context/HeadingsContext'

const useHeadingsContext = () => {
  const context = useContext(HeadingsContext)
  if (!context) {
    throw Error('useHeadingsContext must be inside of HeadingsContextProvider.')
  }
  return context
}

export default useHeadingsContext
