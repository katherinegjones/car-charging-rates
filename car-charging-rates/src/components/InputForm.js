import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Slider from 'react-rangeslider'
import ChargingHours from './ChargingHours'
import { handleCalcResults } from '../actions/calc'


class InputForm extends Component {
    state = {
        rateOption: '',
        monthlyMiles: 1000,
        hours: [],
        toResults: false
    }

    handleSelectRate = (e) => {
        if (e.target.tagName === 'H3'){
            console.log("Rate selected: ", e.currentTarget.id)
            this.setState(() => ({
                rateOption: e.currentTarget.id
            }))
        }
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

    onSelect = (e) => {
        e.preventDefault()

        const { rateOption, monthlyMiles, hours } = this.state

        handleCalcResults({rate: rateOption, mileage: monthlyMiles, hours})
        this.setState(() => ({
            toResults: true
        }))
    }

    render(){
        const { rateOption, monthlyMiles, hours, toResults } = this.state
        const { rates } = this.props
        const styleSelected = {}
        const styleUnselect = {} 
        const formatMiles = value => value + 'miles/month'
        if (toResults === true){
            return <Redirect to='/results'/>
        }
        return(
            <div className='input-form-main'>
                <h2>Please select your current electrical rate:</h2>
                {Object.keys(rates).map((option) => {
                    return (
                        <div 
                        key={option} 
                        id={option} 
                        className='rate-selection' 
                        onClick={this.handleSelectRate}
                        style={rateOption === option ? styleSelected : styleUnselect}
                        >
                            <h3>{`${rates[option].name}: ${rates[option].description}`}</h3>

                        </div>
                        )
                })}
                
                <h2>What is your average monthly miles driven?</h2>
                <Slider 
                    min={100}
                    max={5000}
                    step={100}
                    value={monthlyMiles}
                    handleLabel={monthlyMiles.toString()}
                    format={formatMiles}
                    onChange={this.handleChangeMiles}
                />
                <p>{formatMiles(monthlyMiles)}</p>
                <ChargingHours handleSelect={this.handleSelectHour}/>
                    <button disabled={rateOption === '' | hours.length === 0}>Submit</button>

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
