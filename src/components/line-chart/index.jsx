import { Grid } from '@mui/material'
import { LineChart } from '@mui/x-charts/LineChart';
import React from 'react'

const CustomLineChart = ({
    seriesData=[],
    width,
    height,
    xLabels=[],
}) => {

  return (
    <Grid>
        <LineChart
            width={width}
            height={height}
            series={[...seriesData]}
            xAxis={xLabels.length===0 ? null : xLabels}
        />
    </Grid>
  )
}

export default CustomLineChart