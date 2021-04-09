import { Component } from 'react'

export default class ChargingHours extends Component {
    onSelect = (e) => {
        e.preventDefault()

        const hour = e.target.id + 1

        const adjusted = e.target.innerHTML.includes('PM') ? hour + 12 : hour 

        this.props.handleSelect(adjusted)
    }
     render(){
        return(
            <div className='hours-main'>
                <div className='am-hours'>
                    {[...Array(12).keys()].map((key) => {
                        return (
                        <button id={key} onClick={this.onSelect}>
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
                        <button id={key} onClick={this.onSelect}>
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