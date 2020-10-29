import React from 'react';

class Form extends React.Component {

  render() {
    return (
      <div className="submit">
        <form>
          <input type="text" name="firstName" onChange={event => this.props.handleChange(event)} value={this.props.formData.firstName}/>
          <input type="text" name="lastName" onChange={event => this.props.handleChange(event)} value={this.props.formData.lastName} />
        </form>
      </div>
    )
  }
}

export default Form;

  // handleSubmit = event => {
  //   event.preventDefault()
  //   let formData = { firstName: this.state.firstName, lastname: this.state.lastName }
  //   let dataArray = this.state.submittedData.concat(formData)
  //   this.setState({
  //     submittedData: dataArray
  //   })
  // }

  // listOfSubmissions = () => {
  //   return this.state.submittedData.map(data => {
  //     return <div>
  //       <span>{data.firstName}</span>
  //       <span>{data.lastName}</span>
  //     </div>
  //   })
  // }