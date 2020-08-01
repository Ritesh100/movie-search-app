import React from 'react';
import './App.css';
import SearchMovies from './SearchMovie';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Movie Search App</h1>
        <SearchMovies />
        <p>Developed By : Sajan Kc</p>
      </div>
    );
  }
}

export default App;
