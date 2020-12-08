import React, { Component } from 'react';
import axios from 'axios';
const API_URL = 'http://jsonplaceholder.typicode.com';

class App extends Component {
  state = {
    users: []
  }
  componentDidMount() {
    const url = `${API_URL}/users/`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ users: data })
      console.log(this.state.users)
     })
  }
  // [...]
}
export default App;