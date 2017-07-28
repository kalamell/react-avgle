import React, { Component } from 'react';
import ListCategories from './components/ListCategories';
import ListVideoes from './components/ListVideoes';

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <ListCategories style={style.list}/>
        </div>
        <div className="col-md-9">
          <ListVideoes style={style.list}/>
        </div>
      </div>
    );
  }
}

const style = {
  list: {
    marginBottom: '20px',
    marginTop: '20px'
  }
}

export default App;
