import { Component } from 'react'
import '../stylesheets/input-form.css'

export default class ChargingHours extends Component {
    onSelect = (e, isPM) => {
        e.preventDefault()

        const hour = isPM === true ? parseInt(e.target.id) + 12 : parseInt(e.target.id)

        this.props.handleSelect(hour)
    }
     render(){
        const { hours } = this.props
        const defaultStyle={}
        const selectedStyle={
            color: '#f89439',
            backgroundColor: '#121922',
            border: '3px solid white', 
            boxShadow: '0px 0px 5px #636363'}
        return(
            <div className='hours-main'>
                <div className='am-hours'>
                    {[...Array(12).keys()].map((key) => {
                        return (
                        <button 
                            key={key} 
                            id={key} 
                            onClick={(event) => this.onSelect(event, false)}
                            style={hours.includes(key) ? selectedStyle : defaultStyle}
                            >
                            {key > 0 
                            ? key < 11 
                            ? `${key}AM - ${key + 1}AM`
                            : '11AM - 12PM'
                            : '12AM - 1AM'
                            }
                        </button>
                        )
                    })}
                </div>
                <div className='pm-hours'>
                    {[...Array(12).keys()].map((key) => {
                        return (
                        <button key={key} 
                            id={key} 
                            onClick={(event) => this.onSelect(event, true)}
                            style={hours.includes(key + 12) ? selectedStyle : defaultStyle}
                            >
                            {key > 0 
                            ? key < 11 
                            ? `${key}PM - ${key + 1}PM`
                            : '11PM - 12AM'
                            : '12PM - 1PM'
                            }
                        </button>
                        )
                    })}
                </div>
            </div>
        )
    }
}