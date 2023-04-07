import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
  const [settings, setSettings] = useState({ theme: 'dark' })
  const storedSettings = JSON.parse(localStorage.getItem('settings'))

  useEffect(() => {
    if (storedSettings !== null) {
      setSettings(storedSettings)
    }
  }, [])

  // console.log('ThemeContext state:', settings)

  return (<ThemeContext.Provider value={{ settings, setSettings }}>
    {children}
  </ThemeContext.Provider>)
}
