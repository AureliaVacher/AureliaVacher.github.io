import React, { Component } from 'react'
//styles
import '../../styles/App.scss'

class SkillsCards extends Component {
    constructor(props) {
        super(props) 
        
        this.state = {
        
        }
    }

    render() {
        return (
            <div className='skillsCards' >
               <div className='skillsCardsContent'>
                    piou
               </div>

               <div className='skillsCardsContent'>
                   plouf
               </div>

               <div className='skillsCardsContent'>
                   ahhhh
               </div>
            </div>
        )
    }
}

export default SkillsCards