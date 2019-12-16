import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Cards/Text';
import Grid from '@material-ui/core/Grid'
import LineGraph from './charts/LineGraph'
import PieGraph from './charts/PieGraph'
import BarGraph from './charts/BarGraph'
import PolarGraph from './charts/PolarGraph'
import jsondata from './charts/data.json'
import jsondata2 from './charts/data2.json'
import {withStyles} from '@material-ui/core/styles';

const styles = {
  root:{
    flexGrow:1,
  },
  navigation: {
    height: '8%',
  },
  grid: {
    padding: '1rem',
  },
  half: {
    height: '92%',
    width: '49%',
    position: 'fixed',
    bottom: 0,
    padding: '5px'
  },
  left: {
    left: 0,
    color:'white',
  },
  right: {
    right: 0,
    paddingLeft:"6rem",
    backgroundColor:'beige',
  },
  top: {
    height: '45%',
    top: 0,
    borderBottom: '1px dashed black',
    overflow: 'hidden',
    paddingBottom:'1rem',
    paddingTop:"1.2rem",
    paddingLeft:"1.5rem",
    backgroundColor:'#515A5A',
  },
  bottom: {
    height: '50%',
    bottom: 0,
    paddingLeft:"1.5rem",
    paddingTop:"0.1rem",
    backgroundColor:'#5D6D7E'
  }
};

const data = [
  { id: 0, title: jsondata.data1.label, value: "LineGraph1"},
  { id: 1, title: jsondata.data2.label, value: "BarGraph1"},
  { id: 2, title: jsondata.data3.label, value: "PieGraph1"},
  { id: 3, title: jsondata.data4.label, value: "PolarGraph1"},
  { id: 4, title: jsondata2.data1.label, value: "BarGraph2"},
  { id: 5, title: jsondata2.data2.label, value: "PieGraph2"},
  { id: 6, title: jsondata2.data3.label, value: "PolarGraph2"},
  { id: 7, title: jsondata2.data4.label, value: "LineGraph2"},
]

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      container: []
    }
  }

  onDragStart = (e, v) => {
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData("text/plain", v)
  }

  allowDrop = ev => {
    ev.preventDefault();
  }

  onDrop = e => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    let { container } = this.state;
    container.push(data);
    this.setState({ container });
  }

  render() {
    const { container } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.navigation}>
        <Navbar text={"Dynamic Personalized UI - Design"} />
        <div className={classes.grid}>
          <div className={`${classes.half} ${classes.left}`}>
            <div className={`${classes.top} ${classes.root}`} >
            <p style={{marginBottom:2, paddingLeft:"39%"}}>App 1</p>
              <Grid container spacing={0} >
                {data.map(i => {
                  if(i.value ==='LineGraph1'){
                    return  <Grid sm={5} xs={5} style={{padding:2}} draggable="true" onDragStart={(e) => this.onDragStart(e,i.value)}>
                          <Text style={{height:10}}><LineGraph lineData={jsondata.data1} title={i.title}/></Text>
                        </Grid>
                  }
                  if(i.value ==='PieGraph1'){
                    return  <Grid sm={5} xs={5} style={{padding:2}} draggable="true" onDragStart={(e) => this.onDragStart(e,i.value)}>
                          <Text><PieGraph pieData={jsondata.data3} title={i.title}/></Text>
                        </Grid>
                  }
                  if(i.value ==='BarGraph1'){
                    return  <Grid sm={5} xs={5} style={{padding:2}} draggable="true" onDragStart={(e) => this.onDragStart(e,i.value)}>
                          <Text><BarGraph barData={jsondata.data2} title={i.title}/></Text>
                        </Grid>
                  }
                  if(i.value ==='PolarGraph1'){
                    return  <Grid sm={5} xs={5} style={{padding:2}} draggable="true" onDragStart={(e) => this.onDragStart(e,i.value)}>
                          <Text><PolarGraph polarData={jsondata.data4} title={i.title}/></Text>
                        </Grid>
                  }
                })}

              </Grid>
            </div>

            <div className={`${classes.bottom} ${classes.root}`}>
            <p style={{marginBottom:2, paddingLeft:"39%"}}>App 2</p>
              <Grid container spacing={0} >
              
                {data.map(i => {
                  if(i.value ==='LineGraph2'){
                    return  <Grid sm={5} xs={5} style={{padding:2}} draggable="true" onDragStart={(e) => this.onDragStart(e,i.value)}>
                        <Text><LineGraph lineData={jsondata2.data4} title={i.title}/></Text>
                      </Grid>
                  }
                  if(i.value ==='PieGraph2'){
                    return  <Grid sm={5} xs={5} style={{padding:2}} draggable="true" onDragStart={(e) => this.onDragStart(e,i.value)}>
                        <Text><PieGraph pieData={jsondata2.data2} title={i.title}/></Text>
                      </Grid>
                  }
                  if(i.value ==='BarGraph2'){
                    return  <Grid sm={5} xs={5} style={{padding:2}} draggable="true" onDragStart={(e) => this.onDragStart(e,i.value)}>
                        <Text><BarGraph barData={jsondata2.data1} title={i.title}/></Text>
                      </Grid>
                  }
                  if(i.value ==='PolarGraph2'){
                    return  <Grid sm={5} xs={5} style={{padding:2}} draggable="true" onDragStart={(e) => this.onDragStart(e,i.value)}>
                        <Text><PolarGraph polarData={jsondata2.data3}  title={i.title}/></Text>
                      </Grid>
                  }
                })}
              </Grid>
            </div>
          </div>
          <Grid className={`${classes.half} ${classes.right}`} onDragOver={this.allowDrop} onDrop={this.onDrop} style={{overflow:"scroll"}}>
            {
              <Grid container spacing={3}  style={{paddingLeft:"1rem", paddingTop:"3rem"}}> 
              {
                container.map(i => {
                  if(i === 'LineGraph1'){
                    return <Grid sm={5} xs={5} style={{padding:2}}> <Text><LineGraph lineData={jsondata.data1} title={"jsondata.data1.label"}/></Text> </Grid>               
                  }
                  else if(i === 'PieGraph1'){
                    return <Grid sm={5} xs={5} style={{padding:2}}> <Text><PieGraph pieData={jsondata.data3} title={jsondata.data3.label}/></Text> </Grid>               
                  }
                  else if(i === 'BarGraph1'){
                    return <Grid sm={5} xs={5} style={{padding:2}}> <Text><BarGraph barData={jsondata.data2} title={jsondata.data2.label}/></Text> </Grid>               
                  }
                  else if(i === 'LineGraph2'){
                    return <Grid sm={5} xs={5} style={{padding:2}}> <Text><LineGraph lineData={jsondata2.data4} title={jsondata2.data4.label}/></Text> </Grid>               
                  }
                  else if(i === 'PieGraph2'){
                    return <Grid sm={5} xs={5} style={{padding:2}}> <Text><PieGraph pieData={jsondata2.data2} title={jsondata2.data2.label}/></Text> </Grid>               
                  }
                  else if(i === 'BarGraph2'){
                    return <Grid sm={5} xs={5} style={{padding:2}}> <Text><BarGraph barData={jsondata2.data1} title={jsondata2.data1.label}/></Text> </Grid>               
                  }
                  else if(i === 'PolarGraph1'){
                    return <Grid sm={5} xs={5} style={{padding:2}}> <Text><PolarGraph polarData={jsondata.data4} title={jsondata.data4.label}/></Text> </Grid>               
                  }
                  else if(i === 'PolarGraph2'){
                    return <Grid sm={5} xs={5} style={{padding:2}}> <Text><PolarGraph polarData={jsondata2.data3} title={jsondata2.data3.label}/></Text> </Grid>               
                  }

                })
              }
              </Grid>
            }
          </Grid>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(App)