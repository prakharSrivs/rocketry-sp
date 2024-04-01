import { Card, Grid, ThemeProvider, createTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CustomLineChart from '../line-chart'
import CentralConsole from '../central-console';
import StatusCard from '../status-card';

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

  const newTheme = createTheme({ palette: { mode: "dark" } });
  const xData = [5, 4.5, 4.6, 5.5, 6.6, 5, 4];
  const yData = [5, 4.5, 4.6, 5.5, 6.6, 5, 4];
  const zData = [10, 20, 30, 45, 55, 60, 90];
  const accData = [0,10,15, 20, 30, 35, 50];
  const seriesXData = [         
    { data: xData, label: `Position(X) ${xData[xData.length-1]}m` },
  ];
  const seriesYData = [
    { data: yData, label: `Position(Y) ${yData[yData.length-1]}m` }
  ]
  const seriesZData = [
    { data: zData, label: `Position(Z) ${zData[zData.length-1]}m` }
  ]
  const seriesAccData = [
    { data: accData, label: `Acc ${accData[accData.length-1]}m/s` }
  ]
  const xLabels = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
  ]


  return (
    <ThemeProvider theme={newTheme}>
      <Grid sx={styles.dashboardContainer}>
      <CentralConsole />
      <Card sx={styles.cardStyles}>
        <CustomLineChart 
          seriesData={seriesXData}
          xLabels={[...xLabels]}
          width={500}
          height={300}
          sx={{color:"#CDCDCD !important"}}
        />
      </Card>
      <Card sx={styles.cardStyles}>
        <CustomLineChart 
          seriesData={seriesYData}
          xLabels={[...xLabels]}
          width={500}
          height={300}
          sx={{color:"#CDCDCD !important"}}
        />
      </Card>
      <Card sx={styles.cardStyles}>
        <CustomLineChart 
          seriesData={seriesZData}
          xLabels={[...xLabels]}
          width={500}
          height={300}
          sx={{color:"#CDCDCD !important"}}
        />
      </Card>
      <Card sx={styles.cardStyles}>
        <CustomLineChart 
          seriesData={seriesAccData}
          xLabels={[...xLabels]}
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