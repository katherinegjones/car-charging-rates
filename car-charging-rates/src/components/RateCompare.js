import { Component } from 'react'
import { connect } from 'react-redux'
import { CanvasJSChart } from 'canvasjs-react-charts'

class RateCompare extends Component {
    render() {
        const { calcs } = this.props
        const formattedHomeData = Object.keys(calcs.altHomes).map((key) => {
            return {
                y: calcs.altHomes[key], label: key
            }
        }).concat({y: Object.values(calcs.yearlyHome)[0], label: `${Object.keys(calcs.yearlyHome)[0]}(Your chosen rate)`})

        const formattedEvData = Object.keys(calcs.altEvs).map((key) => {
            return {
                y: calcs.altEvs[key], label: key
            }
        }).concat({y: Object.values(calcs.yearlyEv)[0], label: `${Object.keys(calcs.yearlyEv)[0]}(Your chosen rate)`})
        const options = {
            title: {
                text: "Yearly Costs Compared"
            },
            data:[
             {
                type: "stackedColumn",
                legendText: "Yearly Home Load",
                showInLegend: true,
                dataPoints: [
                     {formattedHomeData}
                ]
            },
                {
                type: "stackedColumn",
                legendText: "Yearly Ev Load",
                showInLegend: true,
                dataPoints: [
                     {formattedEvData}
                ]
            }]

        }
        return(
            <div>
                <CanvasJSChart options={options}/>
            </div>
        )
    }
}

function mapStateToProps({ calcs }){
    return {
        calcs
    }
}

export default connect(mapStateToProps)(RateCompare)