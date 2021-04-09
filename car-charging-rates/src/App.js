import { Component } from 'react';
import './App.css';
import InputForm from './components/InputForm'
import { getRateOptions } from './utils/_DATA' 


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
  render(){
    return (
      <div className="App">
          <InputForm rateOptions={this.state ? this.state.rateOptions : null}/>   
      </div>
    );
    }
}
export default App;
