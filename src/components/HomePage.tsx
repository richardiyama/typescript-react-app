import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from './CounterButton'

export default class HomePage extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <Button color={'lightgreen'}>Increment</Button>
            </div>
        )
    }
}
