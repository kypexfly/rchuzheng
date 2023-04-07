import { createContext, useState } from 'react'

const HeadingsContext = createContext([])

export const HeadingsContextProvider = ({ children }) => {
  const [headings, setHeadings] = useState([])
  // console.log(headings)
  return (
    <HeadingsContext.Provider value={{ headings, setHeadings }}>
      {children}
    </HeadingsContext.Provider>
  )
}

export default HeadingsContext
