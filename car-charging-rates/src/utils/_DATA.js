import hourly_rates from './hourlyRates'

let rateOptions = {
    rateA: {
        name: 'Rate A',
        description: 'flat rate of $0.15/kWh',
        homeLoad: 1350.56, //pre-calculated sum of provided home load * rate of $0.15; could be changed to function to input different home loads
        evLoad: hours => hours.reduce((accum, curr) => accum + curr, 0) * .15 
    },
    rateB: {
        name: 'Rate B',
        description: '$0.20/kWh peak hours (12pm - 6pm), $0.08 offpeak',
        homeLoad: hourly_rates.reduce((accum, curr, ind) => {// could be changed so home load values are not hard coded, similar to evLoads function
            const modded = (ind + 1) % 24
            const peak = modded > 18 && modded <= 24 
            const cost = peak ? curr * .2 : curr * .08
            return cost + accum 
        }, 0),
        evLoad: hours => hours.reduce((accum, curr) => {
            const peak = curr > 18 && curr <= 24
            const cost = peak ? curr * .2 : curr * .08
            return cost + accum
        }, 0)  
    }
} 

export function getRateOptions() {// async function with timeout to get rate options and calculate homeLoads
    return new Promise((res, rej) => {
        setTimeout(() => res(...rateOptions), 1500)
    })
}

export function addRateOption(description, homeLoadReducer, evLoadReducer){ //this function is not used currently; would need to add separate component with form
    return new Promise((res, rej) => {
        const next = Object.keys(rateOptions).length
        const letter = String.fromCharCode(next + 65)
        const optionId = `rate${letter}`
        setTimeout(() => {
            rateOptions =  {
            ...rateOptions,
            [optionId]: {
                name: `Rate ${letter}`,
                description: description,
                homeLoad: homeLoadReducer(hourly_rates),
                evLoad: evLoadReducer
            }
        }
        res(rateOptions)
    }, 1000)
})



}