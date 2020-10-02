import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from './CounterButton'

export default class HomePage extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div style={{textAlign:'center', marginTop:'40px', fontSize: '2rem'}}>
                <span>0</span>
                <Button color={'lightgreen'}>Increment</Button>
                <Button color={'orange'}>Decrement</Button>
            </div>
        )
    }
}
