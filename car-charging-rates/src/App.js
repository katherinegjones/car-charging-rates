import { Component, Fragment } from 'react';
import './App.css';
import './stylesheets/index.css'
import InputForm from './components/InputForm'
import RateCompare from './components/RateCompare'
import { handleReceiveRates } from './actions/rates'
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import LoadingBar from 'react-redux-loading-bar'
import { connect } from 'react-redux'


class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleReceiveRates())
  }

  render(){
    const loadingStyle = {
      zIndex: '1',
      height: '10px',
      background: 'linear-gradient(to right, #121922 0%, #636363 100%)',
      borderBottomLeftRadius: '5px',
      borderBottomRightRadius: '5px'
  }
    return (
      <Router>
        <Fragment>
          <LoadingBar style={loadingStyle}/>
          <div>
            {this.props.loading === true 
            ? null
            : <div className='App'>
                <Route exact path ='/' component={InputForm}/>
                <Route exact path='/results' component={RateCompare}/>
              </div>
            }
          </div>
        </Fragment>
      </Router>
    );
    }
}

function mapStateToProps({ rates }) {
  return {
    loading: Object.keys(rates).length === 0
  }
}
export default connect(mapStateToProps)(App);
