import React, {useContext, useEffect} from 'react'
import {NewsContext} from '../../context/NewsAppContext'
import { useParams } from "react-router-dom";


const NewsApi = () => {
  const {input, language, setError, setNews, setInput} = useContext(NewsContext)
  useEffect(()=>{
    async function getNews(){
      try {
        const res = await fetch(`https://newsapi.org/v2/everything?q=${input}&language=${language}&apiKey=d36d93c8848645b8aaac072c0a005665`)
        const data = await res.json()
        setNews(data)
      } catch (err) {
        setError(err.message)
      }
    }
    getNews()
  },[input, language])

  return (
    <>
    </>
  )
}

export default NewsApi