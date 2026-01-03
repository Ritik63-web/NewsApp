import {useState, createContext} from 'react'

export const NewsContext = createContext()

export const NewsProvider = ({children}) =>{
  const [input, setInput] = useState(null)
  const [language, setLanguage] = useState('en')
  const [country, setCountry] = useState('in')
  const [error, setError] = useState(null)
  const [news, setNews] = useState([])

  return (
    <NewsContext.Provider value={{input, setInput, language, setLanguage, error, setError, news, setNews, country, setCountry}}>
      {children}
    </NewsContext.Provider>
  )
}