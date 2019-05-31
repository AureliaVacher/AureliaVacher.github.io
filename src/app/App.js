import React from 'react'
import logo from '../ressources/logo/logo.svg'
import '../styles/App.scss'
import Banner from './PageElements/Banner'
import PortfolioCards from './PageElements/PortfolioCards'
import SkillsCards from './PageElements/SkillsCards'
import Titles from './PageElements/Titles'

function App() {
  return (
    <div className='App'>
      <header className="App-header">
        <Banner />
      </header>
      <div className='App-title'>
        <Titles title={'Skills'}/>
      </div>
      <div className='App-skills'>
        <SkillsCards />
      </div>
      <div className='App-title'>
        <Titles title={'Portfolio'}/>
      </div>
      <div className='App-portfolio'>
        <PortfolioCards />
      </div>
    </div>
  )
}

export default App
