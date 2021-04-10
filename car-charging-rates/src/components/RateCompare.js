import { Component } from 'react'
import { connect } from 'react-redux'
import { CanvasJSChart } from 'canvasjs-react-charts'

class RateCompare extends Component {
    render() {
        const { calc } = this.props
        const formattedHomeData = Object.keys(calc.altHomes).map((key) => {
            return {
                y: calc.altHomes[key], label: key
            }
        }).concat({y: Object.values(calc.yearlyHome)[0], label: `${Object.keys(calc.yearlyHome)[0]}(Your chosen rate)`})

        const formattedEvData = Object.keys(calc.altEvs).map((key) => {
            return {
                y: calc.altEvs[key], label: key
            }
        }).concat({y: Object.values(calc.yearlyEv)[0], label: `${Object.keys(calc.yearlyEv)[0]}(Your chosen rate)`})
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

function mapStateToProps({ calc }){
    return {
        calc
    }
}

export default connect(mapStateToProps)(RateCompare)