import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Slider from 'react-rangeslider'
import ChargingHours from './ChargingHours'
import { handleCalcResults } from '../actions/calc'
import '../stylesheets/input-form.css'


class InputForm extends Component {
    state = {
        rateOption: '',
        monthlyMiles: 1000,
        hours: [],
        toResults: false
    }

    handleSelectRate = (e) =>{ 
        e.preventDefault()
            console.log("Rate selected: ", e.currentTarget.id)
            this.setState(() => ({
                rateOption: e.target.id
            }))
        }
    

    handleSelectHour = (hour) => {
        console.log("Hour selected: ", hour)
        this.setState((curState) => ({
            hours: curState.hours.concat(hour)
        }))
    }

    handleChangeMiles = value => this.setState(() => ({
        monthlyMiles: value
    }))

    onSubmit = (e) => {
        e.preventDefault()

        const { rateOption, monthlyMiles, hours } = this.state

        this.props.dispatch(handleCalcResults({rate: rateOption, mileage: monthlyMiles, hours}))
        .then(() => {
            this.setState(() => ({
                toResults: true
            }))
        })
    }

    render(){
        const { rateOption, monthlyMiles, hours, toResults } = this.state
        const { rates } = this.props
        const selectedStyle = {
            color: '#f89439',
            backgroundColor: '#121922',
            border: '3px solid white', 
            boxShadow: '0px 0px 5px #636363'}
        const defaultStyle = {} 
        const formatMiles = value => value + 'miles/month'
        if (toResults === true){
            return <Redirect to='/results'/>
        }
        return(
            <div className='input-form-main'>
                <div className='header'>
                    <h1>Calculate and Compare your Electric Bill</h1>
                </div>
                <h2>Please select your current electrical rate:</h2>
                <div className='rate-selection-container'>
                    {Object.keys(rates).map((option) => {
                        return (
                            <button 
                            key={option} 
                            id={option} 
                            className='rate-selection' 
                            onClick={this.handleSelectRate}
                            style={rateOption === option ? selectedStyle : defaultStyle}
                            >
                                {`${rates[option].name}: ${rates[option].description}`}

                            </button>
                            )
                    })}
                </div>
                <h2>On average, how many miles do you drive monthly?</h2>
                <div className='range-slider'>
                    <Slider 
                        min={100}
                        max={5000}
                        step={100}
                        value={monthlyMiles}
                        handleLabel={monthlyMiles.toString()}
                        format={formatMiles}
                        onChange={this.handleChangeMiles}
                    />
                </div>
                <p className='monthly-miles-display'>{formatMiles(monthlyMiles)}</p>
                <div className='charging-hours-container'>
                    <h2>During which hours of the day do you typically plan to charge your electric vehicle?</h2>
                    <p>(Select as many hours as you like)</p>
                    <ChargingHours handleSelect={this.handleSelectHour} hours={this.state.hours}/>
                </div>
                    <button className = 'submit-button' disabled={rateOption === '' | hours.length === 0} onClick={this.onSubmit}>Submit</button>
                
            </div>
        )
    }
}

function mapStateToProps({ rates }) {
    return{
        rates
    }
}

export default connect(mapStateToProps)(InputForm)
