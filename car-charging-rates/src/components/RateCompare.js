import { Component } from 'react'
import { connect } from 'react-redux'
import { CanvasJSChart } from 'canvasjs-react-charts'
import { Link } from 'react-router-dom'

class RateCompare extends Component {
    

    render() {
        const { calc } = this.props
        const { altEvs, altHomes, yearlyEv, yearlyHome } = calc
        const formattedHomeData = Object.keys(altHomes).map((key) => {
            return {
                y: altHomes[key], label: key
            }
        }).concat({y: Object.values(yearlyHome)[0], label: `${Object.keys(yearlyHome)[0]}(Your chosen rate)`})

        const formattedEvData = Object.keys(altEvs).map((key) => {
            return {
                y: altEvs[key], label: key
            }
        }).concat({y: Object.values(yearlyEv)[0], label: `${Object.keys(yearlyEv)[0]}(Your chosen rate)`})

        let altTotals = {}

        Object.keys(altHomes).forEach((key) => {
            altTotals[key] = altHomes[key] + altEvs[key]
        })

                                                                                                                         
        const minAltCost = Math.min(...Object.values(altTotals))
        const cheapestAltRate = Object.keys(altTotals).find((key) => altTotals[key] === minAltCost)

        const cost = Object.values(yearlyEv)[0] + Object.values(yearlyHome)[0]

        console.log("Cheapest alternate cost: ", minAltCost)

        const options = {
            title: {
                text: "Yearly Costs Compared"
            },
            data:[
             {
                type: "stackedColumn",
                legendText: "Yearly Home Load",
                showInLegend: true,
                dataPoints: formattedHomeData
                
            },
                {
                type: "stackedColumn",
                legendText: "Yearly Ev Load",
                showInLegend: true,
                dataPoints: formattedEvData
            }]

        }
        return(
            <div className='rate-compare-main'>
                <div className='rate-compare-chart'>
                    {this.props.loading === true
                    ? null
                    : <CanvasJSChart options={options}/>
                    }  
                </div>
                <div className='rate-compare-text'>
                    <p>{`At your current rate, your total electrical bill would be $${(cost/12).toFixed(2)} monthly`}</p>
                    {cost > minAltCost 
                    ? <p>{`You could save $${((cost - minAltCost)/12).toFixed(2)} monthly by switching to ${cheapestAltRate}(${this.props.rates[cheapestAltRate].description})`}</p>
                    : <p>{`This plan will save you at least $${((minAltCost - cost)/12).toFixed(2)} monthly`}</p>}    
                </div>
                <Link to='/'>Go back</Link> 
            </div>
        )
    }
}

function mapStateToProps({ calc, rates }){
    return {
        calc,
        rates,
        loading: Object.keys(calc).length === 0
    }
}

export default connect(mapStateToProps)(RateCompare)