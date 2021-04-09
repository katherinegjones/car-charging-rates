import { Component } from 'react';
import './App.css';
import InputForm from './components/InputForm'
import RateCompare from './components/RateCompare'
import { getRateOptions } from './utils/_DATA'
import { BrowserRouter as Router, Route } from 'react-router-dom' 


class App extends Component {
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

  handleSubmit = (yearlyEv, altEvs, yearlyHome, altHomes) => {
    this.setState(() => ({
      ...this.state,
      yearlyEv,
      altEvs,
      yearlyHome,
      altHomes
    }))
  }

  render(){
    const { yearlyEv, altEvs, yearlyHome, altHomes } = this.state
    return (
      <Router>
        <div className="App">
          <Route exact path ='/' render={() => {
            <InputForm rateOptions={this.state ? this.state.rateOptions : null}/>
          }}/>
          <Route exact path='/results' render={() => {
            <RateCompare 
              yearlyEv={yearlyEv}
              altEvs={altEvs}
              yearlyHome={yearlyHome}
              altHomes={altHomes}
            />
          }}/>
               
        </div>
      </Router>
    );
    }
}
export default App;
