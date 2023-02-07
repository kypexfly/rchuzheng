import { useEffect, useState } from 'react'
import {Brightness2, Moon} from 'tabler-icons-react'

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light')

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button onClick={handleClick}>{theme === "light" ? <Moon/> : <Brightness2/>}</button>
  )
}
