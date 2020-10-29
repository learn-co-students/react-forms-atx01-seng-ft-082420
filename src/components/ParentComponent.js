import React from 'react'
import { render } from 'react-dom'
import Form from './Form'
import DisplayData from './DisplayData'

export default class ParentComponent extends React.Component {
    state = {
        firstName: "",
        lastName: "",
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // handleFirstNameChange = event => {
    //     // console.log(event.target.value)
    //     this.setState({
    //         firstName: event.target.value
    //     })
    // }

    // handleLastNameChange = event => {
    //     // console.log(event.target.value)
    //     this.setState({
    //         lastName: event.target.value
    //     })
    // }

    render() {
        return (
            <div>
                <Form
                    formData={this.state}
                    handleChange={this.handleChange}
                    // handleFirstNameChange={this.handleFirstNameChange}
                    // handleLastNameChange={this.handleLastNameChange}
                />
                <DisplayData formData={this.state} />
            </div>
        )
    }
}