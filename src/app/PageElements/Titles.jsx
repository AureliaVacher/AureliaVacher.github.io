import React, { Component } from 'react'
import propTypes from 'prop-types'
//styles
import '../../styles/App.scss'

class Titles extends Component {
    static propTypes = {
        title : propTypes.string
    }   
    constructor(props) {
        super(props) 
        
        this.state = {
        
        }
    }

    render() {
        return (
            <div className='title' >
               {this.props.title}
            </div>
        )
    }
}

export default Titles