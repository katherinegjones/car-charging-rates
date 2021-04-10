import { Component, Fragment } from 'react';
import './App.css';
import InputForm from './components/InputForm'
import RateCompare from './components/RateCompare'
import { getRateOptions } from './utils/_DATA'
import { handleReceiveRates } from './actions/rates'
import { BrowserRouter as Router, Route, } from 'react-router-dom' 
import LoadingBar from 'react-redux-loading-bar'
import { connect } from 'react-redux'


class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleReceiveRates())
  }

  render(){
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          {this.props.loading === true 
          ? null
          : <div className='App'>
              <Route exact path ='/' component={InputForm}/>
              <Route exact path='/results' component={RateCompare}/>
            </div>
          }
        </Fragment>
      </Router>
    );
    }
}

function mapStateToProps({ rateOptions}) {
  return {
    loading: rateOptions === null
  }
}
export default connect(mapStateToProps)(App);
