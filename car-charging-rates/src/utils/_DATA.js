import hourly_rates from './hourlyRates'

let rateOptions = {
    rateA: {
        name: 'Rate A',
        description: 'flat rate of $0.15/kWh',
        homeLoad: 1350.56, //pre-calculated sum of provided home load * rate of $0.15; could be changed to function to input different home loads
        evDaily: hours => hours.length * .15 
    },
    rateB: {
        name: 'Rate B',
        description: '$0.20/kWh peak hours (12pm - 6pm), $0.08 offpeak',
        homeLoad: hourly_rates.reduce((accum, curr, ind) => {// could be changed so home load values are not hard coded, similar to evDailys function
            const modded = (ind + 1) % 24
            const peak = modded >= 18 && modded < 24 
            const cost = peak ? curr * .2 : curr * .08
            return cost + accum 
        }, 0),
        evDaily: hours => hours.reduce((accum, curr) => { 
            const peak = curr >= 18 && curr < 24
            const cost = peak ?  .2 : .08
            return cost + accum
        }, 0)  
    }
} 

let calc = {
    yearlyEv: 0,
    altEvs: [],
    yearlyHome: 0,
    altHomes: []
}

export function getRateOptions() { // async function with timeout to get rate options and calculate homeLoads
    return new Promise((res, rej) => {
        setTimeout(() => res({...rateOptions}), 1500)
    })
}



const letterId = String.fromCharCode(Object.keys(rateOptions).length + 65)

function formatRateOption(option) {
    return {
        name: `Rate ${letterId}`,
        description: option.description,
        homeLoad: option.homeLoad(hourly_rates),
        evDaily: option.evDaily
    }
}


export function addRateOption(info){ //this function is not used currently; would need to add separate component with form
    return new Promise((res, rej) => {
        const optionId = `rate${letterId}`
        const formattedOption = formatRateOption(info)
        setTimeout(() => {
            rateOptions =  {
            ...rateOptions,
            [optionId]: formattedOption
        }
        res(rateOptions)
    }, 1000)
})



}


export function calcResults({rate, mileage, hours}){
    return new Promise((res, rej) => {
        const yearlyHoursNeeded = .3 * mileage * 12 //kWh needed per year according to driving habits
        const daysNeeded = yearlyHoursNeeded/(hours.length) //num days customer needs to follow charging schedule each year
        const yearlyEv = {[rate]: rateOptions[rate].evDaily(hours) * daysNeeded}
        const yearlyHome = {[rate]: rateOptions[rate].homeLoad}
        const altKeys = Object.keys(rateOptions).filter((option) => option !== rate)
        let altEvs = {}
        let altHomes = {}
        altKeys.forEach((key) => {
            altEvs[key] = rateOptions[key].evDaily(hours) * daysNeeded
            altHomes[key] = rateOptions[key].homeLoad
        })
        setTimeout(() => {
        calc = {
            yearlyEv: yearlyEv,
            altEvs: altEvs,
            yearlyHome: yearlyHome,
            altHomes: altHomes,
        }
        res(calc)
        }, 1000)
    })

}