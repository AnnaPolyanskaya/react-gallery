import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';



import FullImg from './Components/FullImg/FullImg.js';
import ImgsList from './Components/ImgsList/ImgsList.js';




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      url: ''
    }

    this.fullScreenImage = this.fullScreenImage.bind(this);
  }


  fullScreenImage(url) {
    this.setState({ url: url });
  }

  render() {
    return (
      <div className="App">
           <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={() => (
                      <ImgsList fullScreenImage={this.fullScreenImage} />
                    )}/>
                      
                    
                    
                    <Route path="/fullimage">
                        <FullImg url={this.state.url} />
                    </Route>
                </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
