import React, {useEffect, useContext} from 'react'
import {NewsContext} from '../../context/NewsAppContext'


const NewsApi = () => {
  const {input, setNews, setError, language} = useContext(NewsContext)
  useEffect(()=>{
    async function getNews(){
      try {
        const news = await fetch(`https://newsapi.org/v2/everything?q=${input}&language=${language}&apiKey=d36d93c8848645b8aaac072c0a005665`)
        const newsData = await news.json()
        setNews(newsData)
      } catch (error) {
        setError(error)
      }
    }
    getNews()
  },[input, language])
  return (
    <></>
  )
}

export default NewsApi