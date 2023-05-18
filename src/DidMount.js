
import React, { Component } from 'react';

class ExampleComponent extends Component {
  state = {
    data: null,
    loading: true,
    error: null
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => {
        this.setState({ data, loading: false });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return <p>Please Wait a While</p>;
    }

    if (error) {
      return <p>Ohh no data has been found || Error: || {error.message}</p>;
    }

    return (
      <div>
        <h1>Title: {data.title}</h1>
        <p>Body: {data.body}</p>
      </div>
    );
  }
}

export default ExampleComponent;
