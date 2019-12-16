import React, { Component } from 'react'
import Chart from "chart.js";


export default class BarGraph extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        const  chartTitle  = this.props.title
        const { barData } = this.props
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            responsive:true,
            type: "bar",
            data: {
                //Bring in data
                "labels" : ["January", "February", "March","April","May","June","July","August","September","October","November","December"],
                datasets: [barData]
            },
            options: {
                tooltips: {
                    callbacks: {
                       label: function(tooltipItem) {
                              return tooltipItem.yLabel;
                       }
                    }
                },
                title: {
                    display: false,
                    fontSize:10,
                    padding:0,
                    text: chartTitle
                },
                scales: {
                    yAxes: [{
                        ticks: {
                             stepSize:30,
                             fontSize : 8,
                             beginAtZero: true
                }
            }],
            xAxes: [{
                ticks: {
                     display : false,
                     beginAtZero: true,
                     fontSize : 8
        }
    }]
        },
        legend:{
            display:true,
            fontSize:1,
            fontColor:'#666',

        }
    
    }
        });
    }
    render() {
        return (
            <div style={{width:200 ,height:200 }}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                    
                />
            </div>
        )
    }
}
