import { Component } from 'react'
import Slider from 'react-rangeslider'
import ChargingHours from './ChargingHours'
import 'react-range-slider/lib/index.css'
import { Link } from 'react-router-dom'

export default class InputForm extends Component {
    state = {
        chargeRate: '',
        monthlyMiles: 1000,
        hours: []
    }

    handleSelectRate = (e) => {
        if (e.target.tagName === 'H3'){
            this.setState(() => ({
                chargeRate: e.target.innerHTML[5]
            }))
        }
    }

    handleSelectHour = (hour) => {
        this.setState((curState) => ({
            hours: curState.hours.concat(hour)
        }))
    }

    handleChangeMiles = value => this.setState(() => ({
        monthlyMiles: value
    }))

    render(){
        const { chargeRate, monthlyMiles, hours } = this.state 
        const formatMiles = value => value + 'miles/month'
        return(
            <div className='input-form-main'>
                <h2>Please select your current electrical rate:</h2>
                <div className='rate-selection'>
                    <h3>Rate A: $0.15/kWh</h3>
                </div>
                <div className='rate-selection'>
                    <h3>Rate B: $0.20/kWh peak hours (12pm - 6pm), $0.08 offpeak</h3>
                </div>
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
                <Link to='/results'>
                    <button disabled={chargeRate === '' | hours.length === 0}>Submit</button>
                </Link>

            </div>
        )
    }
}