import { Card, Grid, ThemeProvider, createTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CustomLineChart from '../line-chart'
import CentralConsole from '../central-console';
import StatusCard from '../status-card';
import axios from 'axios';

const styles = {
  cardStyles:{
    margin:{
        xs:"0.5rem",
        md:"1rem",
    },
    padding:{
        xs:"1rem",
        md:"1.5rem",
    },
    background:"#141B23",
    maxWidth:"600px",
  },
  dashboardContainer:{
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"flex-start",
    flexWrap:"wrap",
    "& tspan":{
      color:"white",
    }
  }
}

const Dashboard = () => {

  const [accXData, setAccXData] = useState([]);
  const [accYData, setAccYData] = useState([]);
  const [accZData, setAccZData] = useState([]);
  const [altiData, setAltiData] = useState([]);

  const newTheme = createTheme({ palette: { mode: "dark" } });

  const seriesXData = [         
    { data: accXData, label: `Acc(X) ${accXData[accXData.length-1]}m` },
  ];
  const seriesYData = [
    { data: accYData, label: `Acc(Y) ${accYData[accYData.length-1]}m` }
  ]
  const seriesZData = [
    { data: accZData, label: `Acc(Z) ${accZData[accZData.length-1]}m` }
  ]

  const altitudeData = [
    { data: altiData, label: `Altitude ${altiData[altiData.length-1]}` }
  ]

  const accSeriesData = [
    { data:accXData, label: `Acc(X) ${accXData[accXData.length-1]}m` },
    { data:accYData, label: `Acc(Y) ${accYData[accYData.length-1]}m` },
    { data:accZData, label: `Acc(Z) ${accZData[accZData.length-1]}m` }
  ]

  useEffect(()=>{

    const updateAccData = async()=>{
      const response = await axios.get("http://localhost:4400/accel");
      let tempX = accXData;
      let tempY = accYData;
      let tempZ = accZData; 
      tempX.push(response.data.accX);
      tempY.push(response.data.accY);
      tempZ.push(response.data.accZ);
      setAccXData([...tempX]);
      setAccYData([...tempY]);
      setAccZData([...tempZ]);
    }

    const updateAltitudeData = async()=>{
      const response = await axios.get("http://localhost:4400/alti")
      let tempA = altiData;
      tempA.push(response.data.altitude);
      setAltiData(tempA);
    }

    const updateAttributes = ()=>{
      updateAccData();
      updateAltitudeData();
    }

    const accTimeInterval = setInterval(updateAttributes,1000);

    return ()=>{
      clearInterval(accTimeInterval);
    }

  },[])

  return (
    <ThemeProvider theme={newTheme}>
      <Grid sx={styles.dashboardContainer}>
      <CentralConsole />
      <Card sx={styles.cardStyles}>
        <CustomLineChart 
          seriesData={seriesXData}
          width={500}
          height={300}
          sx={{color:"#CDCDCD !important"}}
        />
      </Card>
      <Card sx={styles.cardStyles}>
        <CustomLineChart 
          seriesData={seriesYData}
          width={500}
          height={300}
          sx={{color:"#CDCDCD !important"}}
        />
      </Card>
      <Card sx={styles.cardStyles}>
        <CustomLineChart 
          seriesData={seriesZData}
          width={500}
          height={300}
          sx={{color:"#CDCDCD !important"}}
        />
      </Card>
      <Card sx={styles.cardStyles}>
        <CustomLineChart 
          seriesData={altitudeData}
          width={500}
          height={300}
          sx={{color:"#CDCDCD !important"}}
        />
      </Card>
      <StatusCard />
      </Grid>
    </ThemeProvider>
  )
}

export default Dashboard