import { Component } from 'react'

export default class ChargingHours extends Component {
    render(){
        return(
            <div className='hours-main'>
                <div className='am-hours'>
                    {[...Array(12).keys()].map((key) => {
                        return (
                        <p>{`${key} AM`}</p>
                        )
                    })}
                </div>
                <div className='am-hours'>
                    {[...Array(12).keys()].map((key) => {
                        return (
                        <p>{`${key} PM`}</p>
                        )
                    })}
                </div>
            </div>
        )
    }
}