import { Component } from 'react'
import Slider from 'react-range-slider'

export default class InputForm extends Component {
    state = {
        chargeRate: '',
        monthlyMiles: 1000,
    }


    render(){
        const formatMiles = this.state.monthlyMiles + 'miles/month'
        return(
            <div className='input-form-main'>
                <h2>Please select your current electrical rate:</h2>
                <div>
                    <h3>Rate A: $0.15/kWh</h3>
                </div>
                <div>
                    <h3>Rate B: $0.20/kWh peak hours (12pm - 6pm), $0.08 offpeak</h3>
                </div>
                <input
                    placeholder='Please select average monthly miles'
                ></input>
                <Slider 
                    min={100}
                    max={5000}
                    step={100}
                    value={this.state.monthlyMiles}
                    handleLabel={this.state.monthlyMiles}
                    format={formatMiles}
                />
            </div>
        )
    }
}