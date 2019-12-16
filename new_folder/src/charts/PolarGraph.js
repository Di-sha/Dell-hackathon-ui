import React, { Component } from 'react'
import Chart from "chart.js";

export default class PolarGraph extends Component {
    chartRef = React.createRef();
       
    componentDidMount() {
       const chartTitle = this.props.title
        const { polarData } = this.props
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "polarArea",
            data: {
                //Bring in data
                labels:  ["January", "February", "March","April","May","June","July","August","September","October","November","December"],
                
                datasets: [
                    polarData
                ]
            },
            options: {
                legend: {
                    display: false
                },
                tooltips: {
                    display : true,
                    // callbacks: {
                    //    label: function(tooltipItem) {
                    //           return tooltipItem.yLabel;
                    //    }
                    //}
                },
                title: {
                    display: true,
                    fontSize:10,
                    padding:0,
                    text: chartTitle
                },
                scales: {
                    yAxes: [{
                        gridLines :{
                            color : '#ffffff',
                            drawBorder : false,
                            zeroLineColor:'transparent'},
                        ticks: {
                            stepSize:30,
                            beginAtZero: true,
                            display:false
                        }
                    }],
                    xAxes: [{
                        gridLines :{
                            color : '#ffffff',
                            drawBorder : false,
                            display:false,
                            zeroLineColor:'transparent'},
                        ticks: { 
                         display:false
                        }
                    }]
                },
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
