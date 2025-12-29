import React from 'react'
import { SpeedInsights } from '@vercel/speed-insights/react'
// import Parent from './components/Parent'
// import Child from './components/Child'
// import Parent2 from './components/ChildToParent/Parent2'
// import Todolist from './components/Todolist/Todolist'
// import NewsHome from './components/Weather/NewsHome'
import Newsapp from './components/NewsApp/Newsapp'
// import AccountHome from './components/Account/AccountHome'

const App = () => {
  return (
    <>
      {/* <Parent /> */}
      {/* <Child /> */}
      {/* <Parent2 /> */}
      {/* <Todolist /> */}
      {/* <NewsHome /> */}
      <Newsapp />
      <SpeedInsights />
      {/* <AccountHome /> */}
    </>
  )
}

export default App