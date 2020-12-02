import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
// services
import { getNews } from '../../services/news-api';
// components
import LoginPage from '../LoginPage/LoginPage';
import NewsPage from '../NewsPage/NewsPage';

class App extends Component {

  state = {
    user: '',
    newUser: 'ENTER YOUR NAME',
    articles: []
  }

  async componentDidMount () {
    const headlines = await getNews();
    // console.log(headlines)
    this.setState({articles : headlines.articles})
  }  

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  addUser = (e) => {
    e.preventDefault();
    // Using the "function" approach because relying on existing state
    this.setState(state => ({
      user: state.newUser,
      //Reset the input for better UX
      newUser: 'ENTER YOUR NAME'
    }));
    // const { history } = this.props
    // this.history.push('/newspage');
  };

  removeUser = () => {
    this.setState({
      user:''
    });
  }

  render() {
    console.log(this.state.articles)
    console.log(this.state.user)
    return (
      <div className="App">
        <header className="App-header">
          J-NEWS
        </header>
        <Switch>
        <Route exact path='/'  render={(props) => (
          <LoginPage 
            value={this.state.newUser} 
            handleChange={this.handleChange} 
            addUser={this.addUser}
            user={this.state.user} 
            {...props}/> 
          )}
        />
        <Route exact path='/newspage' render={(props) => 
          <NewsPage 
            articles={this.state.articles}
            user={this.state.user}
            removeUser={this.removeUser}
          />
        } />
        </Switch>
      </div>
    );
  }
}

export default App;
