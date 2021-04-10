import { Component } from 'react';
import './App.css';
import InputForm from './components/InputForm'
import RateCompare from './components/RateCompare'
import { getRateOptions } from './utils/_DATA'
import { BrowserRouter as Router, Route } from 'react-router-dom' 


class App extends Component {
  state = {
    rateOptions: {},
    calcs: {}

  }
  componentDidMount(){
    getRateOptions()
    .then((rateOptions) =>{
      console.log(rateOptions)
      this.setState(() => ({
        rateOptions
      }))
    }
    )
  }

  handleSubmit = (calcs) => {
    this.setState(() => ({
      calcs
    }))
  }

  render(){
    return (
      <Router>
        <div className='App'>
          <Route exact path ='/' render={() => {
            <InputForm rateOptions={this.state.rateOptions}/>
          }}/>
          <Route exact path='/results' render={() => {
            <RateCompare calcs={this.state.calcs}/>
          }}/>
               
        </div>
      </Router>
    );
    }
}
export default App;
