import { Card, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
    }, 
    cardHeader:{
        fontFamily:"Ubuntu",
        fontSize:{
            xs:"20px",
            md:"24px",
        },
        fontWeight:600,
        color:"#CDCDCD"
    },
    weatherDetail:{
        fontFamily:"Ubuntu",
        fontSize:{
            xs:"14px",
            md:"18px"
        },
        width:"100%",
        textAlign:{
            md:"left",
            xs:"center",
        },
        mt:{
            xs:"5px",
            md:"8px",
        },
        color:"#CDCDCD"
    }

}

export const CardDetail = ({ header, value })=>{
    return (
        <Typography sx={styles.weatherDetail}>{header}: {value}</Typography>
    )
}

const CentralConsole = () => {

    const [weatherData,setWeatherData] = useState();

    const fetchWeatherData = async()=>{
        try{
            const { data } = await axios.get(
                'https://api.weatherapi.com/v1/current.json?key=e01f1b0728fb4585a2e62753240104&q=agartala',
                {mode:'no-cors'}
            );
            setWeatherData(data)
        }catch(e){
            alert(e.message);
        }
    }

    useEffect(()=>{
        fetchWeatherData();
    },[])

  return (
    weatherData ? 
    <Card sx={styles.cardStyles}>
        <Typography sx={styles.cardHeader}>
            Weather Information
        </Typography>
        <CardDetail header={"Precipitation"} value={weatherData?.current?.condition?.text} />
        <CardDetail header={"Temperature"} value={weatherData?.current?.temp_f+" °F"} />
        <CardDetail header={"Humidity"} value={weatherData?.current?.humidity+" %"} />
        <CardDetail header={"Wind Speed"} value={weatherData?.current?.wind_kph+" kph"} />
        <CardDetail header={"Wind Direction"} value={weatherData?.current?.wind_dir} />
        <CardDetail header={"Pressure"} value={weatherData?.current?.pressure_in} />
        <CardDetail header={"Visibility"} value={weatherData?.current?.vis_km+" KM"}/>
    </Card> :
    <></>
  )
}

export default CentralConsole