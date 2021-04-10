import { Component } from 'react'

export default class ChargingHours extends Component {
    onSelect = (e, isPM) => {
        e.preventDefault()

        const hour = isPM === true ? e.target.id + 12 : e.target.id

        this.props.handleSelect(hour)
    }
     render(){
        const { hours } = this.props
        const defaultStyle={}
        const selectedStyle={color: 'green'}
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
                            onClick={(event) => this.onSelect(event, false)}
                            style={hours.includes(key) ? selectedStyle : defaultStyle}
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