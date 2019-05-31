import React, { Component } from 'react'
import LinkedIn from '../../ressources/logo/Linkedin_circle.svg_.png'
//styles
import '../../styles/App.scss'

class Banner extends Component {
    constructor(props) {
        super(props) 
        
        this.state = {
        
        }
    }

    render() {
        
        return (
            <div className='banner' >
                <div className='bannerContent'>
                    <h1 className='name'>
                        Aurélia Vacher
                    </h1>
                    <p className='function'>
                        Full-Stack Developer
                    </p>
                    <a 
                        className='float-right' 
                        href='https://www.linkedin.com/in/aurelia-vacher' 
                        title='LinkedIn' 
                        target='_blank' 
                        rel='noopener noreferrer'
                    >
                        <img src={LinkedIn} className="LinkedIn" alt="LinkedIn" />
                    </a>
                    
                </div>
            </div>
        )
    }
}

export default Banner