import { Component } from 'react'

class ChargingHours extends Component {
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
            </div>
        )
    }
}