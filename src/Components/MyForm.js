import React, { Component } from 'react';

class MyForm extends Component {
  state = {
    name: '',
    email: '',
    message: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // Process form submission logic here
    console.log(this.state);
  };

  handleButtonClick = () => {
    // Perform additional actions before form submission if needed
    // ...
    
    // Call the submit function
    this.handleSubmit();
  };

  render() {
    const { name, email, message } = this.state;

    return (
      <div>
        <h1>Contact Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Message:
            <textarea
              name="message"
              value={message}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="button" onClick={this.handleButtonClick}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default MyForm;
