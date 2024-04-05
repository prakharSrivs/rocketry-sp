import { Grid } from '@mui/material'
import { LineChart } from '@mui/x-charts/LineChart';
import React, { useState, useEffect } from 'react'

const CustomLineChart = ({
    seriesData=[],
    width,
    height,
    xLabels=[],
}) => {

  const [xLabelsLength, setXLabelsLength ] = useState(110);

  useEffect(()=>{

    const xLabelsInterval = setInterval(()=>{
        setXLabelsLength(xLabelsLength+150);
    },20000)

    return ()=>{
      clearInterval(xLabelsInterval);
    }

  },[])

  return (
    <Grid>
        <LineChart
            width={width}
            height={height}
            series={[...seriesData]}
            xAxis={[{ data: Array.from({ length: xLabelsLength }, (_, idx) => `${idx/10 + 0.2}`) }]}
        />
    </Grid>
  )
}

export default CustomLineChart