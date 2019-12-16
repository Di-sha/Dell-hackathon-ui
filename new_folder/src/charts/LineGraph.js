import React, { Component } from 'react'
import Chart from "chart.js";

export default class LineGraph extends Component {
    chartRef = React.createRef();
       
    componentDidMount() {
       const chartTitle = this.props.title
        const { lineData } = this.props
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            responsive:true,
            type: "line",
            data: {
                //Bring in data
                "labels" : ["January", "February", "March","April","May","June","July","August","September","October","November","December"],
                
                datasets: [
                    lineData
                ]
            },
            options: {
                legend: {
                    display: true,
                    fontSize:1,                   
                
                },
                tooltips: {
                    callbacks: {
                       label: function(tooltipItem) {
                              return tooltipItem.yLabel;
                       }
                    }
                },
                // title: {
                //     display: true,
                //     fontSize:10,
                //     padding:0,
                //     text: chartTitle
                // },
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
                             fontSize : 8,
                             beginAtZero: true
                }
            }]
            }
        }
    });
    }
    render() {
        return (
            <div style={{width:200 ,height:200,padding:0 }}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                    
                />
            </div>
        )
    }
}
