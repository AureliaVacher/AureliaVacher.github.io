import React from 'react'
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
      <section className='App-title'>
        <Titles title={'Skills'}/>
      </section>
      <section className='App-skills'>
        <SkillsCards />
      </section>
      <section className='App-title'>
        <Titles title={'Portfolio'}/>
      </section>
      <section className='App-portfolio'>
        <PortfolioCards />
      </section>
    </div>
  )
}

export default App
